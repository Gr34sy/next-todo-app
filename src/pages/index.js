import { FormCreateSimpleList } from "@/components/Forms/FormCreateSimpleList";
import { FormCreateTaskList } from "@/components/Forms/FormCreateTaskList";
import { FormLogIn } from "@/components/Forms/FormLogIn";

export default function HomePage() {
  return (
    <main>
      <FormLogIn />
      <FormCreateSimpleList />
      <FormCreateTaskList />
    </main>
  );
}
