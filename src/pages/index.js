import { FormLogIn } from "@/components/Forms/FormLogIn";
import { List } from "../components/List/List";
import { Tasklist } from "@/components/Tasklist/Tasklist";

export default function HomePage() {
  return (
    <div className="homepage">
      <main className="main homepage__pinned">
        <h1 className="section__header">Pinned Lists</h1>
        <div className="homepage__pinned-lists">
          <List />

          <List />

          <List />
        </div>

        <Tasklist />
      </main>

      <section className="section">
        <FormLogIn />
      </section>
    </div>
  );
}
