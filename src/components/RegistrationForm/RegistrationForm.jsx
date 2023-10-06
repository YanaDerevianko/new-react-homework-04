import React, { useState, useEffect } from "react";

export const RegistrationForm = (props) => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswValid, setIsPasswValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const redTxt = {
    color: "red",
  };

  const emailChangeHandler = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(newEmail.includes('@'));
    setFormIsValid(newEmail.includes('@') && isPasswValid);
  };
  const passwChangeHandler = (event) => {
    const newPassw = event.target.value;
    setPassw(newPassw);
    setIsPasswValid(newPassw.trim().length > 8);
    setFormIsValid(isEmailValid && newPassw.trim().length > 8);
  };

  useEffect(() => {
    setFormIsValid(isEmailValid && isPasswValid);
  }, [isEmailValid, isPasswValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email, passw);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">E-Mail: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
          {!isEmailValid && email !== "" && <p style={redTxt}>Entered email is wrong!</p>}
        </div>

        <div>
          <label htmlFor="passw">Password: </label>
          <input
            type="passw"
            id="passw"
            value={passw}
            onChange={passwChangeHandler}
          />
          {!isPasswValid && passw !== "" && (
            <p style={redTxt}>
              The password you entered doesn't meet the requirements!
            </p>
          )}
        </div>
        <button type="submit" disabled={!formIsValid}>
          Registration
        </button>
      </form>
    </div>
  );
};

  