import type { FichaCategory } from "./fichas-store";

/**
 * Categorías reales del Plan Caprino, agrupando los temas que Ngen ya
 * ha trabajado — no son categorías inventadas, reflejan el contenido
 * real disponible.
 */
export const fichaCategories: { id: FichaCategory; label: string }[] = [
  { id: "salud_manejo_sanitario", label: "Salud y Manejo Sanitario" },
  { id: "nutricion_alimentacion", label: "Nutrición y Alimentación" },
  { id: "cambio_climatico", label: "Cambio Climático" },
  { id: "infraestructura", label: "Infraestructura" },
  { id: "comercializacion", label: "Comercialización" },
];

export function fichaCategoryLabel(id: FichaCategory): string {
  return fichaCategories.find((c) => c.id === id)?.label ?? id;
}
