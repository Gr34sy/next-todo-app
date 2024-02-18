import { FormCreateList } from "@/components/Forms/FormCreateList";
import { FormCreateTasklist } from "@/components/Forms/FormCreateTasklist";
import { Tabs } from "@/components/Tabs/Tabs";

export default function ListCreator() {
  return (
    <main className="list-creator">
      <h1 className="section__header">What do you want to create?</h1>
      <Tabs header1='List' header2='Tasklist' content1={<FormCreateList />} content2={<FormCreateTasklist />} />
    </main>
  );
}
