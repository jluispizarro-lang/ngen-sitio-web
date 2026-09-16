import { siteContent, team } from "@/lib/content";

export default function Differentiator() {
  return (
    <section id="nosotros" className="bg-clay">
      <div className="mx-auto max-w-content px-6 py-24 md:px-9">
        <div className="flex flex-col gap-10 md:flex-row">
          <h2 className="flex-1 text-[28px] font-medium leading-snug text-cream md:text-[34px]">
            {siteContent.differentiator.title}
          </h2>
          <p className="flex-1 self-center text-[16.5px] leading-relaxed text-clay-light">
            {siteContent.differentiator.body}
          </p>
        </div>

        <div className="mt-14 border-t border-cream/20 pt-10">
          {team.map((member) => (
            <div key={member.name} className="max-w-lg">
              <p className="text-[13px] uppercase tracking-[0.06em] text-cream">
                {member.name} <span className="text-clay-light/80">— {member.role}</span>
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-clay-light/90">
                {member.credentials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
