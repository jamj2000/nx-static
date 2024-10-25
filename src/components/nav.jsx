import Link from "next/link";
import { menu, slug } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from "lucide-react";

function Nav({ pos }) {
    return (
        <div className="p-4 text-right">
            {pos > 0 &&
                <Link href={slug(menu[pos - 1])} className="p-2 rounded-l-full bg-blue-200 text-2xl text-blue-500 mr-4">
                    <ArrowLeft className="inline"/> Anterior
                </Link>
            }
            {pos < menu.length - 1  &&
                <Link href={slug(menu[pos + 1])} className="p-2 rounded-r-full bg-blue-200 text-2xl text-blue-500">
                    Siguiente <ArrowRight className="inline" />
                </Link>
            }

        </div>
    );
}

export default Nav;