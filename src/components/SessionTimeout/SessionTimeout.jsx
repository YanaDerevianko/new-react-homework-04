import React, { useState, useEffect } from "react";

export const SessionTimeout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    let timer;
    if (isLoggedIn) {
       timer = setTimeout(() => {
        handleLogout();
        alert("You have been automatically logged out due to session termination");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>You are logged in</h2>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <h2>You are logged out</h2>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
};