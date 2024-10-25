import Titulo from "@/components/titulo";
import Nav from "@/components/nav.orig";


export const metadata = {
  title: "1.2.- ¿Dónde encontrar qué módulos son convalidables?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={5} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
