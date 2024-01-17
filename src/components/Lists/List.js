import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function List({
  items,
  operationsList,
  listId,
  itemFunction,
}) {

  //Hooks
  const INITIAL_ITEMS = items;
  const [listItems, setListItems] = useState(INITIAL_ITEMS);
  const [inputValue, setInputValue] = useState(" ");

  // useEffect(() => {

  // }, [])

  function inputValueChange(e) {
    setInputValue(e.target.value);
  }

  // Operations on Items
  function addItem() {
    setListItems(prevItems => [
      ...prevItems,
      {
        id: `${listId}-${listItems.length}`,
        name: inputValue,
        isDone: false,
      }
    ]);
    setInputValue(" ");
  }
  function deleteItem(id){
    setListItems(prevItems => {
      const filteredItems = prevItems.filter((item) => item.id !== id);
      const updatedItems = filteredItems.map((item, i) => ({
        ...item,
        id: `${listId}-${i} `
      }))

      return updatedItems
    })
  }

  // ListItem Component
  function ListItem({id, isDone, name, itemClick, deleteItem, editItem}){
    return (
      <li className="list__item" data-id={id} onClick={itemClick}>
        <Checkbox isChecked={isDone} />
        {name}

        <div className="list__item_icons">
          <FontAwesomeIcon icon={faPen} className="list__item_pen-icon" />
          <FontAwesomeIcon
            icon={faTrash}
            className="list__item_trash-icon"
            onClick={() => deleteItem(id)}
          />
        </div>
      </li>
    );
  }

  return (
    <div className={operationsList ? "list list--operations" : "list"}>
      <div className="list__add-item">
        <input
          type="text"
          className="add-item__input"
          value={inputValue}
          onChange={inputValueChange}
        />
        <FontAwesomeIcon
          icon={faSquarePlus}
          className="add-item__button"
          onClick={addItem}
        />
      </div>

      <ul className="list__container">
        {listItems.map((item) => (
          <ListItem
            name={item.name}
            id={item.id}
            key={item.id}
            isDone={item.isDone}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
