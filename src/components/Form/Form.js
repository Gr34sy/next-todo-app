export function Form(props) {
  return (
    <form className="form">
      <div className="form__wrapper">
        {props.children}
        <button className="custom-button custom-button--big">
          {props.formSubmitText}
        </button>
      </div>
    </form>
  );
}
