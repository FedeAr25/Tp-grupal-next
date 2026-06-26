"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function AddProduct({ product }) {
  const router = useRouter();
  const { agregarAlCarrito } = useCart();

  const precioConDescuento = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const handleAgregarAlCarrito = () => {
    const productoParaCarrito = {
      id: product.id,
      nombre: product.title,
      descripcion: product.description,
      precio: Number(precioConDescuento),
      imagen: product.thumbnail,
    };

    agregarAlCarrito(productoParaCarrito);
    router.push("/carrito");
  };

  return (
    <button
      onClick={handleAgregarAlCarrito}
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Agregar al carrito
    </button>
  );
}
