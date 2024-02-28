//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export function DeleteAlert({ deleteFunction, closeFunction }) {
  function handleClose() {
    if (typeof closeFunction === "function") {
      closeFunction();
    }
  }
  function handleDelete() {
    if (
      typeof deleteFunction === "function" &&
      typeof closeFunction === "function"
    ) {
      deleteFunction();
      closeFunction();
    }
  }

  return (
    <div className="deleteAlert__card">
      <FontAwesomeIcon
        icon={faSquareXmark}
        className="deleteAlert__x-icon"
        onClick={handleClose}
      />
      <p className="deleteAlert__p">
        Are you sure? <br /> The changes cannot be reverted
      </p>
      <button
        onClick={handleDelete}
        className="custom-button custom-button--big"
      >
        Delete
      </button>
    </div>
  );
}
