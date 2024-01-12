import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";
import { Tabs } from "@/components/Tabs/Tabs";

export default function ListCreator() {
  return (
    <main className="main">
      <Tabs header1='Create List' header2='Create Tasklist' content1={<FormCreateSimpleList />} content2={<FormCreateTaskList />} />
    </main>
  );
}
