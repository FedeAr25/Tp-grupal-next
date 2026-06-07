import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const precioConDescuento = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="w-90 h-100 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
      <div className="mb-20 ">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={150}
          height={60}
          className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-cover backdrop-blur-2xl bg-white/30 p-4"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <h2 className="text-sm mb-2 bg-red-400 rounded-3xl p-2">
          {product.category}
        </h2>
        <h3>{product.brand}</h3>
        <p>{product.description.slice(0, 75)}...</p>
        <div className="flex gap-5">
          <p className="text-sm text-gray-500">${precioConDescuento}</p>
          <p className="text-sm text-gray-500 line-through">${product.price}</p>
        </div>
        <p className="text-sm text-gray-500 text-justify p-2">
          ⭐ {product.rating} | Stock: {product.stock}
        </p>
        <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
          <Link
            href={`/hero/${product.id}`}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Ver detalles
          </Link>
          <Link
            href="/hero/carrito"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  );
}
