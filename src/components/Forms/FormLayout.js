export function FormLayout(props) {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="form__wrapper">
        {props.children}
      </div>
    </form>
  );
}
