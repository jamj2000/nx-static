import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.1.1.- ¿Qué necesito para poder convalidar?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={3} />

      <div className="flex flex-col gap-4 bg-blue-200 p-10 rounded-3xl shadow-lg shadow-slate-300">

        <p>La primera condición:</p>

        <ItemLista>Si eres alumno de SEMI o distancia: <span className="font-bold">estar matriculado/a en el módulo que se desea convalidar</span> y realizar el pago de las tasas correspondientes. Hasta que no se realice y se compruebe el pago, no se podrá ejecutar la convalidación en el expediente. De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasara.</ItemLista>
        <p>La <span className="font-bold">convalidación no se realiza sobre la globalidad del Título</span> que se está cursando, sino sobre los módulos que se soliciten, si estos cumplen las condiciones para ello.</p>
      </div>
    </>
  );
}
