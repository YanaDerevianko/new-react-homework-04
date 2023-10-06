import React, { useState, useEffect } from "react";

export const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const timeInNewFormat = currentTime.toLocaleTimeString();

  // console.log(typeof currentTime)

  return (
    <div>
      <h2>My Clock</h2>
      <p>{timeInNewFormat}</p>
    </div>
  );
};
