// components 
import { FormCreateList } from "@/components/Forms/FormCreateList";
import { FormCreateTasklist } from "@/components/Forms/FormCreateTasklist";
import { Tabs } from "@/components/Tabs/Tabs";

//hooks
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ListCreator() {
  const session = useSession();
  const router = useRouter();

  if(!session.user) {
    router.push('/sign-in')
    return <main></main>;
  }; 

  return (
    <main className="list-creator">
      <h1 className="section__header">What do you want to create?</h1>
      <Tabs header1='List' header2='Tasklist' content1={<FormCreateList />} content2={<FormCreateTasklist />} />
    </main>
  );
}
