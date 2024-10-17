import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "2.2.- Tramitación y recogida"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={23} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
