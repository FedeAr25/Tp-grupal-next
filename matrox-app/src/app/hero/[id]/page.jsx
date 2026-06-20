import { getProductById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDescriptionPage({ params }) {
  const { id } = await params;

  const product = await getProductById(id);

  const precioConDescuento = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url(/home.png)] bg-cover bg-center">
      <div className="w-full h-full flex items-center justify-center backdrop-blur-lg rounded-lg shadow-lg">
        <div className="w-2/3 h-4/5 flex rounded-3xl overflow-hidden">
          <div className="w-1/12 h-full flex flex-col gap-4 items-center py-6 bg-white/60">
            <Image
              src={product.thumbnail || "/Matrox.png"}
              alt={product.title || "undefined"}
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />
            <Image
              src={product.thumbnail || "/Matrox.png"}
              alt={product.title || "undefined"}
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />
            <Image
              src={product.thumbnail || "/Matrox.png"}
              alt={product.title || "undefined"}
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />
            <Image
              src="/Matrox.png"
              alt="Producto 1"
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />
          </div>
          <div className="w-6/12 h-full bg-white p-4 flex items-center justify-center">
            <Image
              src={product.thumbnail || "/Matrox.png"}
              alt={product.title || "undefined"}
              width={500}
              height={500}
            />
          </div>
          <div className="w-5/12 h-full bg-white/60 p-4 flex flex-col justify-between text-black">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs text-stone-700">
                NUEVO | 5k vendidos
              </p>
              <h3 className="bg-orange-500 w-1/4 p-2 rounded text-white text-sm text-center">
                MAS VENDIDO
              </h3>
              <h1 className=" text-3xl font-semibold font-sans">
                {product.title}
              </h1>
            </div>
            <div className="flex gap-4 justify-start items-center">
              <Image
                src="/pagos/mastercard.svg"
                alt="Mastercard"
                width={30}
                height={30}
              />
              <Image
                src="/pagos/paypal.svg"
                alt="PayPal"
                width={30}
                height={30}
              />
              <Image src="/pagos/visa.svg" alt="Visa" width={30} height={30} />
            </div>
            <div>
              <h3 className="mb-3 font-semibold">
                Caracteristicas de producto
              </h3>
              <p>{product.description}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-sm text-gray-500 line-through">
                ${product.price}
              </p>
            </div>
            <p className="text-sm text-gray-500">${precioConDescuento}</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              ⭐ {product.rating} | Stock: {product.stock}
            </p>

            <Link
              href="/hero/carrito"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-green-900 w-1/2"
            >
              Agregar al Carrito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
