import { FormCreateList } from "@/components/Forms/FormCreateList";
import { FormCreateTasklist } from "@/components/Forms/FormCreateTasklist";
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
      <h1 className="section__header">What do you want to create?</h1>
      <Tabs header1='List' header2='Tasklist' content1={<FormCreateList formAction={addList} />} content2={<FormCreateTasklist />} />
    </main>
  );
}
