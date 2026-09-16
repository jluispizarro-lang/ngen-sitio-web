import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { createClientAction } from "@/app/admin/actions";
import PortalHeader from "@/components/portal/PortalHeader";

export default async function NewClientPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/portal/ingreso");
  }

  return (
    <main className="min-h-screen">
      <PortalHeader title="Nuevo cliente" subtitle="Panel interno" />
      <div className="mx-auto max-w-content px-6 py-14 md:px-9">
        <p className="section-eyebrow">Clientes</p>
        <h1 className="mt-3 font-serif text-[32px] font-medium text-ink">Agregar cliente nuevo</h1>

        <form action={createClientAction} className="mt-10 flex max-w-md flex-col gap-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-charcoal">
              Nombre del cliente
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
            />
          </div>
          <button type="submit" className="btn-primary w-fit">
            Crear cliente
          </button>
        </form>
      </div>
    </main>
  );
}
