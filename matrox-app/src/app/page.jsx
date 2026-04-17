import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex   flex-col items-center    bg-white dark:bg-black sm:items-start">
        <section className="flex flex-col max-w-full items-center  gap-3 sm:items-start mb-20">
          <h1 className="text-6xl font-bold text-center sm:text-left">
            Bienvenido a <span className="text-blue-600">Matrox</span>
          </h1>
          <p className="mt-4 text-1/3 text-gray-500 text-center sm:text-left">
            Tu plataforma de compra de articulos electronicos .
          </p>

          <div className="mt-10 flex flex-col justify-center items-center bg-gray-800 rounded-xl p-10">
            <p className="text-3xl font-bold items- text-center text-white">
              Explora nuestra amplia gama de productos <br /> electrónicos y encuentra
              las mejores ofertas.
            </p>

            <Link href="/login" className=" mt-40 bg-white text-black font-bold py-6 px-8 rounded-2xl  hover:bg-gray-200">
              registrate para comprar ahora
            </Link>
          </div>
        </section>
       


        
        
      </main>
    </div>
  );
}
