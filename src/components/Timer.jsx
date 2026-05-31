import useTimer from "../hooks/useTimer";

export default function Timer() {
  const { mode, secondsLeft, isRunning, start, pause, reset } = useTimer();

  const format = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="card">
      <div className="timer-mode">
        {mode === "focus" ? "🎯 FOCUS TIME" : "☕ BREAK TIME"}
      </div>

      <div className="timer-display">{format(secondsLeft)}</div>

      <div className="controls">
        {!isRunning ? (
          <button className="btn btn-start" onClick={start}>
            Start
          </button>
        ) : (
          <button className="btn btn-pause" onClick={pause}>
            Pause
          </button>
        )}

        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
