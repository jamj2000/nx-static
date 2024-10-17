import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "2.1.- Solicitud"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={22} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
