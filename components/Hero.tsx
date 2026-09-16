import { siteContent } from "@/lib/content";
import { IconArrowRight } from "./icons";

function splitHighlight(text: string, word: string) {
  const idx = text.indexOf(word);
  if (idx === -1) return { before: text, highlight: "", after: "" };
  return {
    before: text.slice(0, idx),
    highlight: text.slice(idx, idx + word.length),
    after: text.slice(idx + word.length),
  };
}

export default function Hero() {
  const { hero } = siteContent;
  const { before, highlight, after } = splitHighlight(hero.headline, "terreno");

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-9 md:py-28">
      <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full lg:flex-1">
          <div className="mb-7 flex items-center gap-2.5">
            <span className="h-px w-7 bg-clay" aria-hidden="true" />
            <span className="section-eyebrow">{hero.eyebrow}</span>
          </div>

          <h1 className="text-balance text-[40px] font-medium leading-[1.08] text-ink md:text-[56px] lg:text-[60px]">
            {before}
            <span className="text-clay">{highlight}</span>
            {after}
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

        <div
          className="relative aspect-square w-full max-w-[400px] lg:w-[38%] lg:max-w-[440px]"
          role="img"
          aria-label="Curvas de nivel abstractas, motivo gráfico de levantamiento topográfico"
        >
          <span className="absolute left-[3%] top-[3%] text-stone/60" aria-hidden="true">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M8 0v16M0 8h16" />
            </svg>
          </span>
          <span className="absolute bottom-[3%] right-[3%] text-stone/60" aria-hidden="true">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M8 0v16M0 8h16" />
            </svg>
          </span>
          <svg viewBox="0 0 560 560" fill="none" className="h-full w-full">
            <path
              d="M60 470 C 140 420, 150 340, 110 280 C 70 220, 90 140, 180 110 C 270 80, 340 130, 350 210 C 360 290, 430 300, 470 250"
              stroke="#F5DCCB"
              strokeWidth="1.4"
              opacity="0.8"
            />
            <path
              d="M90 500 C 170 450, 185 370, 150 305 C 115 240, 140 160, 225 130 C 310 100, 375 155, 380 235 C 385 315, 450 320, 495 270"
              stroke="#EACAAF"
              strokeWidth="1.4"
              opacity="0.85"
            />
            <path
              d="M125 525 C 205 478, 222 400, 190 335 C 158 270, 188 190, 270 160 C 352 130, 412 182, 412 260 C 412 338, 470 345, 515 298"
              stroke="#DFAA82"
              strokeWidth="1.6"
            />
            <path
              d="M165 545 C 245 500, 262 425, 232 362 C 202 300, 232 222, 312 195 C 392 168, 448 218, 445 293 C 442 368, 495 378, 535 335"
              stroke="#CB8158"
              strokeWidth="1.8"
            />
            <path
              d="M210 555 C 288 512, 305 440, 278 380 C 251 320, 280 245, 355 220 C 430 195, 480 242, 475 312 C 470 382, 518 392, 552 355"
              className="text-clay"
              stroke="currentColor"
              strokeWidth="2.2"
            />
            <path
              d="M258 555 C 330 515, 348 448, 324 392 C 300 336, 326 265, 394 242 C 462 219, 505 262, 498 326 C 491 390, 532 400, 560 368"
              className="text-clay-dark"
              stroke="currentColor"
              strokeWidth="2.4"
            />
            <g opacity="0.55" className="text-stone" stroke="currentColor" strokeWidth="1">
              <line x1="330" y1="248" x2="330" y2="260" />
              <line x1="330" y1="248" x2="322" y2="256" />
              <line x1="330" y1="248" x2="338" y2="256" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
