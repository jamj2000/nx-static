import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";
import ItemLista from "@/components/item-lista";
import Link from "next/link";


export const metadata = {
  title: "1.10.- Enlaces relacionados"
};

const classLink = "font-extrabold text-blue-500 underline"

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={20} />

      <div className="flex flex-col gap-4">
                <p>Además de los enlaces que han ido apareciendo a lo largo de este documento, en estos enlaces encontrarás más información sobre las convalidaciones en la Formación Profesional:</p>
                <div>
                    <ItemLista>
                        Información sobre <Link className={classLink} href="http://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" title="convalidaciones en la página web de FP Andalucía." target="_blank">convalidaciones en la página web de FP Andalucía.</Link>
                    </ItemLista>
                    <ItemLista>
                        Información sobre <Link className={classLink} href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" title="convalidaciones en la página web del Ministerio de Educación." target="_blank">convalidaciones en la página web del Ministerio de Educación.</Link>
                    </ItemLista>
                    <ItemLista>
                        <Link className={classLink} href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" title="Normativa de apoyo" target="_blank">Normativa de apoyo</Link> para las convalidaciones en FP.
                    </ItemLista>
                </div>
                <Image
                    src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/mouse-306274_960_720.png"
                    width={200}
                    height={200}
                    alt=""
                    className="self-center"
                />
            </div>
    </>
  );
}
