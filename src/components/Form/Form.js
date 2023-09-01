
export function Form(props){
    return(
        <form className="form">
            {props.children}
            <button className="form__button form__button--create">
                Create List
            </button>
        </form>
    )
}
