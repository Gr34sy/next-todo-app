export function FormLayout(props) {
  return (
    <form className="form">
      <div className="form__wrapper">
        {props.children}
      </div>
    </form>
  );
}
