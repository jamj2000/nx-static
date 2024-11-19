import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.5.- ¿Qué documentación debo enviar al centro?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={15} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
