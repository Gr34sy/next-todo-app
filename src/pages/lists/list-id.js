import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { List } from "@/components/Lists/List";

import { Dummy_List } from "@/utils/dummy-data";

import { useState } from "react";


export default function ListPage(props) {

  const list = props.simple_list;

  return (
    <ListPageLayout
      title={list.title}
      onClick={handleClick}
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
