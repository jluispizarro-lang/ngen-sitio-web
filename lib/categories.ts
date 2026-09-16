import type { DocumentCategory } from "./store";

/**
 * Categorías del portal de clientes — reflejan a propósito la misma
 * estructura de carpetas ya usada en `30. Clientes/_PLANTILLA_CLIENTE/`,
 * para que el criterio de dónde va cada documento sea el mismo en el
 * disco local y en el portal web.
 */
export const documentCategories: { id: DocumentCategory; label: string }[] = [
  { id: "recursos_base", label: "Recursos base" },
  { id: "contratos", label: "Contratos" },
  { id: "iniciativas_proyectos", label: "Iniciativas y proyectos" },
  { id: "material_referencia", label: "Material de referencia" },
];

export function categoryLabel(id: DocumentCategory): string {
  return documentCategories.find((c) => c.id === id)?.label ?? id;
}
