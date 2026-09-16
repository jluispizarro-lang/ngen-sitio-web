import { siteContent, specialties } from "@/lib/content";
import { specialtyIconMap } from "./icons";

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-sand">
      <div className="mx-auto max-w-content px-6 py-20 md:px-9 md:py-24">
        <h2 className="text-[28px] font-medium text-ink md:text-[30px]">
          {siteContent.specialtiesIntro.title}
        </h2>
        <p className="mt-3 max-w-lg text-stone">{siteContent.specialtiesIntro.subtitle}</p>

        <ul className="mt-14 grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => {
            const Icon = specialtyIconMap[specialty.icon];
            return (
              <li key={specialty.title} className="flex flex-col gap-4">
                <Icon className="h-[30px] w-[30px] text-clay" />
                <h3 className="font-sans text-lg font-semibold text-ink">{specialty.title}</h3>
                <p className="text-sm leading-relaxed text-stone">{specialty.description}</p>
                {specialty.link && (
                  <a
                    href={specialty.link.href}
                    className="mt-auto text-sm font-medium text-clay hover:text-clay-dark"
                  >
                    {specialty.link.label} →
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
