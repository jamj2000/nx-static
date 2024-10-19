import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={14} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
