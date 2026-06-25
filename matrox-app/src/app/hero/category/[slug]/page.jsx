import React from "react";
import Image from "next/image";
import { getProducts } from "@/lib/api";
import ProductCard from "@/app/components/ProductCard";

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const { products } = await getProducts({ category: slug });

  return (
    <div className="w-full h-full bg-[url(/circuito.jpg)] bg-contain bg-center">
      <div className="w-full h-full backdrop-blur-lg bg-black/40 flex flex-col justify-center items-center">
        <h1 className="bg-clip-text bg-linear-60 from-blue-400 to-purple-500 text-transparent text-6xl font-bold pt-20 capitalize">
          {slug?.replace(/-/g, " ")}
        </h1>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-30 gap-x-5 bg-white/30 p-6 rounded-lg mt-20 mb-10">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              No hay productos en esta categoría
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
