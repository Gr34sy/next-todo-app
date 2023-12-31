import { FormLogIn } from "@/components/Forms/FormLogIn";
import { Tabs } from "@/components/Tabs/Tabs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="homepage">
      <main className="main homepage__pinned">
        <h1 className="section__header">Your Lists</h1>
        <Link href="/lists/list">Simple List </Link> <br/>
        <Link href="/lists/tasklist">Tasklist </Link>
      </main>

      <section className="section">
        <Tabs header1='Header 1' header2='Header 2'/>
      </section>

      <section className="section">
        <FormLogIn />
      </section>
    </div>
  );
}
