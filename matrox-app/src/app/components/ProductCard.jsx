"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const router = useRouter();

  const { agregarAlCarrito } = useCart();

  // Calculamos el precio con descuento del producto
  const precioConDescuento = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  // Función para agregar el producto al carrito usando Context
  const handleAgregarAlCarrito = () => {
    const productoParaCarrito = {
      id: product.id,
      nombre: product.title,
      descripcion: product.description,
      precio: Number(precioConDescuento),
      imagen: product.thumbnail,
    };

    agregarAlCarrito(productoParaCarrito);

    // Redirigimos a la página del carrito
    router.push("/carrito");
  };

  return (
    <div className="w-90 h-100 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
      {/* Imagen del producto */}
      <div className="mb-20">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={150}
          height={60}
          className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-cover backdrop-blur-2xl bg-white/30 p-4"
        />
      </div>

      {/* Información del producto */}
      <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>

        <h2 className="text-sm mb-2 bg-red-400 rounded-3xl p-2">
          {product.category}
        </h2>

        <h3>{product.brand}</h3>

        <p>{product.description.slice(0, 75)}...</p>

        {/* Precio con descuento y precio original */}
        <div className="flex gap-5">
          <p className="text-sm text-gray-500">${precioConDescuento}</p>

          <p className="text-sm text-gray-500 line-through">${product.price}</p>
        </div>

        {/* Rating y stock */}
        <p className="text-sm text-gray-500 text-justify p-2">
          ⭐ {product.rating} | Stock: {product.stock}
        </p>

        {/* Botones */}
        <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
          <button
            onClick={() => router.push(`/hero/${product.id}`)}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Ver detalles
          </button>

          <button
            onClick={handleAgregarAlCarrito}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
