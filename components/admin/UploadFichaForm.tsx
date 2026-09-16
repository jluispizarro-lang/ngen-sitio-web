import { uploadFichaAction } from "@/app/admin/fichas-actions";
import { fichaCategories } from "@/lib/fichas-categories";

export default function UploadFichaForm() {
  return (
    <form action={uploadFichaAction} className="mt-4 flex flex-col gap-4">
      <div>
        <label htmlFor="title" className="mb-1.5 block text-[13px] font-medium text-charcoal">
          Título
        </label>
        <input
          id="title"
          name="title"
          required
          className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
        />
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-[13px] font-medium text-charcoal">
          Descripción breve
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={2}
          className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="category" className="mb-1.5 block text-[13px] font-medium text-charcoal">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
          >
            {fichaCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="authors" className="mb-1.5 block text-[13px] font-medium text-charcoal">
            Autores (separados por coma)
          </label>
          <input
            id="authors"
            name="authors"
            placeholder="José Luis Pizarro, Guillermo Palta"
            className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="file" className="mb-1.5 block text-[13px] font-medium text-charcoal">
            Archivo (PDF)
          </label>
          <input
            id="file"
            name="file"
            type="file"
            accept="application/pdf"
            required
            className="w-full text-sm text-charcoal file:mr-4 file:rounded file:border-0 file:bg-clay file:px-4 file:py-2 file:text-[13px] file:font-semibold file:text-cream"
          />
        </div>
        <label className="flex items-center gap-2 text-[13px] text-charcoal">
          <input type="checkbox" name="featured" className="h-4 w-4" />
          Destacar
        </label>
        <button type="submit" className="btn-primary">
          Subir ficha
        </button>
      </div>
    </form>
  );
}
