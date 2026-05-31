import { getSessions } from "../utils/storage";
import { calculateScore } from "../utils/scoreCalculator";

export default function ScoreBoard() {
  const sessions = getSessions();
  const score = calculateScore(sessions);

  return (
    <div>
      <h2>📊 Focus Score</h2>
      <h1>{score}</h1>
      <p>Total Sessions: {sessions.length}</p>
    </div>
  );
}
