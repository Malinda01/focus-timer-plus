import useTimer from "../hooks/useTimer";

export default function Timer() {
  const { mode, secondsLeft, isRunning, start, pause, reset } = useTimer();

  const format = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{mode.toUpperCase()}</h2>

      <h1 style={{ fontSize: "60px" }}>{format(secondsLeft)}</h1>

      <div>
        {!isRunning ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
