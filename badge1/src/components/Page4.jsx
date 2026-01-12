import React, { useEffect, useState } from "react";
import "../css/Page4.css"
import Snowfall from "react-snowfall";

function Page4() {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((prev) => (forward ? prev + 1 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [forward, running]);

  return (
    <div className="timer-container">
        <Snowfall color="#0D98BA "/>
      <h1 className="timer-title">⏱ Timer</h1>

      <div className="timer-display">{count}</div>

      <div className="btn-group">
        <button
          className="btn btn-forward"
          onClick={() => {
            setForward(true);
            setRunning(true);
          }}
        >
          ▶ Forward
        </button>

        <button className="btn btn-stop" onClick={() => setRunning(false)}>
          ⏸ Stop
        </button>

        <button
          className="btn btn-backward"
          onClick={() => {
            setForward(false);
            setRunning(true);
          }}
        >
          ◀ Backward
        </button>
      </div>
    </div>
  );
}

export default Page4;
