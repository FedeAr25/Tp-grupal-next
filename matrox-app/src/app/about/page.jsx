import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[url('/6074593.jpg')] bg-cover flex items-center justify-center">
      
      <div className="w-1/2 bg-white/40 backdrop-blur-md rounded-xl p-10 shadow-lg text-center">
        
        <h1 className="text-4xl font-bold text-white mb-6">
          Sobre Nosotros
        </h1>

        <p className="mb-4 text-white text-lg">
          Somos <strong>Matrox</strong>, una pequeña empresa dedicada a la venta
          de dispositivos electrónicos de muy buena calidad. Nuestra plataforma
          está pensada para ofrecer una experiencia simple y confiable en la
          compra de artículos electrónicos.
        </p>

        <p className="mb-6 text-white text-lg">
          En Matrox trabajamos con compromiso y responsabilidad, seleccionando
          productos que cumplan con altos estándares, para garantizar la mejor
          experiencia posible.
        </p>

        <Link href="/about/contact">
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Contactanos!!
          </button>
        </Link>

      </div>
    </div>
  );
}