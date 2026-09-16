/**
 * Almacén de datos del Plan Caprino — biblioteca pública de fichas
 * técnicas y manuales descargables. A diferencia de `lib/store.ts`
 * (portal de clientes, privado), este contenido es de acceso público:
 * no requiere sesión para descargarse.
 *
 * Mismo patrón de almacén JSON + archivos en disco que el portal, por
 * consistencia y para no introducir una segunda forma de hacer lo
 * mismo. Ver `lib/store.ts` para el razonamiento completo.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "fichas-db.json");
export const FICHAS_DIR = path.join(DATA_DIR, "fichas-files");

export type FichaCategory =
  | "salud_manejo_sanitario"
  | "nutricion_alimentacion"
  | "cambio_climatico"
  | "infraestructura"
  | "comercializacion";

export type Ficha = {
  id: string;
  title: string;
  description: string;
  category: FichaCategory;
  authors: string[];
  featured: boolean;
  originalName: string;
  storedFile: string;
  sizeBytes: number;
  publishedAt: string;
};

type Db = {
  fichas: Ficha[];
};

function emptyDb(): Db {
  return { fichas: [] };
}

function ensureDirs() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FICHAS_DIR)) fs.mkdirSync(FICHAS_DIR, { recursive: true });
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

export function listFichas(): Ficha[] {
  return readDb().fichas.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function listFichasByCategory(category: FichaCategory): Ficha[] {
  return listFichas().filter((f) => f.category === category);
}

export function getFeaturedFichas(): Ficha[] {
  return listFichas().filter((f) => f.featured);
}

export function getFichaById(id: string): Ficha | undefined {
  return readDb().fichas.find((f) => f.id === id);
}

export function createFicha(ficha: Omit<Ficha, "id" | "publishedAt">): Ficha {
  const db = readDb();
  const created: Ficha = {
    ...ficha,
    id: crypto.randomUUID(),
    publishedAt: new Date().toISOString(),
  };
  db.fichas.push(created);
  writeDb(db);
  return created;
}

export function deleteFicha(id: string): Ficha | undefined {
  const db = readDb();
  const index = db.fichas.findIndex((f) => f.id === id);
  if (index === -1) return undefined;
  const removed = db.fichas[index];
  if (!removed) return undefined;
  db.fichas.splice(index, 1);
  writeDb(db);
  return removed;
}
