export default function AboutLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-[url('/6074593.jpg')] bg-cover bg-center text-white">
      
      <div className="p-6 bg-black/50 backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-2">Sobre Nosotros</h1>

        <p className="mb-4">
          Conocemos un poco mejor!
        </p>

        <div className="pt-4">
          {children}
        </div>
      </div>

    </div>
  );
}