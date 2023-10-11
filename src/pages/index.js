import { FormLogIn } from "@/components/Forms/FormLogIn";

export default function HomePage() {
  return (
    <div className="homepage">
      <main className="main">
        <h1 className="section__header">Pinned Lists</h1>
        <div className="homepage__pinned-lists">

        </div>
        
        <div className="homepage__pinned-tasklist">

        </div>
      </main>

      <section className="section">
        <FormLogIn />
      </section>
    </div>
  );
}
