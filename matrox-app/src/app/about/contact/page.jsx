"use client";

import { useState } from "react";

export default function ContactPage() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enviado: " + nombre);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">
        Formulario de contacto
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}