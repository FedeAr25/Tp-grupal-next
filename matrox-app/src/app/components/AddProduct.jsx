"use client";
import { useRouter } from "next/navigation";

export default function AddProduct({ product }) {
  const router = useRouter();
  const precioConDescuento = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const agregarAlCarrito = () => {
    const productoParaCarrito = {
      id: product.id,
      nombre: product.title,
      precio: Number(precioConDescuento),
      imagen: product.thumbnail,
      cantidad: 1,
    };

    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExiste = carritoActual.find(
      (item) => item.id === productoParaCarrito.id,
    );

    let carritoActualizado;
    if (productoExiste) {
      carritoActualizado = carritoActual.map((item) =>
        item.id === productoParaCarrito.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item,
      );
    } else {
      carritoActualizado = [...carritoActual, productoParaCarrito];
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    window.dispatchEvent(new Event("carritoActualizado"));
    router.push("/carrito");
  };

  return (
    <button
      onClick={agregarAlCarrito}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Agregar al carrito
    </button>
  );
}
