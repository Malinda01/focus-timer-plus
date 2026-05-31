import "./App.css";
import Timer from "./components/Timer";
import ScoreBoard from "./components/ScoreBoard";
import SessionHistory from "./components/SessionHistory";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">⏱ Focus Timer ++</h1>

      <Timer />
      <ScoreBoard />
      <SessionHistory />
    </div>
  );
}
