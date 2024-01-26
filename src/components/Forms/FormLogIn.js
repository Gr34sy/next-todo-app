"use client";

//forms
import { FormLayout } from "./FormLayout";

//js imports
import { signIn } from "next-auth/react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export function FormLogIn() {
  function handleGoogleLogin(e) {
    e.preventDefault();
    signIn("google");
  }

  function handleFacebookLogin(e) {
    e.preventDefault();
    signIn("facebook");
  }

  function handleGithubLogin(e) {
    e.preventDefault();
    signIn("github");
  }

  return (
    <FormLayout
      displayFormSubmit={false}
      title="Sign in to use the application!"
    >
      <h2 className="form__login-methods__title">Choose login option</h2>
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
        {/* <button
          className="custom-button custom-button--big form__method-button"
          onClick={handleFacebookLogin}
        >
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </button> */}
      </div>
    </FormLayout>
  );
}
