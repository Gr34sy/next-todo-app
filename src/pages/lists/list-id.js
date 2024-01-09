import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { List } from "@/components/Lists/List";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { Dummy_List } from "@/utils/dummy-data";

import { useState } from "react";

export default function ListPage(props) {
  console.log(props.simple_list);

  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit((prev) => !prev);
  }

  return (
    <ListPageLayout
      title={"The Bay"}
      onClick={handleClick}
      editMode={enableEdit}
    >
      <div className="simple-list">
        <List
          editMode={enableEdit}
          contentArray={["You've", "got", "the", "body"]}
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
