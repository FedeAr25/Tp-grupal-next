import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <p className="mb-4">
        Somos <strong>Matrox</strong>, una pequeña empresa dedicada a la venta
        de dispositivos electrónicos de muy buena calidad. Nuestra plataforma
        está pensada para ofrecer una experiencia simple y confiable en la
        compra de artículos electrónicos, acercando tecnología a todos nuestros
        clientes.
      </p>

      <p className="mb-4">
        En Matrox trabajamos con compromiso y responsabilidad, seleccionando
        productos que cumplan con altos estándares, para garantizar la mejor
        experiencia posible.
      </p>

      <Link href="/about/contact">
        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Contactanos!!
        </button>
      </Link>
    </div>
  );
}