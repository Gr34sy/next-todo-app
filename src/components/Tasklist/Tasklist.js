import Link from "next/link";

export function Tasklist() {
  return (
    <Link href="/lists/tasklist" className="tasklist">
        <h3 className="list__title">List Title</h3>
        <ul className="list__ul">
          <li>Ziemniaki</li>

          <li>Szynka</li>

          <li>Syr</li>
        </ul>
    </Link>
  );
}
