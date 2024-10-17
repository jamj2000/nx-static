import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";
import ItemLista from "@/components/item-lista";
import Link from "next/link";


export const metadata = {
  title: "2.2.- Tramitación y recogida"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={23} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <p>
              Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el cual se reconoce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado y superado.
            </p>
            <p>
              A continuación, se muestra información tutorial que esperamos que te sea de utilidad.
            </p>
          </div>
          <Image className="px-5 self-center"
            src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/Happy-Girl-.png"
            width={200}
            height={100}
            alt="" />
        </div>

        <div className="flex flex-col gap-4 bg-blue-200 p-10 rounded-3xl shadow-lg shadow-slate-300">
          <p>Puedes encontrar más información al respecto:</p>

          <ItemLista>En el artículo 7 de la <Link className="text-blue-500" href="http://www.juntadeandalucia.es/boja/1996/67/50">ORDEN de 21 de mayo de 1996, por la que se regulan el procedimiento de expedición y la organización y funcionamiento del Registro de los títulos académicos y profesionales correspondientes a las enseñanzas establecidas por la Ley Orgánica 1/1990, de 3 de octubre, de Ordenación General del Sistema Educativo</Link> y</ItemLista>

          <ItemLista>En el <Link className="text-blue-500" href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-342">Real Decreto 700/2019, de 29 de noviembre, por el que se modifica el Real Decreto 1850/2009, de 4 de diciembre, sobre expedición de títulos académicos y profesionales correspondientes a las enseñanzas establecidas por la Ley Orgánica 2/2006, de 3 de mayo, de Educación, para fijar el formato, el contenido y el soporte documental del Suplemento Europeo al Título de las Enseñanzas Artísticas</Link>.</ItemLista>
        </div>
      </div>
    </>
  );
}
