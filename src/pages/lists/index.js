import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";

function ListsPage() {
  return (
    <section className="section">
      <h1>Lists Page</h1>
      <FormCreateSimpleList />
      <br /><br /><br />
      <FormCreateTaskList />
    </section>
  );
}

export default ListsPage;
