import { Form } from "@/components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export function FormCreateSimpleList() {
  const [isPinned, setIsPinned] = useState(false);

  function pinnedListChangeHandler() {
    if (isPinned) {
      setIsPinned(false);
    } else {
      setIsPinned(true);
    }
  }

  return (
    <Form formSubmitText="Create List">
      <label className="form__label" htmlFor="form-title">
        <div className="label__icon">
          <FontAwesomeIcon icon={faList} />
        </div>

        <input
          type="text"
          name="title"
          id="form-title"
          className="form__input"
          placeholder="List Title"
        />
      </label>

      <label className="form__label" htmlFor="form-tags">
        <div className="label__icon">
          <FontAwesomeIcon icon={faTag} />
        </div>

        <input
          type="text"
          name="tags"
          id="form-tags"
          className="form__input"
          placeholder="Tags"
        />
      </label>

      <button className="custom-button custom-button--small">Add Tag</button>

      <label className="form__label" onClick={pinnedListChangeHandler}>
        <div className="checkbox__div">
          <div
            className={isPinned ? "checkmark__div checked" : "checkmark__div"}
          >
            <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
          </div>
        </div>
        <p className="checkbox__description">Pinned List</p>
      </label>
    </Form>
  );
}
