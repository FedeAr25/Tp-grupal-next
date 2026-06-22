import Image from "next/image";
import { getCategories } from "@/lib/api";
import CategoryFilter from "../components/CategoryFilter";

export default async function Aside({ searchParams }) {
  const resolvedParams = await searchParams;

  const category = resolvedParams?.category;

  const categories = await getCategories();

  return (
    <aside className="w-72 py-8  pb-24 px-6 border-r border-zinc-700 flex-col flex gap-4 h-screen sticky top-20 justify-between">
      <div className="flex items-center gap-2 mt-10">
        <Image
          src="/Matrox.png"
          alt="camion"
          width={400}
          height={400}
          className="w-14 h-14 object-cover"
        />
        <h1 className="text-2xl font-bold">Matrox.RC</h1>
      </div>
      <div className="bg-red-500 relative rounded-3xl overflow-hidden">
        <svg
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search absolute left-3 top-1 text-zinc-900"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input type="text" className="bg-green-100 w-full" />
      </div>
      <CategoryFilter categories={categories} />
    </aside>
  );
}
