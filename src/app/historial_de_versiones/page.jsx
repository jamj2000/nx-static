import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "Historial de versiones"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={24} />

      <div className="flex flex-col gap-4">
        <p className=" font-bold">5.0 Actualización de enlaces en apartados 1.2, 1.27, 1.4, 1.5, 1.7, 1.10, 2.1 y 2.2. Actualización de texto en apartados: Introducción, 1.1, 1.1.1, 1.1.2, 1.2, 1.2.1, 1.2.2, 1.2.3,1.2.4, 1.2.7 (antiguo 1.2.6), 1.3, 1.4, 1.5, 1.7, 1.9, 2.1 y 2.2. Inclusión del apartado 1.2.6 que desplaza el antiguo a 1.2.7. Eliminación del apartado 1.8.1 (3/03/2022).</p>
        <p>4.0 Actualización de enlaces en apartados 1.1.2, 1.5 y 1.10 (11/09/2020).</p>
        <p>3.2.<span>Modificación en el apartado 1.1. del plazo para recoger las solicitudes de convalidación. </span><span>Revisión y restauración de enlaces (18/09/2019).</span></p>
        <p>3.1. Modificación párrafo en apartado &quot;2.1 Solicitud&quot;, para la entrega al centro del modelo 046 (25/01/2019).</p>
        <p>3.0. Actualización del apartado &quot;Convalidaciones en FP&quot; ampliando la información al respecto en nuevos sub-apartados (10/10/2018).</p>
        <p>2.0. Actualización de apartado &quot;Solicitud del título&quot; y su demostración. Creación de una primera sección sobre las convalidaciones (12/06/2017).</p>
        <p>1.0. Versión inicial (16/04/2015). </p>
      </div>
    </>
  );
}
