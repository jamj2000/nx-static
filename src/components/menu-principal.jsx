import Link from "next/link";


const menu = [
    "Información general: convalidaciones, exenciones y títulos",
    "1.- Solicitud de convalidaciones",
    "1.1.- Convalidaciones en FP",
    "1.1.1.- ¿Qué necesito para noder convalidar?",
    "1.1.2.- ¿Qué estudios puedo alegar?",
    "1.2.- ¿Dónde encontrar qué módulos son convalidables?",
    "1.2.1.- Condiciones para convalidar FOL",
    "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora",
    "1.2.3.- Condiciones para convalidar Inglés",
    "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera",
    "1.2.5.- Condiciones para convalidar las Horas de Libre Configuración",
    "1.2.6.- Condiciones para convalidar el módulo de Proyecto",
    "1.2.7.- Exención de la FCT",
    "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?",
    "1.4.- ¿Qué organismo resuelve las convalidaciones?",
    "1.5.- ¿Qué documentación debo enviar al centro?",
    "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?",
    "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?",
    "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?",
    "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?",
    "1.10.- Enlaces relacionados",
    "2.- Solicitud del título",
    "2.1.- Solicitud",
    "2.2.- Tramitación y recogida",
    "Historial de versiones",
]

function slug(texto) {
    return (
        texto
            .toLowerCase()
            .replace(/[¿?:,]/g, "")
            .replace(/- /g, "")
            .replace(/[. ]/g, "_")
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    )
}

const classLink = "block bg-blue-50 hover:bg-[#C3DCF7] text-[#044085] rounded-3xl mb-1 p-2"

function MenuPrincipal() {
    return (
        <div className="bg-[rgba(4,64,133,0.5)] p-3 rounded-lg mx-2 my-2">
            <Link className={classLink} href={'/'}>{menu[0]} </Link>

            <details>
                <summary className=" bg-blue-50 hover:bg-[#C3DCF7] text-[#044085] rounded-3xl mb-1 p-2">
                    <Link href={slug(menu[1])}>{menu[1]} </Link>
                </summary>
                <Link className={`${classLink} ml-4`} href={slug(menu[2])}>{menu[2]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[5])}>{menu[5]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[13])}>{menu[13]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[14])}>{menu[14]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[15])}>{menu[15]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[16])}>{menu[16]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[17])}>{menu[17]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[18])}>{menu[18]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[19])}>{menu[19]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[20])}>{menu[20]} </Link>
            </details>

            <details>
                <summary className="bg-[#C3DCF7] text-[#044085] rounded-3xl mb-1 p-2">
                    <Link href={slug(menu[21])}>{menu[21]} </Link>
                </summary>
                <Link className={`${classLink} ml-4`} href={slug(menu[22])}>{menu[22]} </Link>
                <Link className={`${classLink} ml-4`} href={slug(menu[23])}>{menu[23]} </Link>
            </details>

            <Link className={classLink} href={slug(menu[24])}>{menu[24]} </Link>

        </div>
    );
}

export default MenuPrincipal;