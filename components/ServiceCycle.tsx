import { serviceCycle, siteContent } from "@/lib/content";
import { serviceStageIconMap } from "./icons";

export default function ServiceCycle() {
  return (
    <section id="servicios" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 md:px-9 md:py-24">
        <h2 className="text-[28px] font-medium text-ink md:text-[30px]">
          {siteContent.serviceCycleIntro.title}
        </h2>
        <p className="mt-3 max-w-md text-stone">{siteContent.serviceCycleIntro.subtitle}</p>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-hairline">
          {serviceCycle.map((stage, index) => {
            // serviceStageIconMap siempre tiene un ícono por cada etapa de serviceCycle.
            const Icon = serviceStageIconMap[index]!;
            return (
              <li key={stage.title} className="flex flex-col items-start gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[1.5px] border-clay">
                  <Icon className="h-[22px] w-[22px] text-clay" />
                </span>
                <h3 className="font-sans text-lg font-semibold text-ink">{stage.title}</h3>
                <p className="text-sm leading-relaxed text-stone">{stage.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
