import React, { useState, useEffect } from "react";

export const AuthenticationComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogOut = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLogin(true);
      console.log('U are loged in')
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div>
      {isLogin ? (
        <>
          <h2>Wellcome to our services!</h2>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <h2>Home page</h2>
          <button onClick={handleLogin}>Log in</button>
        </>
      )}
    </div>
  );
};
