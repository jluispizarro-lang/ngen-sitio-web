import { NextResponse, type NextRequest } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { getFichaById, FICHAS_DIR } from "@/lib/fichas-store";

/**
 * A diferencia de /api/files/[documentId] (portal de clientes, privado),
 * esta ruta es pública a propósito: el Plan Caprino es material de
 * difusión técnica, no expedientes de cliente. No requiere sesión.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: { fichaId: string } }
) {
  const ficha = getFichaById(params.fichaId);
  if (!ficha) {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }

  const filePath = path.join(FICHAS_DIR, ficha.storedFile);

  let fileBuffer: Buffer;
  try {
    fileBuffer = await fs.readFile(filePath);
  } catch {
    return NextResponse.json({ error: "Archivo no disponible" }, { status: 404 });
  }

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(ficha.originalName)}`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
