import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import fs from "node:fs/promises";
import path from "node:path";
import { authOptions } from "@/lib/auth";
import { getDocumentById, UPLOADS_DIR } from "@/lib/store";

export async function GET(
  _req: NextRequest,
  { params }: { params: { documentId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const document = getDocumentById(params.documentId);
  if (!document) {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }

  const isOwner = session.user.role === "client" && session.user.clientId === document.clientId;
  const isAdmin = session.user.role === "admin";
  if (!isOwner && !isAdmin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const filePath = path.join(UPLOADS_DIR, document.clientId, document.storedFile);

  let fileBuffer: Buffer;
  try {
    fileBuffer = await fs.readFile(filePath);
  } catch {
    return NextResponse.json({ error: "Archivo no disponible" }, { status: 404 });
  }

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(document.originalName)}`,
      "Cache-Control": "private, no-store",
    },
  });
}
