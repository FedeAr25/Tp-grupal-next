import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full h-screen bg-[url(/home.png)] bg-cover bg-center">
      <div className="w-full h-full flex items-center justify-center backdrop-blur-lg">
        <div className="w-2/3 h-4/5 bg-white/30 rounded-lg shadow-lg p-6 flex">
          <div className="w-2/3 h-full bg-linear-45 from-gray-900 to-white/20 rounded-l-lg p-6 flex flex-col justify-between">
            {/* Carrito de compras */}
            <h3 className="text-center font-semibold text-lg">
              Carrito de Compras
            </h3>
            <div className="flex flex-col gap-4 mt-4">
              {/* Producto 1 */}
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/products/precentacion.png"
                  alt="Producto 1"
                  className="w-20 h-20 object-cover rounded"
                  width={80}
                  height={80}
                />
                <div>
                  <h4 className="font-bold">Producto 1</h4>
                  caracteristicas del producto...
                </div>
                <p>$19.99</p>
                <div className="bg-white text-zinc-600 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-400">
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-r-2 border-gray-300">
                    -
                  </button>
                  <p className="px-2">1</p>
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-l-2 border-gray-300">
                    +
                  </button>
                </div>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800">
                  Eliminar 🗑️
                </button>
              </div>
              {/* Producto 2 */}
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/products/precentacion.png"
                  alt="Producto 1"
                  className="w-20 h-20 object-cover rounded"
                  width={80}
                  height={80}
                />
                <div>
                  <h4 className="font-bold">Producto 1</h4>
                  caracteristicas del producto...
                </div>
                <p>$19.99</p>
                <div className="bg-white text-zinc-600 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-400">
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-r-2 border-gray-300">
                    -
                  </button>
                  <p className="px-2">1</p>
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-l-2 border-gray-300">
                    +
                  </button>
                </div>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800">
                  Eliminar 🗑️
                </button>
              </div>
              {/* Producto 3 */}
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/products/precentacion.png"
                  alt="Producto 1"
                  className="w-20 h-20 object-cover rounded"
                  width={80}
                  height={80}
                />
                <div>
                  <h4 className="font-bold">Producto 1</h4>
                  caracteristicas del producto...
                </div>
                <p>$19.99</p>
                <div className="bg-white text-zinc-600 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-400">
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-r-2 border-gray-300">
                    -
                  </button>
                  <p className="px-2">1</p>
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-l-2 border-gray-300">
                    +
                  </button>
                </div>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800">
                  Eliminar 🗑️
                </button>
              </div>
              {/* Producto 4 */}
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/products/precentacion.png"
                  alt="Producto 1"
                  className="w-20 h-20 object-cover rounded"
                  width={80}
                  height={80}
                />
                <div>
                  <h4 className="font-bold">Producto 1</h4>
                  caracteristicas del producto...
                </div>
                <p>$19.99</p>
                <div className="bg-white text-zinc-600 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-400">
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-r-2 border-gray-300">
                    -
                  </button>
                  <p className="px-2">1</p>
                  <button className="bg-gray-200 px-2 hover:bg-zinc-300 border-l-2 border-gray-300">
                    +
                  </button>
                </div>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800">
                  Eliminar 🗑️
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-600 ">
                Vaciar Carrito
              </button>
              <div>
                <input
                  type="text"
                  placeholder="Código de descuento"
                  className="bg-black/30 p-2 rounded-lg border-2 border-gray-600 mr-2"
                />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Aplicar Descuento
                </button>
              </div>
            </div>
          </div>
          {/* Resumen del carrito y formas de pago */}
          <div className="w-1/3 h-full flex flex-col p-6 gap-4 bg-linear-45 from-gray-900 to-white/20 rounded-r-lg  justify-between">
            <div className="w-full h-auto bg-blue-400 rounded-lg mb-4 flex items-center justify-center shadow-lg flex-col gap-4">
              <h3 className="font-sans text-lg font-bold mb-5 text-center">
                Formas de pago
              </h3>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/pagos/mastercard.svg"
                  alt="Producto 1"
                  className="object-cover rounded hover:scale-110 transition-transform duration-300"
                  width={50}
                  height={50}
                />
                <Image
                  src="/pagos/paypal.svg"
                  alt="Producto 1"
                  className="object-cover rounded hover:scale-110 transition-transform duration-300"
                  width={50}
                  height={50}
                />
                <Image
                  src="/pagos/visa.svg"
                  alt="Producto 1"
                  className="object-cover rounded hover:scale-110 transition-transform duration-300"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div>
              <h3>Resumen del Carrito</h3>
              <p>Total: $290.99</p>
            </div>
            <div className="w-full border-t border-gray-600 mt-4 pt-4">
              <div className="flex items-center justify-between mt-6 ">
                <h3>Subtotal</h3>
                <p>$290.99</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <h3>Descuento(10%)</h3>
                <p>$29.10</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 border-t border-gray-600 pt-4">
              <h3>Total a pagar</h3>
              <p>$260.89</p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-green-900">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
