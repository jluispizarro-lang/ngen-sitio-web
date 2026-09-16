/**
 * Ilustración de apertura — terrazas de cultivo con línea de riego,
 * dibujada a mano en el mismo lenguaje lineal que `components/icons.tsx`
 * (trazo, sin relleno, acento terracota). No es una fotografía: es una
 * pieza de marca propia, coherente con la línea editorial del sitio,
 * mientras no exista fotografía real de terreno de calidad suficiente
 * (ver roadmap en la bóveda de Obsidian).
 */
export default function Landscape() {
  return (
    <div className="border-t border-hairline bg-sand">
      <svg
        viewBox="0 0 1200 320"
        className="mx-auto block w-full max-w-content"
        role="img"
        aria-label="Ilustración lineal de terrazas de cultivo con línea de riego tecnificado"
      >
        {/* horizonte lejano */}
        <path
          d="M0 150 C 150 130, 300 162, 460 142 S 760 118, 920 146 S 1100 162, 1200 136"
          stroke="#8A8278"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* terrazas / curvas de nivel */}
        <path
          d="M0 200 C 180 176, 340 218, 520 190 S 820 160, 1000 194 S 1150 214, 1200 188"
          stroke="#B15E3B"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 232 C 200 212, 380 250, 560 224 S 840 200, 1020 230 S 1150 244, 1200 222"
          stroke="#B15E3B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.6"
          fill="none"
        />
        <path
          d="M0 262 C 220 246, 420 276, 600 254 S 860 234, 1040 260 S 1160 270, 1200 252"
          stroke="#B15E3B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* línea de riego tecnificado, con goteros */}
        <line
          x1="140"
          y1="176"
          x2="1060"
          y2="184"
          stroke="#2B2721"
          strokeWidth="1.1"
          strokeDasharray="1 9"
          strokeLinecap="round"
        />
        {[200, 320, 440, 560, 680, 800, 920, 1000].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={176 + (x - 140) * (184 - 176) / (1060 - 140)}
            r={i % 2 === 0 ? 3 : 2}
            fill="#221F1B"
          />
        ))}

        {/* marcas lineales de cultivo sobre las terrazas */}
        {[260, 380, 500, 630, 760, 880].map((x) => (
          <path
            key={x}
            d={`M${x} 214 q6 -16 12 0`}
            stroke="#221F1B"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}
