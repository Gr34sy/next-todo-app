"use client";

//forms
import { FormLayout } from "./FormLayout";

//js imports
import { signIn } from "next-auth/react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function FormLogIn() {
  function handleGoogleLogin(e) {
    e.preventDefault();
    signIn("google");
  }

  function handleGithubLogin(e) {
    e.preventDefault();
    signIn("github");
  }

  return (
    <FormLayout
     hideSubmit={true}
    >
      <div className="form__login-methods">
        <button
          className="custom-button custom-button--big form__method-button"
          onClick={handleGithubLogin}
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </button>
        <button
          className="custom-button custom-button--big form__method-button"
          onClick={handleGoogleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} /> Google
        </button>
      </div>
    </FormLayout>
  );
}
