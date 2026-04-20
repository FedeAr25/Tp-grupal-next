import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="  flex flex-1 w-full max-w-full flex-col items-center justify-center py-10 px-16 bg-white dark:bg-black ">
        <section className="flex flex-col max-w-1.5: items-center gap-3 sm:items-start mb-20">
          <h1 className="text-6xl font-bold text-center sm:text-left">
            Bienvenido a <span className="text-blue-600">Matrox</span>
          </h1>
          <p className="mt-4 text-1/3 text-gray-500 text-center sm:text-left">
            Tu plataforma de compra de articulos electronicos .
          </p>
        </section>
        <section className="w-300 h-100 flex flex-col  items-center justify-center rounded-xl border ">
          <div className=" mb-10 text- bg-clip-text text-transparent bg-linear-to-r from-green-500 to-purple-600 w-200 h-40  text-2xl  flex flex-col items-center justify-center">  
          <p>No dudes en explorar nuestra selección de productos de última generación orientada a la tecnología de punta.</p>
        <Link href="/login" className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explorar Productos
        </Link>
              </div>
        </section>


        
        
      </main>
    </div>
  );
}
