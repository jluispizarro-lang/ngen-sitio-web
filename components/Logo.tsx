type LogoProps = {
  className?: string;
};

/**
 * Emblema de Ngen: el mismo trazo de curvas de nivel del Hero, destilado
 * en una marca independiente para el header, el footer y el favicon.
 */
export default function Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 560 560" fill="none" className={className} aria-hidden="true">
      <path
        d="M60 470 C 140 420, 150 340, 110 280 C 70 220, 90 140, 180 110 C 270 80, 340 130, 350 210 C 360 290, 430 300, 470 250"
        stroke="#F5DCCB"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M90 500 C 170 450, 185 370, 150 305 C 115 240, 140 160, 225 130 C 310 100, 375 155, 380 235 C 385 315, 450 320, 495 270"
        stroke="#EACAAF"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M125 525 C 205 478, 222 400, 190 335 C 158 270, 188 190, 270 160 C 352 130, 412 182, 412 260 C 412 338, 470 345, 515 298"
        stroke="#DFAA82"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M165 545 C 245 500, 262 425, 232 362 C 202 300, 232 222, 312 195 C 392 168, 448 218, 445 293 C 442 368, 495 378, 535 335"
        stroke="#CB8158"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M210 555 C 288 512, 305 440, 278 380 C 251 320, 280 245, 355 220 C 430 195, 480 242, 475 312 C 470 382, 518 392, 552 355"
        stroke="#B15E3B"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M258 555 C 330 515, 348 448, 324 392 C 300 336, 326 265, 394 242 C 462 219, 505 262, 498 326 C 491 390, 532 400, 560 368"
        stroke="#8E4A2C"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  );
}
