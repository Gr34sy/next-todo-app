//icons
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

//forms
import { Form } from "../Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//js imports
import { useState } from "react";

export function FormLogIn() {
  const [logInMethod, setLogInMethod] = useState(null);

  function logInMethodHandler(e){
    e.preventDefault();
    setLogInMethod(e.target.dataset.value);
  }

  return (
    <Form formSubmitText="Log In" title="Sign in to use the application!">
      <h2 className="form__login-methods__title">Choose login option</h2>
      <div className="form__login-methods">
        <button className={logInMethod === 'Github' ? "custom-button custom-button--big form__method-button chosen-login-method" : "custom-button custom-button--big form__method-button"} data-value="Github" onClick={logInMethodHandler}>
          <FontAwesomeIcon icon={faGithub} /> Github
        </button>
        <button className={logInMethod === 'Google' ? "custom-button custom-button--big form__method-button chosen-login-method" : "custom-button custom-button--big form__method-button"} data-value="Google" onClick={logInMethodHandler}>
          <FontAwesomeIcon icon={faGoogle} /> Google
        </button>
        <button className={logInMethod === 'Facebook' ? "custom-button custom-button--big form__method-button chosen-login-method" : "custom-button custom-button--big form__method-button"} data-value="Facebook" onClick={logInMethodHandler}>
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </button>
      </div>

      <label className="form__label" htmlFor="form-username">
        <div className="label__icon">
          <FontAwesomeIcon icon={faUser} />
        </div>

        <input
          type="text"
          name="username"
          id="form-username"
          className="form__input"
          placeholder="Username"
          autoComplete="on"
        />
      </label>

      <label className="form__label" htmlFor="form-password">
        <div className="label__icon">
          <FontAwesomeIcon icon={faKey} />
        </div>

        <input
          type="password"
          name="password"
          id="form-password"
          className="form__input"
          placeholder="Password"
          autoComplete="on"
        />
      </label>
    </Form>
  );
}
