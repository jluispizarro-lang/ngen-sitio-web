import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { listFichas } from "@/lib/fichas-store";
import { fichaCategories, fichaCategoryLabel } from "@/lib/fichas-categories";
import PortalHeader from "@/components/portal/PortalHeader";
import UploadFichaForm from "@/components/admin/UploadFichaForm";
import DeleteFichaButton from "@/components/admin/DeleteFichaButton";
import { IconFile } from "@/components/icons";

export default async function AdminFichasPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/portal/ingreso");
  }

  const fichas = listFichas();

  return (
    <main className="min-h-screen">
      <PortalHeader title="Plan Caprino" subtitle="Panel interno" />
      <div className="mx-auto max-w-content px-6 py-14 md:px-9">
        <p className="section-eyebrow">Plan Caprino</p>
        <h1 className="mt-3 font-serif text-[32px] font-medium text-ink">
          Fichas técnicas y manuales
        </h1>
        <p className="mt-3 max-w-xl text-stone">
          Esta biblioteca es pública — no requiere que el visitante inicie sesión. Aparece en{" "}
          <span className="font-medium text-ink">/plan-caprino</span>.
        </p>

        <section className="mt-10 rounded border border-hairline p-6">
          <h2 className="font-serif text-lg font-medium text-ink">Subir nueva ficha</h2>
          <UploadFichaForm />
        </section>

        <div className="mt-10 space-y-10">
          {fichaCategories.map((category) => {
            const items = fichas.filter((f) => f.category === category.id);
            return (
              <section key={category.id}>
                <h2 className="font-serif text-lg font-medium text-ink">{category.label}</h2>
                {items.length === 0 ? (
                  <p className="mt-3 text-sm text-stone">Sin fichas todavía.</p>
                ) : (
                  <ul className="mt-4 divide-y divide-hairline rounded border border-hairline">
                    {items.map((ficha) => (
                      <li key={ficha.id} className="flex items-center justify-between gap-4 px-5 py-4">
                        <div className="flex items-start gap-3">
                          <IconFile className="mt-0.5 h-4 w-4 shrink-0 text-stone" />
                          <div>
                            <p className="text-sm font-medium text-charcoal">
                              {ficha.title}
                              {ficha.featured && (
                                <span className="ml-2 text-[11px] uppercase tracking-wide text-clay">
                                  Destacada
                                </span>
                              )}
                            </p>
                            <p className="mt-0.5 text-[13px] text-stone">
                              {ficha.authors.join(", ") || "Sin autor indicado"} · {fichaCategoryLabel(ficha.category)}
                            </p>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-4">
                          <a
                            href={`/api/fichas/${ficha.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-clay hover:text-clay-dark"
                          >
                            Ver
                          </a>
                          <DeleteFichaButton fichaId={ficha.id} />
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
