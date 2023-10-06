import React, { useState, useEffect } from "react";

export const NotificationSystem = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification(null);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [notification]);

  return (
    <div>
      <h2>Notification System</h2>
      <button
        onClick={() => showNotification("This notification will disappear in 3 seconds!")}
      >
        Show notification
      </button>
      {notification && <div>{notification}</div>}
    </div>
  );
};
