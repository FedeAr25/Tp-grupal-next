import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[url(/home5.jpg)] bg-cover bg-no-repeat">
      <main className="  flex flex-1 w-full max-w-full flex-col items-center justify-center py-6 px-6 ">
        <section className=" flex flex-col max-w-1.5: items-center gap-3  mb-20">
          <div className=" inline-block rounded-full p-2 bg-linear-to-r from-blue-400 to-purple-600 ">
            <h1 className=" px-5 py-2 backdrop-blur-sm rounded-full text-1xl text- tracking-[0.25em] font-bold ">
              Bienvenidos a
              <br />
            </h1>
          </div>
          <span className=" text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600 text-9xl font-bold">
            Matrox
          </span>
          <p className="mt-4 text-4xl text-white text-center sm:text-left font-bold">
            Tecnologia que impulsa tu{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-t from-blue-500 to-purple-600">
              dia a dia
            </span>
          </p>
        </section>
        <section className=" h-auto w-full max-w-6xl mb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className=" bg-w flex flex-row justify-center items-center gap-5">
            <Image
              src="/icons/tarjeta-de-credito.png"
              alt="Home"
              width={50}
              height={100}
              style={{
                filter:
                  "invert(80%) sepia(100%) saturate(5000%) hue-rotate(180deg)",
              }}
            />
            <p className="text-3xl">
              Hasta 12 <br />{" "}
              <span className="text-blue-500">Cuotas sin interes</span>{" "}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center justify-items-center gap-5">
            <Image
              className=""
              src="/icons/camion.png"
              alt="Home"
              width={70}
              height={100}
              style={{
                filter:
                  "invert(80%) sepia(100%) saturate(5000%) hue-rotate(180deg)",
              }}
            />
            <p className="text-3xl">
              Envios A <br />{" "}
              <span className="text-blue-500">todo el pais</span>
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-5">
            <Image
              src="/icons/autenticidad.png"
              alt="Home"
              width={50}
              height={50}
              style={{
                filter:
                  "invert(80%) sepia(100%) saturate(5000%) hue-rotate(180deg)",
              }}
            />
            <p className="text-3xl">
              Productos 100% <br />{" "}
              <span className="text-blue-500">Autenticos</span>
            </p>
          </div>
        </section>
        <section>
          <div className="w-full max-h-max h-80 rounded-xl bg-[url(/home2.jpg)] bg-cover bg-center mb-10"></div>
        </section>

        <section className=" w-auto h-auto flex flex-row gap-20 rounded-r-4xl  items-center justify-between rounded-xl backdrop-blur-lg bg-gray-50/5 p-6 text-center">
          <div className="w-200 h-120 rounded-xl  ">
            <div className="w-150 h-120 bg-cover bg-center mask-cover mask-[url(/mask/mascara1.png)] bg-[url(/pcarmada.png)]"></div>
          </div>
          <div className="h-auto  flex flex-col  items-start  gap-10">
            <h3 className="  text-2xl bg-clip-text text-transparent bg-linear-to-t from-indigo-300 to-purple-500s">
              LO ULTIMO EN TECNOLOGIA
            </h3>


            <div className=" flex  flex-col    text- bg-clip-text text-transparent bg-linear-to-r from-red-500 to-purple-600   text-4xl   items-start justify-start gap-5">
              
              <p className="text-start">Equipate con lo ultimo en tecnologia</p>
              <div className="w-1/4 h-1 bg-linear-to-r from-blue-500 to-purple-600 my-1 "></div>
              <p className="text-start text-white" >
                Explora nuestra amplia gama de productos tecnologicos, pensados para ofrecerte la mejor experiencia, rendimiento y calidad.
              </p>
              <Link
                href="/login"
                className="flex flex-row items-center gap-4 mt-10 hover:scale-105 transition-all duration-300 hover:from-green-400 hover:to-yellow-400 bg-linear-to-r  from-blue-500 to-purple-300   text-black text-2xl  font-bold py-4 px-4 rounded"
              >
                <img src="/icons/shopping-bag.png"  width={35} height={35} /> Explorar Productos
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
