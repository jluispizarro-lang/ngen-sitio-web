"use client";

import { signOut } from "next-auth/react";

type Props = {
  title: string;
  subtitle?: string;
};

export default function PortalHeader({ title, subtitle }: Props) {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-7 md:px-9">
        <div className="flex items-baseline gap-2.5">
          <span className="font-serif text-xl font-semibold tracking-wide text-ink">NGEN</span>
          <span className="hidden text-xs text-stone sm:inline">{subtitle ?? "Espacio de clientes"}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden text-sm text-charcoal sm:inline">{title}</span>
          <button
            onClick={() => signOut({ callbackUrl: "/portal/ingreso" })}
            className="btn-secondary text-[13px]"
          >
            Salir
          </button>
        </div>
      </div>
    </header>
  );
}
