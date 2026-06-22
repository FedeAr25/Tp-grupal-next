import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({ params }) {
  // Obtenemos el id que viene por la URL.
  // Ejemplo: /hero/1, /hero/2, /hero/3, etc.
  const { id } = await params;

  // Lista de productos disponibles.
  const productos = {
    1: {
      nombre: "Monitor Logitech H345-2 144hz 1ms 27 2k VA",
      imagen: "/products/monitor.png",
      descripcion: "Monitor gamer de alto rendimiento.",
      caracteristicas: [
        "Resolución 2560x1440",
        "Frecuencia de actualización 144Hz",
        "Tiempo de respuesta 1ms",
      ],
      precio: ["$299.99", "$249.99"],
    },
    2: {
      nombre: "Teclado Mecánico Razer BlackWidow V4 Pro",
      imagen: "/products/teclado.png",
      descripcion: "Teclado mecánico con iluminación RGB.",
      caracteristicas: [
        "Switch mecánicos",
        "Iluminación RGB",
        "Conectividad USB",
      ],
      precio: ["$199.99", "$149.99"],
    },
    3: {
      nombre: "Notebook HP Pavilion Gaming 15-ec2076la",
      imagen: "/products/notebook.png",
      descripcion: "Notebook gamer ideal para trabajo y juegos.",
      caracteristicas: [
        "Procesador Intel Core i7",
        "Memoria RAM 16GB",
        "Almacenamiento SSD 512GB",
      ],
      precio: ["$999.99", "$799.99"],
    },
    4: {
      nombre: "Mouse Logitech G502 HERO",
      imagen: "/products/mouse.png",
      descripcion: "Mouse gamer con sensor de alta precisión.",
      caracteristicas: [
        "Sensor óptico de 16000 DPI",
        "Botones programables",
        "Conectividad USB",
      ],
      precio: ["$79.99", "$59.99"],
    },
    5: {
      nombre: "Auricular Logitech G435",
      imagen: "/products/auricular.png",
      descripcion: "Auricular inalámbrico liviano para gaming.",
      caracteristicas: [
        "Conectividad inalámbrica LIGHTSPEED",
        "Sonido envolvente 3D",
        "Micrófono con cancelación de ruido",
      ],
      precio: ["$219.99", "$209.99"],
    },
  };

  // Buscamos el producto según el id recibido.
  // Si no existe, mostramos un producto por defecto.
  const producto = productos[id] || {
    nombre: "Producto desconocido",
    imagen: "/Matrox.png",
    descripcion: "No hay descripción disponible.",
    caracteristicas: ["No hay características disponibles"],
    precio: ["Precio no disponible", "Precio no disponible"],
  };

  // Nos aseguramos de que características siempre sea un array.
  // Esto evita el error: producto.caracteristicas.map is not a function.
  const caracteristicas = Array.isArray(producto.caracteristicas)
    ? producto.caracteristicas
    : [producto.caracteristicas];

  // Nos aseguramos de que precio siempre sea un array.
  // Así podemos usar precios[0] y precios[1] sin romper la página.
  const precios = Array.isArray(producto.precio)
    ? producto.precio
    : [producto.precio, producto.precio];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url(/home.png)] bg-cover bg-center">
      <div className="w-full h-full flex items-center justify-center backdrop-blur-lg rounded-lg shadow-lg">
        <div className="w-2/3 h-4/5 flex rounded-3xl overflow-hidden">
          {/* Galería lateral de imágenes pequeñas */}
          <div className="w-1/12 h-full flex flex-col gap-4 items-center py-6 bg-white/60">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />

            <Image
              src={producto.imagen}
              alt={producto.nombre}
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />

            <Image
              src={producto.imagen}
              alt={producto.nombre}
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />

            <Image
              src="/Matrox.png"
              alt="Logo Matrox"
              className="rounded hover:scale-105 transition-transform duration-300"
              width={60}
              height={60}
            />
          </div>

          {/* Imagen principal del producto */}
          <div className="w-6/12 h-full bg-white p-4 flex items-center justify-center">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Información del producto */}
          <div className="w-5/12 h-full bg-white/60 p-4 flex flex-col justify-between text-black">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs text-stone-700">
                NUEVO | 5k vendidos
              </p>

              <h3 className="bg-orange-500 w-1/4 p-2 rounded text-white text-sm text-center">
                MAS VENDIDO
              </h3>

              <h1 className="text-3xl font-semibold font-sans">
                {producto.nombre}
              </h1>

              <p className="text-zinc-700">{producto.descripcion}</p>
            </div>

            {/* Formas de pago */}
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

            {/* Características del producto */}
            <div>
              <h3 className="mb-3 font-semibold">
                Características del producto
              </h3>

              <ul className="space-y-2">
                {caracteristicas.map((item, index) => (
                  <li key={index} className="text-zinc-700">
                    &bull; {item}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-blue-500 hover:underline mt-10 inline-block"
              >
                Ver más características
              </a>
            </div>

            {/* Precio anterior y precio actual */}
            <div>
              <p className="text-lg text-zinc-500 font-semibold line-through">
                {precios[0]}
              </p>

              <p className="text-2xl font-bold">{precios[1]}</p>
            </div>

            {/* Botón para ir al carrito */}
            <Link
              href="/carrito"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-green-900 w-1/2 text-center"
            >
              Agregar al Carrito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
