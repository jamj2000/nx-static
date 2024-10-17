import Link from "next/link";

function Nav({ pos }) {
    return (
        <div>
            <Link className="" href={slug(menu[pos-1])}>{menu[pos-1]} </Link>
            <Link className="" href={slug(menu[pos+1])}>{menu[pos+1]} </Link>
        </div>
    );
}

export default Nav