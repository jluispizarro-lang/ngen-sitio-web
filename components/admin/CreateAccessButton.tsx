"use client";

import { useState, useTransition } from "react";
import { createAccessAction } from "@/app/admin/actions";

type Props = {
  clientId: string;
  clientName: string;
  hasAccess: boolean;
};

export default function CreateAccessButton({ clientId, clientName, hasAccess }: Props) {
  const [pending, startTransition] = useTransition();
  const [credentials, setCredentials] = useState<{ username: string; password: string } | null>(
    null
  );

  function handleClick() {
    startTransition(async () => {
      const result = await createAccessAction(clientId, clientName);
      setCredentials(result);
    });
  }

  return (
    <div>
      <button onClick={handleClick} disabled={pending} className="btn-secondary text-[13px]">
        {pending ? "Generando…" : hasAccess ? "Regenerar contraseña" : "Crear acceso"}
      </button>
      {credentials && (
        <div className="mt-4 rounded border border-clay-light bg-clay-light/50 px-5 py-4 text-[14px] text-charcoal">
          <p className="font-medium text-ink">
            Guarda estos datos ahora — la contraseña no se volverá a mostrar.
          </p>
          <p className="mt-2">
            Usuario: <span className="font-mono">{credentials.username}</span>
          </p>
          <p>
            Contraseña: <span className="font-mono">{credentials.password}</span>
          </p>
        </div>
      )}
    </div>
  );
}
