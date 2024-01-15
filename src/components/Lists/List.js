import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export function List({ contentArray }) {
  function ListLine(props) {
      return (
        <li className="list__item" data-id={props.itemId}>
          <Checkbox isChecked={props.isDone} />
          {props.content}

          <div className="list__item_icons">
          <FontAwesomeIcon icon={faPen} className="list__item_pen-icon" />
          <FontAwesomeIcon icon={faTrash} className="list__item_trash-icon" />
          </div>
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
        {contentArray.map((content) => (
          <ListLine
            content={content.name}
            itemId={content.id}
            key={content.id}
            isDone={content.isDone}
          />
        ))}
      </ul>
    </div>
  );
}
