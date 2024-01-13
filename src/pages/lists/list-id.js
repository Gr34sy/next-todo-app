import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { List } from "@/components/Lists/List";

import { Dummy_List } from "@/utils/dummy-data";

import { useState } from "react";

const list = Dummy_List;

export default function ListPage(props) {
  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit((prev) => !prev);
  }

  return (
    <ListPageLayout
      title={list.title}
      onClick={handleClick}
      editMode={enableEdit}
    >
      <div className="simple-list">
        <List
          editMode={enableEdit}
          contentArray={list.tasks}
        />
      </div>
    </ListPageLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      simple_list: Dummy_List,
    },
  };
}
