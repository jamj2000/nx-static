import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={0} />

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
            src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/tutor-and-student.png"
            width={200}
            height={100}
            alt="" />
        </div>

        <table className="w-[100%] lg:w-[80%] self-center border-separate">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Elaborado por:</th>
              <td className="border-2 border-blue-200 p-4">Dirección General de Formación Profesional</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Versión:</th>
              <td className="border-2 border-blue-200 p-4">5</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Fecha de publicación:</th>
              <td className="border-2 border-blue-200 p-4">3/03/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
