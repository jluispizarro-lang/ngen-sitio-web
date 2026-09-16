"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { authOptions } from "@/lib/auth";
import {
  createClient,
  createDocument,
  deleteDocument,
  getDocumentById,
  upsertClientAccess,
  UPLOADS_DIR,
  type DocumentCategory,
} from "@/lib/store";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/portal/ingreso");
  }
  return session;
}

function generatePassword(): string {
  return crypto.randomBytes(9).toString("base64").replace(/[+/=]/g, "").slice(0, 12);
}

function slugifyUsername(name: string): string {
  const base = name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "");
  return base || "cliente";
}

/** Solo se aceptan extensiones simples y conocidas; cualquier otra cosa se descarta. */
function safeExtension(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  return /^\.[a-z0-9]{1,8}$/.test(ext) ? ext : "";
}

export async function createClientAction(formData: FormData) {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return;

  const client = createClient(name);
  revalidatePath("/admin");
  redirect(`/admin/clientes/${client.id}`);
}

export async function createAccessAction(clientId: string, clientName: string) {
  await requireAdmin();
  const username = slugifyUsername(clientName);
  const password = generatePassword();
  const passwordHash = await bcrypt.hash(password, 10);

  upsertClientAccess(clientId, username, passwordHash);
  revalidatePath(`/admin/clientes/${clientId}`);

  return { username, password };
}

export async function uploadDocumentAction(formData: FormData) {
  await requireAdmin();

  const clientId = String(formData.get("clientId") ?? "");
  const category = String(formData.get("category") ?? "") as DocumentCategory;
  const file = formData.get("file");

  if (!clientId || !category || !(file instanceof File) || file.size === 0) {
    return;
  }

  const clientDir = path.join(UPLOADS_DIR, clientId);
  await fs.mkdir(clientDir, { recursive: true });

  const storedFile = `${crypto.randomUUID()}${safeExtension(file.name)}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(clientDir, storedFile), buffer);

  createDocument({
    clientId,
    category,
    originalName: file.name,
    storedFile,
    sizeBytes: file.size,
  });

  revalidatePath(`/admin/clientes/${clientId}`);
}

export async function deleteDocumentAction(documentId: string, clientId: string) {
  await requireAdmin();

  const document = getDocumentById(documentId);
  if (document) {
    await fs.unlink(path.join(UPLOADS_DIR, document.clientId, document.storedFile)).catch(() => {});
    deleteDocument(documentId);
  }

  revalidatePath(`/admin/clientes/${clientId}`);
}
