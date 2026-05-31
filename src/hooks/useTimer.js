import { useState, useEffect, useRef } from "react";
import { MODES, DEFAULT_CONFIG } from "../utils/timerLogic";
import { saveSession } from "../utils/storage";

export default function useTimer() {
  const [mode, setMode] = useState(MODES.FOCUS);
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_CONFIG.focus);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const switchMode = () => {
    const duration =
      mode === MODES.FOCUS ? DEFAULT_CONFIG.focus : DEFAULT_CONFIG.break;

    // Save completed session BEFORE switching
    saveSession({
      type: mode,
      duration,
      timestamp: new Date().toISOString(),
    });

    const nextMode = mode === MODES.FOCUS ? MODES.BREAK : MODES.FOCUS;

    setMode(nextMode);
    setSecondsLeft(
      nextMode === MODES.FOCUS ? DEFAULT_CONFIG.focus : DEFAULT_CONFIG.break,
    );
  };

  const tick = () => {
    setSecondsLeft((prev) => {
      if (prev <= 1) {
        switchMode();
        return prev;
      }
      return prev - 1;
    });
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(tick, 1000);
    }
  };

  const pause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    pause();
    setSecondsLeft(DEFAULT_CONFIG[mode]);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    mode,
    secondsLeft,
    isRunning,
    start,
    pause,
    reset,
  };
}
