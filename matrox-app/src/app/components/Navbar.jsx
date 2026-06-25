"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CartButton from "./CartButton";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 w-full h-20 sticky top-0 z-50 left-0 right-0">
      <div className="bg-black/15 w-full h-full  text-background items-center justify-between flex px-5">
        <div className="justify-self-start flex items-center gap-2">
          <Image
            src="/Matrox.png"
            alt="Next.js Logo"
            width={70}
            height={70}
            className="object-contain p-2"
          />
        </div>

        <div className="font-semibold flex gap-8 justify-self-center">
          <Link
            href={"/"}
            className="  px-4  py-2 rounded-xl text-amber-50  bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
          >
            Principal
          </Link>
          <Link
            href={"/categories"}
            className="  px-4  py-2 rounded-xl text-amber-50  bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
          >
            Categorias
          </Link>
          <Link
            href={"/about"}
            className=" px-4  py-2 rounded-xl text-amber-50  bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
          >
            Sobre
          </Link>
          <Link
            href={"/hero"}
            className=" px-4  py-2 rounded-xl text-amber-50  bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
          >
            Catalogo
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <CartButton />
          <Link
            href={"/login"}
            className=" px-4  py-2 rounded-xl text-amber-50  bg-gray-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-900/50"
          >
            Logearse
          </Link>
        </div>
      </div>
    </nav>
  );
}
