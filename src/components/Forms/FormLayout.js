export function FormLayout(props) {
  return (
    <form className="form">
      <div className="form__wrapper">
        {props.children}
        {props.displayFormSubmit && <button className="custom-button custom-button--big">
          {props.formSubmitText}
        </button>}
      </div>
    </form>
  );
}
