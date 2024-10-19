import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "1.- Solicitud de convalidaciones"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={1} />

      <div className="flex flex-col gap-4 bg-blue-200 p-10 rounded-3xl shadow-lg shadow-slate-300">
        <p>Aquí encontrarás información acerca de cómo solicitar la convalidación de un módulo profesional y la exención del módulo de Formación en Centros de Trabajo.</p>
        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/scales-308063_1280.png"
          width={200}
          height={200}
          alt=""
          className="self-center"
        />
      </div>
    </>
  );
}
