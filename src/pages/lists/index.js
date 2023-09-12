import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";

function ListsPage() {
  return (
    <>
      <h1>Lists Page</h1>
      <FormCreateSimpleList />
      <br /><br /><br />
      <FormCreateTaskList />
    </>
  );
}

export default ListsPage;
