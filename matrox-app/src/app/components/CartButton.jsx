"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartButton() {
  const { cantidadTotal } = useCart();

  return (
    <Link
      href="/carrito"
      className="relative px-4 py-2 rounded-xl text-amber-50 bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
    >
      Carrito
      {/* Globito con la cantidad total de productos */}
      {cantidadTotal > 0 && (
        <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          {cantidadTotal}
        </span>
      )}
    </Link>
  );
}
