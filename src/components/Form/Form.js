export function Form(props) {
  return (
    <form className="form">
      <div className="form__wrapper">
        {props.children}
        <button className="form__button form__button--create">
          Create List
        </button>
      </div>
    </form>
  );
}
