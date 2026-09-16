import { regions, siteContent } from "@/lib/content";

export default function Coverage() {
  return (
    <section
      id="cobertura"
      className="mx-auto max-w-content border-t border-hairline px-6 py-24 md:px-9"
    >
      <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-20">
        <div className="flex-1">
          <h2 className="text-[28px] font-medium text-ink md:text-[30px]">
            {siteContent.coverage.title}
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/80">{siteContent.coverage.body}</p>
        </div>

        <div className="flex flex-1 flex-col">
          {regions.map((region, index) => (
            <div
              key={region.name}
              className={`flex items-center gap-5 py-[18px] ${
                index < regions.length - 1 ? "border-b border-hairline" : ""
              }`}
            >
              <span className="w-[34px] font-serif text-[22px] text-clay">{region.numeral}</span>
              <span className="text-base font-medium text-ink">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
