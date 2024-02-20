import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function List({ items, operationsList, listId, updateFunction }) {
  //Hooks
  const [listItems, setListItems] = useState(items);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {

    if(updateFunction){
      updateFunction(listItems);
    }

  }, [listItems]);

  function inputValueChange(e) {
    setInputValue(e.target.value);
  }

  // Operations on Items
  function addItem() {
    if(operationsList){
      setListItems((prevItems) => [
        ...prevItems,
        {
          id: `item-${listItems.length}`,
          name: inputValue,
          isDone: false,
        },
      ]);
    }

    if(!operationsList){
      setListItems((prevItems) => [
        ...prevItems,
        {
          id: `item-${listItems.length}`,
          name: inputValue,
          isDone: false,
          deadline: "Not scheduled yet",
        },
      ]);
    }

    setInputValue("");
  }
  // function addOnEnter(e){
  //   e.preventDefault();
  //   if(e.key === "Enter"){
  //     addItem();
  //   }
  // }

  function deleteItem(id) {
    setListItems((prevItems) => {
      const filteredItems = prevItems.filter((item) => item.id !== id);
      const updatedItems = filteredItems.map((item, i) => ({
        ...item,
        id: `${listId}-${i} `,
      }));

      return updatedItems;
    });
  }

  function deleteAll(e){
    e.preventDefault;
    setListItems([]);
  }

  function clickItem(id) {
    setListItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }else{
          return item;
        }
      })
    );
  }

  // ListItem Component
  function ListItem({ id, isDone, name, clickItem, deleteItem }) {
    return (
      <li className="list__item" data-id={id}>
        <div className={isDone ? "list__item_content list__item_content--done" : "list__item_content" } onClick={() => clickItem(id)}>
          <Checkbox isChecked={isDone} />
          {name}
        </div>

    
          <FontAwesomeIcon
            icon={faTrash}
            className="list__item_trash-icon"
            onClick={() => deleteItem(id)}
          />
      </li>
    );
  }

  return (
    <div className={operationsList ? "list list--operations" : "list"}>
      <div className="list__add-item">
        <input
          type="text"
          className="list__add-item_input"
          value={inputValue}
          onChange={inputValueChange}
          // onKeyUp={addOnEnter}
          placeholder="Add"
        />
        <FontAwesomeIcon
          icon={faSquarePlus}
          className="list__add-item_button"
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
            clickItem={clickItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>

      {listItems.length > 0 && <button className="custom-button list__clear-button" onClick={deleteAll}><FontAwesomeIcon icon={faTrash}/> Clear </button>}
    </div>
  );
}
