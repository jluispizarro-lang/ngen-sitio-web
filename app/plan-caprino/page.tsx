import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { listFichas, getFeaturedFichas } from "@/lib/fichas-store";
import { fichaCategories } from "@/lib/fichas-categories";
import { IconDownload, IconFile } from "@/components/icons";

export const metadata = {
  title: "Plan Caprino — Ngen Servicios de Ingeniería",
  description:
    "Fichas técnicas y manuales de producción caprina elaborados por Ngen: manejo sanitario, nutrición, cambio climático, infraestructura y comercialización.",
};

export default function PlanCaprinoPage() {
  const fichas = listFichas();
  const featured = getFeaturedFichas();

  return (
    <main>
      <Nav />

      <section className="mx-auto max-w-content px-6 py-20 md:px-9 md:py-24">
        <p className="section-eyebrow">Producción Ganadera</p>
        <h1 className="mt-3 max-w-2xl text-[34px] font-medium leading-tight text-ink md:text-[44px]">
          Plan Caprino
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
          Fichas técnicas y manuales de producción caprina, elaborados en terreno por nuestro
          equipo — de acceso libre y descarga directa.
        </p>
      </section>

      {featured.length > 0 && (
        <section className="border-t border-hairline bg-sand">
          <div className="mx-auto max-w-content px-6 py-16 md:px-9">
            <h2 className="section-eyebrow">Recurso destacado</h2>
            <div className="mt-6 space-y-8">
              {featured.map((ficha) => (
                <div
                  key={ficha.id}
                  className="flex flex-col gap-5 rounded border border-hairline bg-cream p-7 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-ink">{ficha.title}</h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-stone">
                      {ficha.description}
                    </p>
                    {ficha.authors.length > 0 && (
                      <p className="mt-3 text-[13px] uppercase tracking-[0.06em] text-clay">
                        {ficha.authors.join(" · ")}
                      </p>
                    )}
                  </div>
                  <a
                    href={`/api/fichas/${ficha.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary shrink-0"
                  >
                    <IconDownload className="h-4 w-4" />
                    Descargar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-content px-6 py-20 md:px-9">
        {fichas.length === 0 ? (
          <p className="text-stone">Estamos publicando las primeras fichas — vuelve pronto.</p>
        ) : (
          <div className="space-y-14">
            {fichaCategories.map((category) => {
              const items = fichas.filter((f) => f.category === category.id && !f.featured);
              if (items.length === 0) return null;
              return (
                <div key={category.id}>
                  <h2 className="font-serif text-xl font-medium text-ink">{category.label}</h2>
                  <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((ficha) => (
                      <li
                        key={ficha.id}
                        className="flex flex-col gap-4 rounded border border-hairline p-6"
                      >
                        <IconFile className="h-6 w-6 text-clay" />
                        <div className="flex-1">
                          <h3 className="font-sans text-[15px] font-semibold text-ink">
                            {ficha.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-stone">
                            {ficha.description}
                          </p>
                        </div>
                        {ficha.authors.length > 0 && (
                          <p className="text-[12px] uppercase tracking-[0.06em] text-stone/80">
                            {ficha.authors.join(" · ")}
                          </p>
                        )}
                        <a
                          href={`/api/fichas/${ficha.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-clay hover:text-clay-dark"
                        >
                          <IconDownload className="h-4 w-4" />
                          Descargar
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
