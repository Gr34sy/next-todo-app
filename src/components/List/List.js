import Link from "next/link";

export function  List(){
    return (
        <Link href="/list" className="list">
            <h3 className="list__title">List Title</h3>
            <ul className="list__ul">
                <li>
                    Ziemniaki
                </li>

                <li>
                    Szynka
                </li>

                <li>
                    Syr
                </li>
            </ul>
        </Link>
    );
}