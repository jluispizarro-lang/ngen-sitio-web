import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getClientById, getUserByClientId, listDocumentsByClient } from "@/lib/store";
import { documentCategories } from "@/lib/categories";
import PortalHeader from "@/components/portal/PortalHeader";
import CreateAccessButton from "@/components/admin/CreateAccessButton";
import UploadDocumentForm from "@/components/admin/UploadDocumentForm";
import DeleteDocumentButton from "@/components/admin/DeleteDocumentButton";
import { IconFile } from "@/components/icons";

export default async function ClientDetailPage({
  params,
}: {
  params: { clientId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/portal/ingreso");
  }

  const client = getClientById(params.clientId);
  if (!client) notFound();

  const access = getUserByClientId(client.id);
  const documents = listDocumentsByClient(client.id);

  return (
    <main className="min-h-screen">
      <PortalHeader title={client.name} subtitle="Panel interno" />
      <div className="mx-auto max-w-content px-6 py-14 md:px-9">
        <p className="section-eyebrow">Cliente</p>
        <h1 className="mt-3 font-serif text-[32px] font-medium text-ink">{client.name}</h1>

        <section className="mt-10 rounded border border-hairline p-6">
          <h2 className="font-serif text-lg font-medium text-ink">Acceso al portal</h2>
          <p className="mt-2 text-sm text-stone">
            {access
              ? `Usuario actual: ${access.username}`
              : "Este cliente todavía no tiene acceso al portal."}
          </p>
          <div className="mt-4">
            <CreateAccessButton
              clientId={client.id}
              clientName={client.name}
              hasAccess={Boolean(access)}
            />
          </div>
        </section>

        <section className="mt-10 rounded border border-hairline p-6">
          <h2 className="font-serif text-lg font-medium text-ink">Subir documento</h2>
          <UploadDocumentForm clientId={client.id} />
        </section>

        <div className="mt-10 space-y-10">
          {documentCategories.map((category) => {
            const items = documents.filter((doc) => doc.category === category.id);
            return (
              <section key={category.id}>
                <h2 className="font-serif text-lg font-medium text-ink">{category.label}</h2>
                {items.length === 0 ? (
                  <p className="mt-3 text-sm text-stone">Sin documentos.</p>
                ) : (
                  <ul className="mt-4 divide-y divide-hairline rounded border border-hairline">
                    {items.map((doc) => (
                      <li key={doc.id} className="flex items-center justify-between gap-4 px-5 py-4">
                        <div className="flex items-center gap-3">
                          <IconFile className="h-4 w-4 text-stone" />
                          <span className="text-sm text-charcoal">{doc.originalName}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <a
                            href={`/api/files/${doc.id}`}
                            className="text-sm font-medium text-clay hover:text-clay-dark"
                          >
                            Ver
                          </a>
                          <DeleteDocumentButton documentId={doc.id} clientId={client.id} />
                        </div>
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
