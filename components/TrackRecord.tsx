import { institutionalClients, trackRecord, trackRecordIntro } from "@/lib/content";

export default function TrackRecord() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-9 md:py-24">
      <h2 className="text-[28px] font-medium text-ink md:text-[30px]">{trackRecordIntro.title}</h2>
      <p className="mt-3 max-w-lg text-stone">{trackRecordIntro.subtitle}</p>

      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {trackRecord.map((item) => (
          <div key={item.label}>
            <p className="font-serif text-[38px] font-medium text-clay md:text-[42px]">{item.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-hairline pt-10">
        <p className="section-eyebrow">Hemos trabajado con</p>
        <p className="mt-3 text-sm leading-relaxed text-stone">{institutionalClients.join(" · ")}</p>
      </div>
    </section>
  );
}
