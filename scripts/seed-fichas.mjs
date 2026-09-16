#!/usr/bin/env node
/**
 * Carga inicial de fichas técnicas reales del Plan Caprino, rescatadas
 * de los documentos originales del usuario (no del sitio antiguo).
 * Ejecuta la misma lógica que haría el panel /admin/fichas al subir un
 * archivo — esto es solo un "bulk import" de arranque, no reemplaza el
 * panel para cargas futuras.
 *
 * Uso: node scripts/seed-fichas.mjs
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "fichas-db.json");
const FICHAS_DIR = path.join(DATA_DIR, "fichas-files");

function readDb() {
  if (!fs.existsSync(DB_PATH)) return { fichas: [] };
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDb(db) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

const SRC_BASE =
  "D:\\2. Plan Caprino xxx\\19. Plan Caprino 2024-2027\\4. Fichas y Manuales";

const entries = [
  {
    src: `${SRC_BASE}\\Consolidado Material Plan Caprino Ngen V08.pdf`,
    title: "Manual Plan Caprino Lechero",
    description:
      "Manual didáctico de producción de ganado caprino lechero: selección de ganado, evaluación lineal, manejo reproductivo, alimentación y nutrición, reconocimiento de problemas de parto, piojos, cálculos urinarios, oestrus ovis y mastitis. 98 páginas.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro", "Guillermo Palta", "Catalina Pizarro Orrego"],
    featured: true,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\SIST NERVIOSO\\ENFERMEDADES ASOCIADAS AL SISTEMA NERVIOSO.pdf`,
    title: "Enfermedades Asociadas al Sistema Nervioso — Parte I: Cenurosis Cerebralis",
    description:
      "Descripción, agente causal y reconocimiento en terreno de la cenurosis cerebral en ganado caprino.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\ENFERMEDADES GENERALES\\Enfermedades Caprinas con Sintomatología Nerviosa.pdf`,
    title: "Enfermedades Caprinas con Sintomatología Nerviosa",
    description:
      "Descripción, agente causal, tiempos de evolución y diferenciación en campo de las enfermedades caprinas con compromiso neurológico.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\ENFERMEDADES GENERALES\\Comparación y Diferenciación en Campo para una Mejor Discriminación.pdf`,
    title: "Comparación y Diferenciación en Campo",
    description:
      "Tabla comparativa para diferenciar en terreno CAE forma nerviosa, listeriosis, cenurosis cerebral, enterotoxemia, poliencefalomalacia y tétanos.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\CAMBIO CLIMATICO\\CAMBIO CLIMATICO Y SU ASOCIACION A ESTRÉS TERMICO EN CABRAS.pdf`,
    title: "Cambio Climático y su Asociación a Estrés Térmico en Cabras",
    description:
      "Efectos del cambio climático y el estrés térmico en cabras de la región de Coquimbo sometidas a periodos extremos de calor.",
    category: "cambio_climatico",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\CAMBIO CLIMATICO\\Minuta Cambio Climático y Biodiversidad V02.pdf`,
    title: "Cambio Climático y Biodiversidad",
    description:
      "La importancia del cuidado de la biodiversidad en el marco de los Objetivos de Desarrollo Sustentable de la ONU, aplicado a la producción caprina.",
    category: "cambio_climatico",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\ORINES EN ESTABLOS\\Anexo 7. Importancia de Patios Amplios en Establos.pdf`,
    title: "Importancia de Disponer de Establos con Patios Amplios",
    description:
      "Por qué los establos con patios amplios reducen la proliferación de enfermedades: emisiones diarias de fecas y orina en una cabra adulta.",
    category: "infraestructura",
    authors: ["José Luis Pizarro", "Guillermo Palta"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\ALIMENTACION\\ALIMENTACION GANADO CAPRINO V00.pdf`,
    title: "Alimentación de Ganado Caprino — Parte I: Un Balance Nutritivo",
    description:
      "Fundamentos de la dieta caprina y su relación con la producción de leche, carne y reproducción.",
    category: "nutricion_alimentacion",
    authors: ["José Luis Pizarro", "Guillermo Palta"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\Moscas Agroecología\\FITOMANEJO GANADERO_V01.pdf`,
    title: "Fitomanejo Ganadero",
    description:
      "Compilación de saberes tradicionales e investigación moderna para el manejo fitosanitario del ganado caprino en Atacama y Coquimbo.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro", "Guillermo Palta"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\INOCUIDAD\\Control de la Mosca-Ngen Consultores.pdf`,
    title: "Estrategia y Gestión para el Control de Moscas",
    description:
      "Control cultural, físico y químico de moscas en establos: limpieza, manejo de la guanera y trampas adhesivas.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\3. JLPizarro\\Calendario_Sanitario_y_Reproductivo_V01.pdf`,
    title: "Calendario Sanitario y Reproductivo",
    description:
      "Calendario mes a mes de intervenciones sanitarias y de manejo reproductivo para un encaste de enero-febrero.",
    category: "salud_manejo_sanitario",
    authors: ["José Luis Pizarro", "Guillermo Palta"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\1. Gines Orrego\\comercialización de prod lácteos V02.pdf`,
    title: "Perspectivas del Mercado de Leche y Queso de Cabra",
    description:
      "Demanda, precios y rentabilidad para el productor en el mercado de leche y derivados lácteos de cabra.",
    category: "comercializacion",
    authors: ["Gines Orrego"],
    featured: false,
  },
  {
    src: `${SRC_BASE}\\2. Guillermo Palta\\Manejo_Sanitario_II_GPalta_V00.pdf`,
    title: "Manejo Sanitario del Ganado Caprino Lechero",
    description:
      "Prevención y control de las enfermedades que afectan al ganado caprino lechero, y su impacto económico.",
    category: "salud_manejo_sanitario",
    authors: ["Guillermo Palta"],
    featured: false,
  },
  {
    src: "C:\\Users\\josel\\AppData\\Local\\Temp\\fichas_convert\\SAL EN EL QUESO DE CABRA V00.pdf",
    title: "Sal en el Queso de Cabra",
    description:
      "Análisis comparativo del contenido de sal en marcas de queso de cabra del mercado formal chileno.",
    category: "nutricion_alimentacion",
    authors: ["José Luis Pizarro"],
    featured: false,
  },
];

function safeExtension(filename) {
  const ext = path.extname(filename).toLowerCase();
  return /^\.[a-z0-9]{1,8}$/.test(ext) ? ext : ".pdf";
}

fs.mkdirSync(FICHAS_DIR, { recursive: true });
const db = readDb();

let imported = 0;
let skipped = 0;

for (const entry of entries) {
  const srcPath = entry.src;
  if (!fs.existsSync(srcPath)) {
    console.error(`OMITIDA (no encontrada): ${entry.title} -> ${srcPath}`);
    skipped++;
    continue;
  }

  const originalName = path.basename(srcPath);
  const storedFile = `${crypto.randomUUID()}${safeExtension(originalName)}`;
  const destPath = path.join(FICHAS_DIR, storedFile);
  fs.copyFileSync(srcPath, destPath);
  const sizeBytes = fs.statSync(destPath).size;

  db.fichas.push({
    id: crypto.randomUUID(),
    title: entry.title,
    description: entry.description,
    category: entry.category,
    authors: entry.authors,
    featured: entry.featured,
    originalName,
    storedFile,
    sizeBytes,
    publishedAt: new Date().toISOString(),
  });

  console.log(`Cargada: ${entry.title} (${(sizeBytes / 1024).toFixed(0)} KB)`);
  imported++;
}

writeDb(db);
console.log(`\n${imported} fichas cargadas, ${skipped} omitidas.`);
