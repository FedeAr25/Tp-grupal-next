import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full h-full bg-green-600 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold pt-20">
        MATROX NO ES UN PLAGIO SE LOS JURO
      </h1>
      <div className="pt-30">
        <Image src="/carretera.jpg" width={900} height={500} />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20">
        <div className="w-70 h-80 bg-red-500 flex flex-col justify-center items-center">
          1
          <Image src="/carretera.jpg" width={100} height={60} />
          <h2>Producto</h2>
          <p>descripcion</p>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae delectus voluptatibus ipsum qui nostrum explicabo illo
            minima, quaerat ut!
          </p>
        </div>
        <div className="w-70 h-80 bg-red-500 flex flex-col justify-center items-center">
          2
          <Image src="/carretera.jpg" width={100} height={60} />
          <h2>Producto</h2>
          <p>descripcion</p>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae delectus voluptatibus ipsum qui nostrum explicabo illo
            minima, quaerat ut!
          </p>
        </div>
        <div className="w-70 h-80 bg-red-500 flex flex-col justify-center items-center">
          3
          <Image src="/carretera.jpg" width={100} height={60} />
          <h2>Producto</h2>
          <p>descripcion</p>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae delectus voluptatibus ipsum qui nostrum explicabo illo
            minima, quaerat ut!
          </p>
        </div>
        <div className="w-70 h-80 bg-red-500 flex flex-col justify-center items-center">
          4
          <Image src="/carretera.jpg" width={100} height={60} />
          <h2>Producto</h2>
          <p>descripcion</p>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae delectus voluptatibus ipsum qui nostrum explicabo illo
            minima, quaerat ut!
          </p>
        </div>
        <div className="w-70 h-80 bg-red-500 flex flex-col justify-center items-center">
          5
          <Image src="/carretera.jpg" width={100} height={60} />
          <h2>Producto</h2>
          <p>descripcion</p>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae delectus voluptatibus ipsum qui nostrum explicabo illo
            minima, quaerat ut!
          </p>
        </div>
        <div className="w-70 h-80 bg-red-500 flex flex-col justify-center items-center">
          6
          <Image src="/carretera.jpg" width={100} height={60} />
          <h2>Producto</h2>
          <p>descripcion</p>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestiae delectus voluptatibus ipsum qui nostrum explicabo illo
            minima, quaerat ut!
          </p>
        </div>
      </div>
    </div>
  );
}
