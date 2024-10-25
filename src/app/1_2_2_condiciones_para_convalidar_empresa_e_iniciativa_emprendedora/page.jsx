import Titulo from "@/components/titulo";
import Nav from "@/components/nav.orig";


export const metadata = {
  title: "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={7} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
