import Image from "next/image";
import { siteContent } from "@/lib/content";
import { IconArrowRight } from "./icons";
import heroIllustration from "@/public/images/hero-ilustracion-terreno.jpg";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-9 md:py-28">
      <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full lg:flex-1">
          <div className="mb-7 flex items-center gap-2.5">
            <span className="h-px w-7 bg-clay" aria-hidden="true" />
            <span className="section-eyebrow">{hero.eyebrow}</span>
          </div>

          <h1 className="text-[40px] font-medium leading-[1.1] text-ink md:text-[56px] lg:text-[60px]">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80 md:text-[19px]">
            {hero.subheadline}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-5">
            <a href="#contacto" className="btn-primary">
              {hero.ctaPrimary}
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold"
            >
              {hero.ctaSecondary}
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="w-full max-w-[420px] lg:w-[42%] lg:max-w-[480px]">
          <Image
            src={heroIllustration}
            alt="Ilustración técnica de un teodolito de topografía sobre terrazas de cultivo con riego tecnificado"
            className="h-auto w-full"
            priority
            sizes="(min-width: 1024px) 480px, 420px"
          />
        </div>
      </div>
    </section>
  );
}
