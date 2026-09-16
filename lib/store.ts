/**
 * Almacén de datos del portal de clientes (autenticación, clientes,
 * documentos). Se usa un archivo JSON en vez de una base de datos SQL
 * a propósito: no requiere compilación nativa (fricción conocida en
 * Windows) y la escala de Ngen (decenas de clientes) no lo justifica.
 * Si el volumen crece mucho, migrar esto a una base de datos real sin
 * cambiar la forma de las funciones exportadas.
 *
 * Este archivo nunca debe importarse desde un componente cliente — solo
 * se usa en Server Components, Server Actions y Route Handlers.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "portal-db.json");
export const UPLOADS_DIR = path.join(DATA_DIR, "uploads");

export type PortalRole = "admin" | "client";

export type Client = {
  id: string;
  name: string;
  createdAt: string;
};

export type PortalUser = {
  id: string;
  username: string;
  passwordHash: string;
  role: PortalRole;
  clientId: string | null;
  createdAt: string;
};

export type DocumentCategory =
  | "recursos_base"
  | "contratos"
  | "iniciativas_proyectos"
  | "material_referencia";

export type PortalDocument = {
  id: string;
  clientId: string;
  category: DocumentCategory;
  originalName: string;
  storedFile: string;
  sizeBytes: number;
  uploadedAt: string;
};

type Db = {
  clients: Client[];
  users: PortalUser[];
  documents: PortalDocument[];
};

function emptyDb(): Db {
  return { clients: [], users: [], documents: [] };
}

function ensureDirs() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function readDb(): Db {
  ensureDirs();
  if (!fs.existsSync(DB_PATH)) {
    const db = emptyDb();
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
    return db;
  }
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as Db;
}

function writeDb(db: Db) {
  ensureDirs();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

export function listClients(): Client[] {
  return readDb().clients.sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export function getClientById(id: string): Client | undefined {
  return readDb().clients.find((c) => c.id === id);
}

export function createClient(name: string): Client {
  const db = readDb();
  const client: Client = {
    id: crypto.randomUUID(),
    name: name.trim(),
    createdAt: new Date().toISOString(),
  };
  db.clients.push(client);
  writeDb(db);
  return client;
}

export function getUserByUsername(username: string): PortalUser | undefined {
  return readDb().users.find((u) => u.username.toLowerCase() === username.toLowerCase());
}

export function getUserByClientId(clientId: string): PortalUser | undefined {
  return readDb().users.find((u) => u.clientId === clientId);
}

/** Crea el acceso de un cliente o le asigna usuario/contraseña nuevos si ya existía. */
export function upsertClientAccess(
  clientId: string,
  username: string,
  passwordHash: string
): PortalUser {
  const db = readDb();
  const existing = db.users.find((u) => u.clientId === clientId);
  if (existing) {
    existing.username = username;
    existing.passwordHash = passwordHash;
    writeDb(db);
    return existing;
  }
  const user: PortalUser = {
    id: crypto.randomUUID(),
    username,
    passwordHash,
    role: "client",
    clientId,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  writeDb(db);
  return user;
}

export function listDocumentsByClient(clientId: string): PortalDocument[] {
  return readDb()
    .documents.filter((d) => d.clientId === clientId)
    .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
}

export function getDocumentById(id: string): PortalDocument | undefined {
  return readDb().documents.find((d) => d.id === id);
}

export function createDocument(
  doc: Omit<PortalDocument, "id" | "uploadedAt">
): PortalDocument {
  const db = readDb();
  const document: PortalDocument = {
    ...doc,
    id: crypto.randomUUID(),
    uploadedAt: new Date().toISOString(),
  };
  db.documents.push(document);
  writeDb(db);
  return document;
}

export function deleteDocument(id: string): PortalDocument | undefined {
  const db = readDb();
  const index = db.documents.findIndex((d) => d.id === id);
  if (index === -1) return undefined;
  const removed = db.documents[index];
  if (!removed) return undefined;
  db.documents.splice(index, 1);
  writeDb(db);
  return removed;
}
