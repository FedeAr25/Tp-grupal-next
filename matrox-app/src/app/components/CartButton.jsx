"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartButton() {
  // Guarda la cantidad total de productos del carrito
  const [cantidad, setCantidad] = useState(() => {
    if (typeof window === "undefined") return 0;

    try {
      const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
      return carritoGuardado.reduce((total, item) => total + item.cantidad, 0);
    } catch {
      return 0;
    }
  });

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
      className="relative rounded-xl text-amber-50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-cart3"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>
      {/* Globito con la cantidad total de productos */}
      {cantidad > 0 && (
        <span className="absolute -top-3 -right-3 bg-orange-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          {cantidad}
        </span>
      )}
    </Link>
  );
}
