import { siteContent } from "@/lib/content";

export default function CTASection() {
  return (
    <section id="contacto" className="px-6 py-28 text-center md:px-9">
      <h2 className="text-[30px] font-medium text-ink md:text-[36px]">{siteContent.cta.title}</h2>
      <p className="mt-5 text-stone">
        {siteContent.cta.email} · {siteContent.cta.phone}
      </p>
      <a
        href={`mailto:${siteContent.cta.email}`}
        className="btn-primary mx-auto mt-10 w-fit"
      >
        {siteContent.cta.button}
      </a>
    </section>
  );
}
