import { getSessions } from "../utils/storage";
import { calculateScore } from "../utils/scoreCalculator";

export default function ScoreBoard() {
  const sessions = getSessions();
  const score = calculateScore(sessions);

  return (
    <div className="card score-card">
      <h2>📊 Today's Focus Score</h2>
      <div className="score-number">{score}</div>
      <p>Total Sessions: {sessions.length}</p>
    </div>
  );
}
