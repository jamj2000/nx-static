import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={13} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
