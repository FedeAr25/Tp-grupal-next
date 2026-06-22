import React from "react";
import Image from "next/image";
import { getProducts, getCategories } from "@/lib/api";
import ProductCard from "../components/ProductCard";

export default async function ProductsPage({ searchParams }) {
  const resolvedParams = await searchParams;

  const category = resolvedParams?.category;
  const sortBy = resolvedParams?.sortBy || "";
  const order = resolvedParams?.order || "asc";

  const [productsData, categories] = await Promise.all([
    getProducts({ category, sortBy, order }),
    getCategories(),
  ]);

  const { products, total } = productsData;

  return (
    <div className="w-full h-full bg-[url(/circuito.jpg)] bg-contain bg-center">
      <div className="w-full h-full backdrop-blur-lg bg-black/40 flex flex-col justify-center items-center">
        <h1 className="bg-clip-text bg-linear-60 from-blue-400 to-purple-500 text-transparent text-6xl font-bold pt-20">
          MATROX TU LUGAR
        </h1>
        <div className="rounded-lg overflow-hidden bg-blue-100 shadow-lg hover:scale-105 transition-all duration-300 my-10">
          <Image src="/gabinete.png" alt="banner" width={900} height={500} />
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-30 gap-x-5 bg-white/30 p-6 rounded-lg mt-40 mb-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Producto destacado */}
        <div className="mt-20">
          <h2 className="text-center text-6xl uppercase font-bold bg-clip-text bg-linear-45 from-violet-700 to-green-300 text-transparent mb-10 animate-[pulse_0.7s_ease-in-out_infinite] shadow-lime-50 text-shadow-[0px_0px_5px_#ffaf] ">
            Producto Destacado
          </h2>
          <div className="w-200 h-200 bg-white flex flex-col justify-center items-center relative rounded-lg hover:scale-105 transition-all duration-300 m-20 bg-[url(/products/precentacion.png)] bg-cover bg-center">
            <Image
              src="/products/producto estrella.png"
              alt="producto estrella"
              width={800}
              height={370}
              className="rounded-lg animate-[pulse_5s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
