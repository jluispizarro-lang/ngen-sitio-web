"use client";

import { useTransition } from "react";
import { deleteDocumentAction } from "@/app/admin/actions";

export default function DeleteDocumentButton({
  documentId,
  clientId,
}: {
  documentId: string;
  clientId: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        if (confirm("¿Eliminar este documento? Esta acción no se puede deshacer.")) {
          startTransition(() => deleteDocumentAction(documentId, clientId));
        }
      }}
      disabled={pending}
      className="text-sm font-medium text-stone hover:text-clay-dark"
    >
      {pending ? "Eliminando…" : "Eliminar"}
    </button>
  );
}
