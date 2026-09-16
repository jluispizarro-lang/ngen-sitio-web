/**
 * Fuente única de verdad para el contenido textual del sitio.
 *
 * Por qué existe este archivo: separa el CONTENIDO (lo que dice la
 * empresa) de la PRESENTACIÓN (cómo se ve). Cualquier persona o IA que
 * necesite corregir un texto, agregar una especialidad o cambiar un
 * dato de contacto debe hacerlo aquí — nunca dentro de un componente.
 *
 * Los valores entre [CORCHETES] son placeholders reales: no se debe
 * inventar un dato ahí. Reemplazar por el dato real antes de publicar
 * en producción.
 */

export type ServiceStage = {
  title: string;
  description: string;
};

export const serviceCycle: ServiceStage[] = [
  {
    title: "Diseño",
    description: "Estudios y diseño técnico de programas y proyectos.",
  },
  {
    title: "Supervisión",
    description: "Seguimiento técnico y control de calidad en terreno.",
  },
  {
    title: "Ejecución",
    description: "Implementación directa de proyectos en el territorio.",
  },
  {
    title: "Administración",
    description: "Gestión y administración integral de la cartera de proyectos.",
  },
];

export type Specialty = {
  title: string;
  description: string;
  icon: "riego" | "clima" | "ganaderia" | "financiero" | "hortofruticola" | "dialogo";
};

export const specialties: Specialty[] = [
  {
    title: "Riego Tecnificado",
    description:
      "Diseño y puesta en marcha de sistemas de riego eficiente para agricultura familiar y comercial.",
    icon: "riego",
  },
  {
    title: "Cambio Climático",
    description:
      "Programas y proyectos de adaptación y mitigación frente a la emergencia climática.",
    icon: "clima",
  },
  {
    title: "Producción Ganadera",
    description:
      "Diseño constructivo, cubicación y presupuesto de infraestructura para producción pecuaria, con seguimiento hasta su ejecución.",
    icon: "ganaderia",
  },
  {
    title: "Análisis Financiero",
    description:
      "Evaluación de rentabilidad y riesgo crediticio, y formulación, postulación y rendición de proyectos de inversión pública.",
    icon: "financiero",
  },
  {
    title: "Producción Hortofrutícola",
    description:
      "Estudios y ejecución de proyectos frutícolas y hortícolas de pequeña y mediana escala.",
    icon: "hortofruticola",
  },
  {
    title: "Diálogo Social y Participación Ciudadana",
    description:
      "Construcción de espacios de diálogo y confianza con comunidades y dirigentes, en procesos de participación ciudadana y evaluación de impacto ambiental.",
    icon: "dialogo",
  },
];

export type TrackRecordItem = {
  value: string;
  label: string;
};

export const trackRecordIntro = {
  title: "Cifras que respaldan la experiencia",
  subtitle: "Resultados concretos de programas y proyectos en los que hemos tenido responsabilidad técnica.",
};

export const trackRecord: TrackRecordItem[] = [
  {
    value: "$4.000 MM",
    label: "en proyectos coordinados en la provincia del Huasco, región de Atacama, entre 2025 y 2026.",
  },
  {
    value: "54 proyectos",
    label:
      "de riego asociativo evaluados y supervisados en la región de O'Higgins durante 2024, por más de $3.277 millones.",
  },
  {
    value: "15 comunas",
    label: "de la región de Valparaíso con mesas de diálogo agroclimático participativo instaladas.",
  },
  {
    value: "70+",
    label:
      "proyectos de ganadería, infraestructura, salas de procesos de alimentos, sistemas fotovoltaicos y riego, ejecutados entre 2020 y 2026.",
  },
];

export const institutionalClients: string[] = [
  "INDAP",
  "INFOR",
  "INIA",
  "Municipalidad de La Higuera",
  "CNR",
  "Dirección Meteorológica de Chile",
  "Dirección General de Aeronáutica Civil",
  "Asociación de Exportadores de Frutas de Chile A.G.",
];

export type TeamMember = {
  name: string;
  role: string;
  credentials: string;
};

export const team: TeamMember[] = [
  {
    name: "José Luis Pizarro",
    role: "Ingeniero Agrónomo",
    credentials:
      "Experto Profesional en Prevención de Riesgos · Postítulo en Gestión Ambiental · Diplomado en Evaluación Social de Proyectos",
  },
  {
    name: "Ginés Orrego",
    role: "Ingeniero Comercial",
    credentials:
      "27 años de experiencia en evaluación crediticia y análisis financiero de pequeñas y medianas empresas · formulación, postulación y rendición de proyectos de inversión",
  },
];

export type Region = {
  numeral: string;
  name: string;
};

export const regions: Region[] = [
  { numeral: "III", name: "Atacama" },
  { numeral: "IV", name: "Coquimbo" },
  { numeral: "V", name: "Valparaíso" },
  { numeral: "VI", name: "O'Higgins" },
];

export const siteContent = {
  companyName: "Ngen",
  companyFullName: "Ngen Servicios de Ingeniería",
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Cobertura", href: "#cobertura" },
    { label: "Nosotros", href: "#nosotros" },
  ],
  hero: {
    eyebrow: "Asesoría y estudios de ingeniería",
    headline: "Ingeniería que se sostiene en el terreno.",
    subheadline:
      "Diseñamos, supervisamos y ejecutamos programas y proyectos de ingeniería para servicios públicos — con la experiencia real de haberlos llevado desde el papel hasta el aterrizaje en terreno.",
    ctaPrimary: "Conversemos sobre tu proyecto",
    ctaSecondary: "Ver especialidades",
  },
  serviceCycleIntro: {
    title: "Te acompañamos en cada etapa",
    subtitle: "Desde la asesoría inicial hasta la administración del proyecto ya en ejecución.",
  },
  specialtiesIntro: {
    title: "Nuestra experiencia de aterrizaje",
    subtitle: "No solo diseñamos en el papel: hemos ejecutado proyectos en estas áreas técnicas.",
  },
  coverage: {
    title: "Presencia entre Atacama y O'Higgins",
    body: "Hemos recorrido y ejecutado proyectos desde la Región de Atacama hasta la Región de O'Higgins, trabajando de cerca con equipos técnicos y comunidades locales en cada territorio.",
  },
  differentiator: {
    title: "Del expediente técnico al proyecto en marcha.",
    body: "La mayoría de las consultoras se detiene en el diseño. Nosotros conocemos el proceso completo porque lo hemos ejecutado: sabemos qué observa un comité, qué exige un expediente en terreno y qué hace que un proyecto realmente se aterrice.",
  },
  cta: {
    title: "Hablemos de tu próximo proyecto",
    email: "orrego.gines@gmail.com",
    phone: "+56 9 9745 2062",
    button: "Escríbenos",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Ngen Servicios de Ingeniería`,
    coverageLine: regions.map((r) => r.name).join(" · "),
  },
};
