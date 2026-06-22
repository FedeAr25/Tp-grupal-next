"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CarritoPage() {
  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito,
    cantidadTotal,
    totalCarrito,
  } = useCart();

  // Guarda el código de descuento escrito por el usuario
  const [codigoDescuento, setCodigoDescuento] = useState("");

  // Controla si el descuento está activo
  const [descuentoActivo, setDescuentoActivo] = useState(false);

  // Aplica descuento si el código es correcto
  const aplicarDescuento = () => {
    if (codigoDescuento.toLowerCase() === "matrox10") {
      setDescuentoActivo(true);
      alert("Descuento aplicado correctamente");
    } else {
      setDescuentoActivo(false);
      alert("Código de descuento inválido");
    }
  };

  // Vacía todo el carrito y limpia el descuento
  const handleVaciarCarrito = () => {
    vaciarCarrito();
    setDescuentoActivo(false);
    setCodigoDescuento("");
  };

  // El subtotal viene desde el Context
  const subtotal = totalCarrito;

  // Si el descuento está activo, aplica 10%
  const descuento = descuentoActivo ? subtotal * 0.1 : 0;

  // Total final a pagar
  const total = subtotal - descuento;

  return (
    <div className="w-full min-h-screen bg-[url(/home.png)] bg-cover bg-center">
      <div className="w-full min-h-screen flex items-center justify-center backdrop-blur-lg py-10">
        <div className="w-11/12 min-h-[80vh] bg-white/30 rounded-lg shadow-lg p-6 flex">
          {/* LADO IZQUIERDO: productos del carrito */}
          <div className="w-2/3 min-h-full bg-linear-45 from-gray-900 to-white/20 rounded-l-lg p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-center font-semibold text-3xl mb-8">
                Carrito de Compras
              </h3>

              {/* Si el carrito está vacío, mostramos un mensaje */}
              {carrito.length === 0 ? (
                <div className="text-center bg-black/30 rounded-lg p-10">
                  <p className="text-2xl font-semibold">
                    El carrito está vacío.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Volvé al catálogo y agregá un producto.
                  </p>
                </div>
              ) : (
                // Si hay productos, los mostramos con map
                <div className="flex flex-col gap-4">
                  {carrito.map((producto) => (
                    <div
                      key={producto.id}
                      className="flex items-center justify-between gap-4 bg-black/30 rounded-lg p-4"
                    >
                      {/* Imagen del producto */}
                      <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-20 h-20 object-cover rounded"
                        width={80}
                        height={80}
                      />

                      {/* Nombre y descripción */}
                      <div className="w-56">
                        <h4 className="font-bold">{producto.nombre}</h4>
                        <p className="text-sm text-gray-300">
                          {producto.descripcion.slice(0, 70)}...
                        </p>
                      </div>

                      {/* Precio unitario */}
                      <p>${producto.precio.toFixed(2)}</p>

                      {/* Botones para sumar y restar cantidad */}
                      <div className="bg-white text-zinc-600 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-400">
                        <button
                          onClick={() => disminuirCantidad(producto.id)}
                          className="bg-gray-200 px-3 py-1 hover:bg-zinc-300 border-r-2 border-gray-300"
                        >
                          -
                        </button>

                        <p className="px-3">{producto.cantidad}</p>

                        <button
                          onClick={() => aumentarCantidad(producto.id)}
                          className="bg-gray-200 px-3 py-1 hover:bg-zinc-300 border-l-2 border-gray-300"
                        >
                          +
                        </button>
                      </div>

                      {/* Total por producto */}
                      <p className="font-semibold">
                        ${(producto.precio * producto.cantidad).toFixed(2)}
                      </p>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => eliminarDelCarrito(producto.id)}
                        className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800"
                      >
                        Eliminar 🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Acciones inferiores */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handleVaciarCarrito}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Vaciar Carrito
              </button>

              <div>
                <input
                  type="text"
                  value={codigoDescuento}
                  onChange={(e) => setCodigoDescuento(e.target.value)}
                  placeholder="Código de descuento"
                  className="bg-black/30 p-2 rounded-lg border-2 border-gray-600 mr-2 text-white placeholder:text-gray-300"
                />

                <button
                  onClick={aplicarDescuento}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Aplicar Descuento
                </button>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: resumen del carrito */}
          <div className="w-1/3 min-h-full flex flex-col p-6 gap-4 bg-linear-45 from-gray-900 to-white/20 rounded-r-lg justify-between text-white">
            {/* Formas de pago */}
            <div className="w-full h-auto bg-linear-to-b from-blue-800 to-transparent rounded-lg mb-4 flex items-center justify-center shadow-lg flex-col gap-2 p-4">
              <h3 className="font-sans text-lg font-bold mb-5 text-center pt-2">
                Formas de pago
              </h3>

              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/pagos/mastercard.svg"
                  alt="Mastercard"
                  className="object-cover rounded hover:scale-110 transition-transform duration-300"
                  width={50}
                  height={50}
                />

                <Image
                  src="/pagos/paypal.svg"
                  alt="Paypal"
                  className="object-cover rounded hover:scale-110 transition-transform duration-300"
                  width={50}
                  height={50}
                />

                <Image
                  src="/pagos/visa.svg"
                  alt="Visa"
                  className="object-cover rounded hover:scale-110 transition-transform duration-300"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            {/* Resumen */}
            <div>
              <h3 className="text-xl font-bold">Resumen del Carrito</h3>

              <p className="text-gray-300 mt-2">
                Productos diferentes: {carrito.length}
              </p>

              <p className="text-gray-300">Cantidad total: {cantidadTotal}</p>
            </div>

            {/* Subtotal y descuento */}
            <div className="w-full border-t border-gray-600 mt-4 pt-4">
              <div className="flex items-center justify-between mt-6">
                <h3>Subtotal</h3>
                <p>${subtotal.toFixed(2)}</p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <h3>Descuento</h3>
                <p>${descuento.toFixed(2)}</p>
              </div>

              {descuentoActivo && (
                <p className="text-green-400 text-sm mt-2">
                  Código MATROX10 aplicado
                </p>
              )}
            </div>

            {/* Total final */}
            <div className="flex items-center justify-between mt-2 border-t border-gray-600 pt-4">
              <h3 className="font-bold">Total a pagar</h3>
              <p className="font-bold text-xl">${total.toFixed(2)}</p>
            </div>

            {/* Botón finalizar compra */}
            <div className="flex items-center justify-center mt-6">
              <button
                disabled={carrito.length === 0}
                className={`text-white px-6 py-3 rounded-lg ${
                  carrito.length === 0
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gray-900 hover:bg-green-900"
                }`}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
