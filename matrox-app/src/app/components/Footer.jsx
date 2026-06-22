import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-5 border-t border-white/80 flex bg-zinc-800 justify-between gap-8 items-center mt-auto">
      <div className=" p-8 flex gap-8 text-gray-400 text-sm font-medium">
        <div className="flex flex-col">
          <span className="text-white text-xl font-bold">100%</span>
          <span>Compromiso</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-xl font-bold">Next.js</span>
          <span>Tecnología</span>
        </div>
      </div>
      <div className="flex flex-col py-7 ">
        <h1 className="text-xl ">Matrox S.A. </h1>
        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-300 to-red-400">
          Todos los derechos reservados a Matrox S.A. &copy; 2026
        </span>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="bg-linear-to-b from-cyan-600/40 via-violet-400/20 to-transparent rounded-full p-6">
          <Image
            src="/Matrox.png"
            alt="Next.js Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
