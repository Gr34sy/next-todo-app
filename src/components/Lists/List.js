import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faSquarePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export function List({ editMode, contentArray}) {
  function ListLine(props) {
    if (editMode)
      return (
        <li className="list__item">
          <div>
            <FontAwesomeIcon icon={faPen} />
            {props.content}
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </li>
      );
    else
      return (
        <li className="list__item">
          <div>
            <Checkbox isChecked={false} />
            {props.content}
          </div>
        </li>
      );
  }

  return (
    <div className='list'>
      <div className="list__add-item">
        {editMode && <input type="text" className="add-item__input" />}
        {editMode && <FontAwesomeIcon icon={faSquarePlus} className="add-item__button"/>}
      </div>

      <ul className="list__container">
        {contentArray.map((content,i) => (
          <ListLine content={content} key={i}/>
        ))}
      </ul>
    </div>
  );
}
