import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-full flex-col items-center justify-between py-10 px-16 bg-white dark:bg-black sm:items-start">
        <section className="flex flex-col max-w-1.5: items-center gap-3 sm:items-start mb-20">
          <h1 className="text-6xl font-bold text-center sm:text-left">
            Bienvenido a <span className="text-blue-600">Matrox</span>
          </h1>
          <p className="mt-4 text-1/3 text-gray-500 text-center sm:text-left">
            Tu plataforma de compra de articulos electronicos .
          </p>
        </section>
        <section className="w-full h-100 grid grid-cols-2 gap-4  justify-between rounded-xl border border-gray-300 bg-gray-100 p-4">
          <div className="w-85 h-45 bg-amber-950 flex flex-col items-center justify-center">  
          <p>Artículo 1</p>

          </div>
          <div className="w-85 h-45 bg-amber-950 flex flex-col items-center justify-center">
            <p>Artículo 2</p>
          </div >
          <div className="w-85 h-45 bg-amber-950 flex flex-col items-center justify-center">
            <p>Artículo 3</p>

          </div>
          <div className="w-85 h-45 bg-amber-950 flex flex-col items-center justify-center">
            <p>Artículo 4</p>
            </div> 
            

        </section>


        
        
      </main>
    </div>
  )
}
