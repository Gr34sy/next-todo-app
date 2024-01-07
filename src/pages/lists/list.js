import { ListLayout } from "@/components/ListLayout/ListLayout";
import { Checkbox } from "@/components/Checkbox/Checkbox";

import { Dummy_List } from "@/utils/dummy-data";

import { useState } from "react";

export default function List(props) {
  console.log(props.simple_list);

  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit(prev => !prev);
  }

  return (
    <ListLayout title={"The Bay"} onClick={handleClick} enableEdit={enableEdit}>
      <div className="simple-list">
        <ul className="simple-list__items">
          <li className="simple-list__item"><Checkbox isChecked={true}/>You've got the body</li>
          <li className="simple-list__item"><Checkbox />Do you have the soul?</li>
          <li className="simple-list__item"><Checkbox />You've got the body</li>
          <li className="simple-list__item"><Checkbox />Do you have the soul?</li>
        </ul>
      </div>
    </ListLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      simple_list: Dummy_List,
    },
  };
}
