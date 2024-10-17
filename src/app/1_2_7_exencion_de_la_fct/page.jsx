import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.7.- Exención de la FCT"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={12} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
