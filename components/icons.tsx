/**
 * Set de íconos lineales propios (trazo, sin relleno) usado en todo el
 * sitio. Se mantienen acá — nunca como emoji ni íconos de terceros —
 * para conservar un estilo visual único y consistente con la Dirección A.
 */

type IconProps = {
  className?: string;
};

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconRiego({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M12 2C12 2 5 11.5 5 15.5C5 19.09 8.13 22 12 22C15.87 22 19 19.09 19 15.5C19 11.5 12 2 12 2Z" />
    </svg>
  );
}

export function IconClima({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M4 20C4 10 12 4 20 4C20 14 12 20 4 20Z" />
      <path d="M20 4L6 18" />
    </svg>
  );
}

export function IconGanaderia({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M3 21V10L12 3L21 10V21Z" />
      <path d="M9 21V14H15V21" />
    </svg>
  );
}

export function IconFinanciero({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M4 21V14" />
      <path d="M11 21V9" />
      <path d="M18 21V5" />
      <path d="M3 12L10 6L14 9L19 4" />
    </svg>
  );
}

export function IconHortofruticola({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="12" cy="15" r="6" />
      <path d="M12 9C12 9 12 4 17 3" />
      <path d="M12 9C12 9 12 5 8 4" />
    </svg>
  );
}

export function IconDiseno({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M4 20L15 9L18 12L7 23H4V20Z" />
      <path d="M13 6L18 11" />
    </svg>
  );
}

export function IconSupervision({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M2 12C2 12 6 5 12 5C18 5 22 12 22 12C22 12 18 19 12 19C6 19 2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconEjecucion({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.1-2.1 2.9-2.9Z" />
    </svg>
  );
}

export function IconAdministracion({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <rect x="5" y="4" width="14" height="18" rx="2" />
      <path d="M9 4V2H15V4" />
      <path d="M8 13L11 16L16 10" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconDialogo({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M3 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 4v-4H5a2 2 0 0 1-2-2V6Z" />
      <path d="M21 10v5a2 2 0 0 1-2 2h-1v3l-3-3h-2" />
    </svg>
  );
}

export function IconFolder({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  );
}

export function IconFile({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

export function IconDownload({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  );
}

export const specialtyIconMap = {
  riego: IconRiego,
  clima: IconClima,
  ganaderia: IconGanaderia,
  financiero: IconFinanciero,
  hortofruticola: IconHortofruticola,
  dialogo: IconDialogo,
} as const;

export const serviceStageIconMap = [IconDiseno, IconSupervision, IconEjecucion, IconAdministracion] as const;
