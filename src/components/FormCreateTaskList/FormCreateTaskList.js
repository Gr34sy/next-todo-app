import { Form } from "@/components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export function FormCreateTaskList() {
  return (
    <Form>
      <label className="form__label" for="title">
        <div className="label__icon">
          <FontAwesomeIcon icon={faList} />
        </div>

        <input name="title" className="form__input" placeholder="List Title" />
      </label>

      <label className="form__label" for="deadline">
        <div className="label__icon">
          <FontAwesomeIcon icon={faCalendarDays} />
        </div>

        <input name="deadline" className="form__input" placeholder="Deadline" />
      </label>

      <label className="form__label" for="tags">
        <div className="label__icon">
          <FontAwesomeIcon icon={faTag} />
        </div>

        <input name="tags" className="form__input" placeholder="Tags" />
      </label>

      <button className="form__button form__button--tag">Add Tag</button>

      <label className="form__label label--textarea" for="description">
        <div className="label__icon">
          <FontAwesomeIcon icon={faNoteSticky} />
        </div>

        <textarea
          name="description"
          rows="10"
          className="form__input"
          placeholder="Description"
        />
      </label>
    </Form>
  );
}
