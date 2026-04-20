import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className=" bg-[url(/6074593.jpg)] bg-cover  bg-no-repeat flex flex-col items-center justify-center ">
      <main className="  flex w-full max-w-full flex-col items-center justify-center py-6 px-6 ">
        <section className="  flex flex-col min-h-[40vh] items-center justify-center mb-6 text-center sm:text-left rounded-xl ">
          <h1 className="text-6xl font-bold">
            Cat<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">egorias</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Tu plataforma de compra de artículos electrónicos.
          </p>
          <span className="mt-4 text-lg text-gray-300">
            Explora nuestra amplia gama de productos y encuentra lo que necesitas.
          </span>
        </section>

        
        <section className=" overflow-hidden backdrop-blur-3xl grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl bg-gray-50/5 p-4 w-full max-w-6xl">
          <div className=" transition-transform duration-500 ease-in-out hover:scale-105 border-4 border-gray-900 rounded-lg bg-[url(/pcarmada.png)] text-white bg-cover bg-center w-full h-50 text-2xl flex flex-col items-center justify-center">
            <p className=" bg-black/50 backdrop-blur-xl border-2 rounded-lg " >PC ARMADAS </p>
          </div>
          <div className="  transition-transform duration-500 ease-in-out hover:scale-105 border-4 border-gray-900 rounded-lg bg-[url(/notebocks.png)] bg-cover - bg-center w-full h-50 text-2xl  flex flex-col items-center justify-center">
            <p className=" bg-black/50 backdrop-blur-xs border-2 rounded-lg "> NOTEBOOK</p> 
          </div>

          <div className="transition-transform duration-500 ease-in-out hover:scale-105 border-4 border-gray-900 rounded-lg bg-[url(/componentes.png)] bg-cover bg-center w-full h-50 text-2xl  flex flex-col items-center justify-center">
            <p className=" bg-black/50 backdrop-blur-xs border-2 rounded-lg ">COMPONETES </p>
          </div>

          <div className="transition-transform duration-500 ease-in-out hover:scale-105 border-4 border-gray-900/30 rounded-lg bg-[url(/software.png)] bg-cover bg-center w-full h-50 text-2xl  flex flex-col items-center justify-center">
            <p className=" bg-black/50 backdrop-blur-xs border-2 rounded-lg ">SOFTWARE</p>
          </div>
        </section>

        <card className="w-full max-w-6xl mt-6 bg-gray-50/5 backdrop-blur-3xl rounded-xl p-4 text-center">
          <h2 className="text-3xl font-bold mb-2">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-300">
            En Matrox, nos apasiona ofrecerte la mejor experiencia de compra de
            artículos electrónicos. Nuestro compromiso con la calidad, el
            servicio al cliente y la innovación nos distingue. Explora nuestra
            amplia gama de productos y descubre por qué somos tu mejor opción.
          </p>
        </card>
        <summary>
            <h2 className="text-3xl font-bold mb-2">¡Explora nuestras categorías!</h2> 
                <p className="text-lg text-gray-300">
                    Descubre nuestras categorías de productos y encuentra lo que necesitas para tu próxima compra de artículos electrónicos. Desde PC armadas hasta software, tenemos todo lo que buscas.
                </p> 
        </summary>
      </main>
    </div>
  );
}

