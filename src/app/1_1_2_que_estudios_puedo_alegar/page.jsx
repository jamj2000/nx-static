import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";
import ItemLista from "@/components/item-lista";
import Link from "next/link";


export const metadata = {
  title: "1.1.2.- ¿Qué estudios puedo alegar?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={4} />

      <div className="flex flex-col gap-4">
        <div>
          <ItemLista>Para solicitar la convalidación de módulos profesionales de un ciclo formativo de FP <span className="font-bold">se pueden alegar enseñanzas</span> cursadas dentro <span className="font-bold">del Sistema Educativo</span> y Unidades de Competencia acreditadas. Por tanto, se puede aportar:</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Otros ciclos formativos</span> de Formación Profesional de grado medio o superior cursados con anterioridad.</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Enseñanzas universitarias</span>: diplomaturas, licenciaturas, grados.</ItemLista>
          <ItemLista interior={true}>Las <span className="font-bold">antiguas enseñanzas de Formación Profesional</span> de primer y segundo grado (títulos de Técnico auxiliar y Técnico especialista).</ItemLista>
          <ItemLista interior={true}>Ciclos formativos de <span className="font-bold">Enseñanzas deportivas</span> o de <span className="font-bold">Artes Plásticas y Diseño</span>.</ItemLista>
          <ItemLista interior={true}>Certificaciones académicas Oficiales de idioma (del mismo idioma que se solicita la convalidación y de nivel idóneo).</ItemLista>
          <ItemLista interior={true}>Unidades de Competencia acreditadas.</ItemLista>
        </div>
        <div>
          <ItemLista>Las enseñanzas siguientes no se pueden alegar:</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Carnés profesionales y cursos de Formación Profesional para el empleo (FPO y FP continua)</span>, distintos de los que conducen a la obtención de un Certificado de profesionalidad y a la acreditación oficial de unidades de competencia.</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Cursos privados</span> realizados en academias y centros de formación que no imparten enseñanzas oficiales.</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Cursos propios impartidos en la Universidad</span>, que no sean másteres oficiales como los cursos de experto, cursos de especialización, ...</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Títulos propios no oficiales de universidad.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Certificados de idiomas no oficialmente aceptados.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Experiencia laboral.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Formación no formal.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Titulaciones extranjeras homologadas.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Títulos equivalentes LOGSE.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Formaciones de otros ministerios que tienen concedida por normativa la equivalencia general o específica.</span></ItemLista>
        </div>
        <ItemLista>Los <span className="font-bold">módulos profesionales que hayan sido previamente convalidados no podrán ser alegados para convalidar</span>. Solo se puede alegar materias que hayan sido cursadas y superadas. Los títulos extranjeros homologados tampoco podrán ser causa de una nueva convalidación con otros módulos profesionales.</ItemLista>
        <ItemLista>Los <span className="font-bold">estudios que tengan concedida la equivalencia específica o genérica <Link className='text-blue-600' href="http://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/quiero-formarme/posibilidades-tras-formarme/equivalencias/tabla-equivalencias">(aquí los tenéis)</Link></span>, a efectos académicos y/o profesionales, con títulos de Formación Profesional <span className="font-bold">no podrán ser utilizados a su vez para la convalidación de sus módulos profesionales</span>; por tanto, quien haya superado la totalidad de un ciclo formativo LOGSE no podrá aportarlo para solicitar la convalidación de ningún módulo profesional del título LOE equivalente que lo sustituye. Las convalidaciones que aparecen recogidas en el anexo IV del Real Decreto que regula cada título están reservadas para quien no ha podido finalizar el ciclo formativo que se extingue y debe transitar al nuevo ciclo formativo equivalente, o para quien solicita dichas convalidaciones para un título diferente de aquel con el que se ha declarado la equivalencia.</ItemLista>
        <ItemLista>Haber cursado enseñanzas superiores no siempre da derecho a la convalidación de enseñanzas relacionadas, pero de menor nivel, aunque en ambas haya materias con nombres similares.</ItemLista>
        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/class-377117_960_720.jpg"
          alt=""
          width={960}
          height={720}
          className="self-center"
        />

      </div>
    </>
  );
}
