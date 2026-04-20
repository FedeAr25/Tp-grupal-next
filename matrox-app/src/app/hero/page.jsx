import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full h-full bg-zinc-900 flex flex-col justify-center items-center">
      <h1 className="bg-clip-text bg-linear-60 from-blue-400 to-purple-500 text-transparent text-6xl font-bold pt-20">
        MATROX EL MEJOR
      </h1>
      <div className="rounded-lg overflow-hidden bg-blue-100 shadow-lg hover:scale-105 transition-all duration-300 my-10">
        <Image src="/gabinete.png" alt="banner" width={900} height={500} />
      </div>
      {/*Cartas de productos */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-30 gap-x-5 bg-amber-500 p-3 mt-40 mb-10">
        {/*Carta 1 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/monitor.png"
              alt="monitor"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 2 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/teclado.png"
              alt="teclado"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 3 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/notebook.png"
              alt="notebook"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 1 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/monitor.png"
              alt="monitor"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 2 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/teclado.png"
              alt="teclado"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 3 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/notebook.png"
              alt="notebook"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 1 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/monitor.png"
              alt="monitor"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 2 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/teclado.png"
              alt="teclado"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Carta 3 */}
        <div className="w-90 h-80 bg-white flex flex-col justify-center items-center relative rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <div className="mb-20">
            <Image
              src="/products/notebook.png"
              alt="notebook"
              width={150}
              height={60}
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-zinc-300 text-black p-2 rounded-b-lg">
            <h2 className="text-xl font-bold mb-2">Producto</h2>
            <p>descripcion</p>
            <p className="text-sm text-gray-500">Precio: $100</p>
            <p className="text-sm text-gray-500 text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae delectus voluptatibus ipsum qui nostrum
              explicabo illo minima, quaerat ut!
            </p>
            <div className="flex gap-2 mt-4 bg-zinc-600 p-2 rounded">
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Producto destacado */}
      <div className="mt-20">
        <h2 className="text-center text-6xl uppercase font-bold bg-clip-text bg-linear-45 from-violet-700 to-green-300 text-transparent mb-10 animate-[pulse_0.7s_ease-in-out_infinite] shadow-lime-50 text-shadow-[0_0px_5px_rgb(255_255_255)] ">
          Producto Destacado
        </h2>
        <div className="w-200 h-200 bg-white flex flex-col justify-center items-center relative rounded-lg hover:scale-105 transition-all duration-300 m-20 bg-[url(/products/precentacion.png)] bg-cover bg-center">
          <Image
            src="/products/producto estrella.png"
            alt="producto estrella"
            width={800}
            height={370}
            className="rounded-lg animate-[pulse_5s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </div>
  );
}
