import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timeId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timeId);
    }
  }, [time]);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export default App;
