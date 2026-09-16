import { uploadDocumentAction } from "@/app/admin/actions";
import { documentCategories } from "@/lib/categories";

export default function UploadDocumentForm({ clientId }: { clientId: string }) {
  return (
    <form
      action={uploadDocumentAction}
      className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end"
    >
      <input type="hidden" name="clientId" value={clientId} />
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
          {documentCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="file" className="mb-1.5 block text-[13px] font-medium text-charcoal">
          Archivo
        </label>
        <input
          id="file"
          name="file"
          type="file"
          required
          className="w-full text-sm text-charcoal file:mr-4 file:rounded file:border-0 file:bg-clay file:px-4 file:py-2 file:text-[13px] file:font-semibold file:text-cream"
        />
      </div>
      <button type="submit" className="btn-primary">
        Subir
      </button>
    </form>
  );
}
