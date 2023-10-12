import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";
import { ChoiceTile } from "@/components/ChoiceTile/ChoiceTile";

function ListsPage() {
  return (
    <main className="main lists-page">
      <div className="browse-lists">
        <h1 className="section__header">Browse Your Lists</h1>
        <div className="browse-lists__choice-tiles">
          <ChoiceTile
            link={"/lists/simple-lists"}
            content={"Your Simple Lists"}
          />
          <ChoiceTile
            link={"/lists/tasklists"}
            content={"Your Tasklists"}
          />
        </div>
      </div>

      <div className="create-list">
        <h2 className="section__header">Create New List</h2>
        <div className="create-list__choice-tiles">
          <ChoiceTile
            link={"/lists/simple-list-creator"}
            content={"Simple List Creator"}
          />
          <ChoiceTile
            link={"/lists/tasklist-creator"}
            content={"Tasklist Creator"}
          />
        </div>
      </div>
    </main>
  );
}

export default ListsPage;

{
  /* <FormCreateSimpleList />
<br /><br /><br />
<FormCreateTaskList /> */
}
