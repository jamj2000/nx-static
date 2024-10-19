import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={17} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
