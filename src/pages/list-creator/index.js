import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";

export default function ListCreator() {
  return (
    <main className="main">
      <section className="section">
        <FormCreateSimpleList />
      </section>
      <section className="section">
        <FormCreateTaskList />
      </section>
    </main>
  );
}
