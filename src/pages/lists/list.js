import { ListLayout } from "@/components/ListLayout/ListLayout";
import { Checkbox } from "@/components/Checkbox/Checkbox";

import { Dummy_List } from "@/utils/dummy-data";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSquarePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List(props) {
  console.log(props.simple_list);

  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit(prev => !prev);
  }

  return (
    <ListLayout title={"The Bay"} onClick={handleClick} enableEdit={enableEdit}>
      <div className="simple-list">
        <div className="simple-list__add-task">
            {enableEdit && <input type="text" className="add-task__input" />}
            {enableEdit && <FontAwesomeIcon icon={faSquarePlus} className="add-task__button"/>}
        </div>
        <ul className="simple-list__items">
          <li className="simple-list__item">
            {!enableEdit && <div><Checkbox isChecked={true}/>You've got the body</div>}
            {enableEdit && <div><FontAwesomeIcon icon={faPen}/> You've got the body <FontAwesomeIcon icon={faTrash}/></div>}
          </li>

          <li className="simple-list__item">
            {!enableEdit && <div><Checkbox isChecked={true}/>You've got the body</div>}
            {enableEdit && <div><FontAwesomeIcon icon={faPen}/> You've got the body <FontAwesomeIcon icon={faTrash}/></div>}
          </li>

          <li className="simple-list__item">
            {!enableEdit && <div><Checkbox isChecked={true}/>You've got the body</div>}
            {enableEdit && <div><FontAwesomeIcon icon={faPen}/> You've got the body <FontAwesomeIcon icon={faTrash}/></div>}
          </li>
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
