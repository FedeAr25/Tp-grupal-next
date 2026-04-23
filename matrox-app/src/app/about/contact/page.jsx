"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="w-full min-h-screen bg-[url('/6074593.jpg')] bg-cover flex items-center justify-center">
      
      <div className="w-1/2 bg-white/40 backdrop-blur-md rounded-xl p-8 shadow-lg">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Contáctanos
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            className="p-2 rounded border"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="p-2 rounded border"
            required
          />

          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            className="p-2 rounded border"
          />

          <textarea
            name="mensaje"
            placeholder="Escribí tu mensaje..."
            value={form.mensaje}
            onChange={handleChange}
            className="p-2 rounded border h-32 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4"
          >
            Contáctanos
          </button>
        </form>
      </div>
    </div>
  );
}
