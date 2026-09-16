import { siteContent } from "@/lib/content";
import { IconArrowRight } from "./icons";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="mx-auto max-w-content px-6 py-24 md:px-9 md:py-32">
      <div className="mb-7 flex items-center gap-2.5">
        <span className="h-px w-7 bg-clay" aria-hidden="true" />
        <span className="section-eyebrow">{hero.eyebrow}</span>
      </div>

      <h1 className="max-w-3xl text-[40px] font-medium leading-[1.1] text-ink md:text-[64px]">
        {hero.headline}
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80 md:text-[19px]">
        {hero.subheadline}
      </p>

      <div className="mt-11 flex flex-wrap items-center gap-5">
        <a href="#contacto" className="btn-primary">
          {hero.ctaPrimary}
        </a>
        <a href="#especialidades" className="inline-flex items-center gap-1.5 text-[15px] font-semibold">
          {hero.ctaSecondary}
          <IconArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
