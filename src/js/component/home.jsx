import React, { useState, useRef, useEffect } from "react";

export default function home() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const SecondsCounter = useRef();

  useEffect(() => {
    if (running) {
      SecondsCounter.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(SecondsCounter.current);
  }, [running]);

  return (
    <div className="stopwatch row d-flex justify-content-evenly text-center m-5 container">
      <p className="SecondsCounter">{format(time)}</p>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-outline-light"
          onClick={() => setTime(0)}
        >
          Restart
        </button>
        <button
          type="button"
          class="btn btn-outline-light"
          onClick={() => {
            if (running) clearInterval(SecondsCounter.current);
            setRunning(!running);
          }}
        >
          {running ? "Stop" : "Resume"}
        </button>
      </div>
    </div>
  );
}

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
