import { useState } from "react";
import "./App.css";

function App() {
  const [sec, setSec] = useState(0);
  const [minute, setMinute] = useState(0);
  const [track, setTrack] = useState(null);

  const startTime = () => {
    if (track !== null) return;
    const td = setInterval(() => {
      setSec((sec) => {
        if (sec > 59) {
          setMinute((minute) => minute + 1);
          return 0;
        } else {
          return sec + 1;
        }
      });
    }, 1000);
    setTrack(td);
  };
  const stopTime = () => {
    if (track === null) return;
    clearInterval(track);
    setTrack(null);
  };
  const resetTime = () => {
    setSec(0)
    setMinute(0)
    setTrack(null)

  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <h1>
          {minute < 10 ? `0${minute}` : minute}:{sec < 10 ? `0${sec}` : sec}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-3">
          <button onClick={startTime}>start</button>
          <button onClick={stopTime}>stop</button>
          <button onClick={resetTime}>reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
