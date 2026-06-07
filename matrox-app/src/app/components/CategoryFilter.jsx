"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter({ categories, selected }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleCategoryChange(e) {
    const slug = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }

    router.push(`/hero?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-xs px-4">
      <label
        htmlFor="category-select"
        className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2"
      >
        Filtrar por Categoría
      </label>

      <select
        id="category-select"
        value={selected || ""}
        onChange={handleCategoryChange}
        className={`w-full px-4 py-2.5 rounded-xl border border-zinc-700 outline-none cursor-pointer transition-all duration-200 text-sm ${
          selected
            ? "bg-green-600 text-white font-bold border-green-500 focus:ring-2 focus:ring-green-400"
            : "bg-zinc-800 text-zinc-200 font-medium hover:bg-zinc-750 focus:ring-2 focus:ring-blue-400"
        }`}
      >
        <option value="" className="bg-zinc-900 text-zinc-400">
          Todas las categorías
        </option>

        {categories.map((cat) => (
          <option
            key={cat.slug}
            value={cat.slug}
            className="bg-zinc-900 text-white"
          >
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
