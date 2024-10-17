import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={18} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
