import React from "react";
import InputField from "../../components/InputField";
import "./Register.css";
function Register() {
  return (
    <main className="register">
      <section className="register__container">
        <aside className="register__branding">
          <div className="register__branding-container">
            <img
              className="register__branding-image"
              src="/register/register_branding_name.webp"
              alt=""
            />
            <div>
              <h1 className="register__branding-title">Welcome to Copyva</h1>

              <p className="register__branding-text">
                Your one-stop destination to buy & sell licence
              </p>
            </div>
          </div>
        </aside>

        <header className="register__header">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <h4>Create account</h4>
        </header>
        <div className="register__form-container">
          <h2 className="register__form-title">Create account</h2>
          <form className="register__form">
            <div className="tab-container">
              <input
                checked
                type="radio"
                name="tab"
                id="tab1"
                className="tab tab--1"
              />
              <label className="tab_label" htmlFor="tab1">
                User
              </label>
              <input type="radio" name="tab" id="tab2" className="tab tab--2" />
              <label className="tab_label" htmlFor="tab2">
                Owner
              </label>
              <div className="indicator"></div>
            </div>
            <div className="inputGroup">
              <InputField id="name" label="Full name" />
              <InputField id="email" label="Email address" />
              <InputField id="password" label="Password" />
              <InputField id="confirm-password" label="Confirm password" />
              <button className="register__button" type="submit">
                Submit
              </button>
            </div>
          </form>
          <div className="register__or">
            <div className="hr" />
            or
            <div className="hr" />
          </div>
          <div className="register__social">
            <p className="register__login-text">Already a member? Login</p>
            <button className="register__login-button">Login</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
