#!/usr/bin/env node
/**
 * Crea (o reemplaza) la cuenta de administrador del portal de clientes.
 * Uso: npm run create-admin -- [usuario] [contraseña]
 * Si no se pasa contraseña, se genera una segura automáticamente.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import bcrypt from "bcryptjs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "portal-db.json");

function readDb() {
  if (!fs.existsSync(DB_PATH)) return { clients: [], users: [], documents: [] };
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDb(db) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

function generatePassword() {
  return crypto.randomBytes(9).toString("base64").replace(/[+/=]/g, "").slice(0, 12);
}

const username = process.argv[2] ?? "admin";
const password = process.argv[3] ?? generatePassword();

const db = readDb();
const existingIndex = db.users.findIndex(
  (u) => u.username.toLowerCase() === username.toLowerCase()
);

const passwordHash = bcrypt.hashSync(password, 10);

if (existingIndex >= 0) {
  db.users[existingIndex].passwordHash = passwordHash;
  db.users[existingIndex].role = "admin";
  writeDb(db);
  console.log(`Contraseña actualizada para el administrador existente "${username}".`);
} else {
  db.users.push({
    id: crypto.randomUUID(),
    username,
    passwordHash,
    role: "admin",
    clientId: null,
    createdAt: new Date().toISOString(),
  });
  writeDb(db);
  console.log("Cuenta de administrador creada.");
}

console.log(`  Usuario:    ${username}`);
console.log(`  Contraseña: ${password}`);
console.log("Guárdala en un lugar seguro — no se volverá a mostrar.");
