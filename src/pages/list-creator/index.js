import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";
import { Tabs } from "@/components/Tabs/Tabs";

export default function ListCreator() {
  return (
    <main className="list-creator">
      <h1 className="section__header">Creator</h1>
      <Tabs header1='Create List' header2='Create Tasklist' content1={<FormCreateSimpleList />} content2={<FormCreateTaskList />} />
    </main>
  );
}
