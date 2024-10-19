import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "2.- Solicitud del título"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={21} />
      <div className="flex flex-col gap-4 bg-blue-200 p-10 rounded-3xl shadow-lg shadow-slate-300">
        <p>Aquí encontrarás los pasos a seguir para solicitar el título del ciclo una vez hayas superado todos los módulos formativos que lo conforman.</p>
        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/certificate-575526_640.png"
          width={200}
          height={0}
          alt=""
          className="self-center"
        />
      </div>

    </>
  );
}
