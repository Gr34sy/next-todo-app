import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";
import { Tabs } from "@/components/Tabs/Tabs";

export default function ListCreator() {

  async function addList(list){
    const response = await fetch('/api/list', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <main className="list-creator">
      <h1 className="section__header">Create</h1>
      <Tabs header1='List' header2='Tasklist' content1={<FormCreateSimpleList formAction={addList} />} content2={<FormCreateTaskList />} />
    </main>
  );
}
