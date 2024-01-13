import React, { useState, useRef, useEffect } from "react";

export default function home() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);

  return (
    <div className="stopwatch row d-flex justify-content-evenly text-center m-5 container">
      <p className="timer">{format(time)}</p>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-light" onClick={() => setTime(0)}>
          Restart
        </button>
        <button
          type="button"
          class="btn btn-light"
          onClick={() => {
            if (running) clearInterval(timer.current);
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

// const Home = () => {
//   const Ref = useRef(null);

//   const [timer, setTimer] = useState("00:00:00");

//   const getTimeRemaining = (e) => {
//     const total = Date.parse(e) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//     return {
//       total,
//       hours,
//       minutes,
//       seconds,
//     };
//   };

//   const startTimer = (e) => {
//     let { total, hours, minutes, seconds } = getTimeRemaining(e);
//     if (total >= 0) {
//       setTimer(
//         (hours > 9 ? hours : "0" + hours) +
//           ":" +
//           (minutes > 9 ? minutes : "0" + minutes) +
//           ":" +
//           (seconds > 9 ? seconds : "0" + seconds)
//       );
//     }
//   };

//   const clearTimer = (e) => {
//     setTimer("00:00:30");

//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//       startTimer(e);
//     }, 1000);
//     Ref.current = id;
//   };

//   const getDeadTime = () => {
//     let deadline = new Date();

//     deadline.setSeconds(deadline.getSeconds() + 30);
//     return deadline;
//   };

//   useEffect(() => {
//     clearTimer(getDeadTime());
//   }, []);

//   const onClickReset = () => {
//     clearTimer(getDeadTime());
//   };

//   return (
//     <div className="row d-flex justify-content-evenly">
//       <div>
//         <div className="col text-center m-3">
//           <h2>{timer}</h2>
//           <button onClick={onClickReset}>Reset</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
