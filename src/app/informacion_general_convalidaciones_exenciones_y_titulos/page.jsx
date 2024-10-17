import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={0} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
