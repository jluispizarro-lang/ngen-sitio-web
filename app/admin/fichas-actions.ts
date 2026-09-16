"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { authOptions } from "@/lib/auth";
import { createFicha, deleteFicha, getFichaById, FICHAS_DIR, type FichaCategory } from "@/lib/fichas-store";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/portal/ingreso");
  }
  return session;
}

/** Solo se aceptan extensiones simples y conocidas; cualquier otra cosa se descarta. */
function safeExtension(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  return /^\.[a-z0-9]{1,8}$/.test(ext) ? ext : "";
}

export async function uploadFichaAction(formData: FormData) {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const category = String(formData.get("category") ?? "") as FichaCategory;
  const authorsRaw = String(formData.get("authors") ?? "").trim();
  const featured = formData.get("featured") === "on";
  const file = formData.get("file");

  if (!title || !description || !category || !(file instanceof File) || file.size === 0) {
    return;
  }

  const authors = authorsRaw
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);

  await fs.mkdir(FICHAS_DIR, { recursive: true });

  const storedFile = `${crypto.randomUUID()}${safeExtension(file.name)}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(FICHAS_DIR, storedFile), buffer);

  createFicha({
    title,
    description,
    category,
    authors,
    featured,
    originalName: file.name,
    storedFile,
    sizeBytes: file.size,
  });

  revalidatePath("/admin/fichas");
  revalidatePath("/plan-caprino");
}

export async function deleteFichaAction(fichaId: string) {
  await requireAdmin();

  const ficha = getFichaById(fichaId);
  if (ficha) {
    await fs.unlink(path.join(FICHAS_DIR, ficha.storedFile)).catch(() => {});
    deleteFicha(fichaId);
  }

  revalidatePath("/admin/fichas");
  revalidatePath("/plan-caprino");
}
