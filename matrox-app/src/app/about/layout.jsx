
export default function AboutLayout({ children }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Sobre Nosotros</h1>
      <p className="mb-4">
        Bienvenido a la sección About de la app
      </p>

      <div className="border-t pt-4">
        {children}
      </div>
    </div>
  );
}

















