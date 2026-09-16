import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getClientById, listDocumentsByClient } from "@/lib/store";
import { documentCategories } from "@/lib/categories";
import PortalHeader from "@/components/portal/PortalHeader";
import { IconDownload, IconFile, IconFolder } from "@/components/icons";

export default async function PortalPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "client" || !session.user.clientId) {
    redirect("/portal/ingreso");
  }

  const client = getClientById(session.user.clientId);
  const documents = listDocumentsByClient(session.user.clientId);

  return (
    <main className="min-h-screen">
      <PortalHeader title={client?.name ?? ""} />
      <div className="mx-auto max-w-content px-6 py-14 md:px-9">
        <p className="section-eyebrow">Espacio de clientes</p>
        <h1 className="mt-3 font-serif text-[32px] font-medium text-ink md:text-[40px]">
          {client?.name ?? "Cliente"}
        </h1>
        <p className="mt-3 max-w-xl text-stone">
          Aquí encuentras los expedientes y documentos asociados a tu contrato vigente con Ngen.
        </p>

        <div className="mt-12 space-y-10">
          {documentCategories.map((category) => {
            const items = documents.filter((doc) => doc.category === category.id);
            return (
              <section key={category.id}>
                <div className="flex items-center gap-3">
                  <IconFolder className="h-5 w-5 text-clay" />
                  <h2 className="font-serif text-lg font-medium text-ink">{category.label}</h2>
                </div>
                {items.length === 0 ? (
                  <p className="mt-3 text-sm text-stone">Todavía no hay documentos en esta categoría.</p>
                ) : (
                  <ul className="mt-4 divide-y divide-hairline rounded border border-hairline">
                    {items.map((doc) => (
                      <li key={doc.id} className="flex items-center justify-between gap-4 px-5 py-4">
                        <div className="flex items-center gap-3">
                          <IconFile className="h-4 w-4 text-stone" />
                          <span className="text-sm text-charcoal">{doc.originalName}</span>
                        </div>
                        <a
                          href={`/api/files/${doc.id}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-clay hover:text-clay-dark"
                        >
                          <IconDownload className="h-4 w-4" />
                          Descargar
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
