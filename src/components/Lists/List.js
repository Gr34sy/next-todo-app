import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export function List({ editMode, contentArray }) {
  function ListLine(props) {
    if (editMode)
      return (
        <li className="list__item">
          <FontAwesomeIcon icon={faPen} className="list__item_pen-icon" />
          {props.content}
          <FontAwesomeIcon icon={faTrash} className="list__item_trash-icon" />
        </li>
      );
    else
      return (
        <li className="list__item">
          <Checkbox isChecked={false} />
          {props.content}
        </li>
      );
  }

  return (
    <div className="list">
      <div className="list__add-item">
        <input type="text" className="add-item__input" />
        <FontAwesomeIcon icon={faSquarePlus} className="add-item__button" />
      </div>

      <ul className="list__container">
        {contentArray.map((content, i) => (
          <ListLine content={content} key={i} />
        ))}
      </ul>
    </div>
  );
}
