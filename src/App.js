import "./App.css";
import React, { useState } from "react";
import { AuthenticationComponent } from "./components/Authentication/AuthenticationComponent";
import { ClockComponent } from "./components/ClockComponent/ClockComponent";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { NotificationSystem } from "./components/NotificationSystem/NotificationSystem";
import { SessionTimeout } from "./components/SessionTimeout/SessionTimeout";
import { MyNotes } from "./components/MyNotes/MyNotes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <AuthenticationComponent />
      <ClockComponent />
      {!isLoggedIn && <RegistrationForm onLogin={loginHandler} />}
      {isLoggedIn && <p> Welcome to our family!</p>}

      <NotificationSystem />

      <SessionTimeout />

      <MyNotes />
    </div>
  );
}

export default App;
