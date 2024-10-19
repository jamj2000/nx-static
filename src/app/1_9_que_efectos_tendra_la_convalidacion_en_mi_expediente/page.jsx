import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={19} />

      <div className="flex flex-col gap-4">

      </div>
    </>
  );
}
