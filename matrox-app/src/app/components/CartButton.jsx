"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartButton() {
  // Guarda la cantidad total de productos del carrito
  const [cantidad, setCantidad] = useState(0);

  // Lee el carrito desde localStorage y suma las cantidades
  const actualizarCantidad = () => {
    try {
      const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];

      const totalProductos = carritoGuardado.reduce(
        (total, item) => total + item.cantidad,
        0,
      );

      setCantidad(totalProductos);
    } catch (error) {
      // Si hay algún error leyendo localStorage, dejamos el contador en 0
      setCantidad(0);
    }
  };

  useEffect(() => {
    // Cuando carga el navbar, lee el carrito actual
    actualizarCantidad();

    // Escucha el evento que disparamos cuando agregamos, eliminamos o vaciamos el carrito
    window.addEventListener("carritoActualizado", actualizarCantidad);

    // También escucha cambios de localStorage entre pestañas
    window.addEventListener("storage", actualizarCantidad);

    // Limpieza de eventos
    return () => {
      window.removeEventListener("carritoActualizado", actualizarCantidad);
      window.removeEventListener("storage", actualizarCantidad);
    };
  }, []);

  return (
    <Link
      href="/carrito"
      className="relative px-4 py-2 rounded-xl text-amber-50 bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
    >
      Carrito
      {/* Globito con la cantidad total de productos */}
      {cantidad > 0 && (
        <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          {cantidad}
        </span>
      )}
    </Link>
  );
}
