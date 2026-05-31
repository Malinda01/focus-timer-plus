import Timer from "./components/Timer";
import ScoreBoard from "./components/ScoreBoard";
import SessionHistory from "./components/SessionHistory";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>⏱️ Focus Timer ++</h1>

      <Timer />

      <hr />

      <ScoreBoard />

      <hr />

      <SessionHistory />
    </div>
  );
}
