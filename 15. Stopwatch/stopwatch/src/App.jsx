import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTime = () => {
    if (intervalId !== null) return;
    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= 59) {
          setMinute((prevMinute) => prevMinute + 1);
          return 0;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);
    setIntervalId(id);
  };

  const stopTime = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTime = () => {
    stopTime();
    setTime(0);
    setMinute(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>
        {minute}:{time < 10 ? `0${time}` : time}
      </h1>
      <br />
      <div className="flex items-center justify-center gap-4">
        <button onClick={startTime} className="px-4 py-2 bg-blue-500 text-white rounded">
          Start
        </button>
        <button onClick={stopTime} className="px-4 py-2 bg-red-500 text-white rounded">
          Stop
        </button>
        <button onClick={resetTime} className="px-4 py-2 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;