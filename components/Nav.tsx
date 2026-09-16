import { siteContent } from "@/lib/content";

export default function Nav() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-7 md:px-9">
        <a href="/" className="flex items-baseline gap-2.5">
          <span className="font-serif text-xl font-semibold tracking-wide text-ink">NGEN</span>
          <span className="hidden text-xs text-stone sm:inline">Servicios de Ingeniería</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal hover:text-clay"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/#contacto" className="btn-primary hidden md:inline-flex">
          Conversemos
        </a>

        <a href="/#contacto" className="btn-primary text-[13px] md:hidden">
          Conversemos
        </a>
      </div>
    </header>
  );
}
