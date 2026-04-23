import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="w-full h-full bg-[url('/6074593.jpg')] bg-cover">
      <div className="w-1/2 h-150 flex items-center justify-center mx-auto rounded-xl overflow-hidden m-10">
        <div className="flex items-center justify-center w-1/2 h-full bg-[url('/componentes.png')]  bg-center rounded-l-xl">
          <div className="w-full h-full bg-linear-to-t from-black/50 to-transparent flex items-center justify-center"></div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-around w-1/2 h-full bg-white/40 ">
          <div className="w-full h-full bg-linear-to-t from-black/50 to-transparent flex flex-col items-center justify-around">
            <h3 className="text-2xl font-bold text-white">Inicia Sesion</h3>
            <form action="" className="flex flex-col gap-1">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                placeholder="Usuario"
                className="border-amber-50 border-2 rounded-md p-2 mb-4"
              />
              <label htmlFor="">Correo Electrónico</label>
              <input
                type="text"
                placeholder="Correo Electrónico"
                className="border-amber-50 border-2 rounded-md p-2 mb-4"
              />
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="border-amber-50 border-2 rounded-md p-2 mb-4"
              />
              <label htmlFor="">Código de Verificación</label>
              <input
                type="text"
                placeholder="Código de Verificación"
                className="border-amber-50 border-2 rounded-md p-2 mb-4"
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Recordarme</label>
              </div>

              <Link
                href="/hero"
                className="text-sm text-blue-500 hover:underline mt-2"
              >
                No tienes una cuenta? Regístrate aquí
              </Link>
              <Link
                href="/hero"
                className="bg-orange-500 w-full p-2 rounded text-white text-sm text-center mt-4"
              >
                Iniciar sesión
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
