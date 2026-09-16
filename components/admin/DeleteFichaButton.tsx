"use client";

import { useTransition } from "react";
import { deleteFichaAction } from "@/app/admin/fichas-actions";

export default function DeleteFichaButton({ fichaId }: { fichaId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        if (confirm("¿Eliminar esta ficha? Esta acción no se puede deshacer.")) {
          startTransition(() => deleteFichaAction(fichaId));
        }
      }}
      disabled={pending}
      className="text-sm font-medium text-stone hover:text-clay-dark"
    >
      {pending ? "Eliminando…" : "Eliminar"}
    </button>
  );
}
