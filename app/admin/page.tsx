import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getUserByClientId, listClients, listDocumentsByClient } from "@/lib/store";
import PortalHeader from "@/components/portal/PortalHeader";
import { IconArrowRight } from "@/components/icons";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/portal/ingreso");
  }

  const clients = listClients();

  return (
    <main className="min-h-screen">
      <PortalHeader title="Panel de administración" subtitle="Panel interno" />
      <div className="mx-auto max-w-content px-6 py-14 md:px-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-eyebrow">Clientes</p>
            <h1 className="mt-3 font-serif text-[32px] font-medium text-ink">
              Panel de administración
            </h1>
          </div>
          <Link href="/admin/clientes/nuevo" className="btn-primary">
            Nuevo cliente
          </Link>
        </div>

        {clients.length === 0 ? (
          <p className="mt-10 text-stone">Todavía no hay clientes cargados.</p>
        ) : (
          <ul className="mt-10 divide-y divide-hairline rounded border border-hairline">
            {clients.map((client) => {
              const access = getUserByClientId(client.id);
              const docCount = listDocumentsByClient(client.id).length;
              return (
                <li key={client.id}>
                  <Link
                    href={`/admin/clientes/${client.id}`}
                    className="flex items-center justify-between gap-4 px-5 py-5 hover:bg-sand"
                  >
                    <div>
                      <p className="font-medium text-ink">{client.name}</p>
                      <p className="mt-1 text-[13px] text-stone">
                        {access ? `Acceso: ${access.username}` : "Sin acceso creado"} · {docCount}{" "}
                        documento{docCount === 1 ? "" : "s"}
                      </p>
                    </div>
                    <IconArrowRight className="h-4 w-4 text-stone" />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
