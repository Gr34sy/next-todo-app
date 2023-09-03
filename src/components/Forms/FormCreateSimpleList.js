import { Form } from "@/components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export function FormCreateSimpleList() {
  return (
    <Form>
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

      <button className="form__button form__button--tag">Add Tag</button>


      <label className="form__label" htmlFor="form-pinned">
        <div className="checkbox__div">
        <input
          type="checkbox"
          name="pinned"
          id="form-pinned"
          className="form__checkbox"
        />
        </div>

        <p className="checkbox__description">Pinned List</p>
      </label>
    </Form>
  );
}
