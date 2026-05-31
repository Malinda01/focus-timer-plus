import { getSessions } from "../utils/storage";

export default function SessionHistory() {
  const sessions = getSessions();

  return (
    <div className="card">
      <h2>📜 Session History</h2>

      {sessions.length === 0 ? (
        <p>No sessions yet.</p>
      ) : (
        sessions
          .slice()
          .reverse()
          .map((session, index) => (
            <div className="history-item" key={index}>
              <div className="history-type">{session.type.toUpperCase()}</div>

              <div>Duration: {session.duration / 60} min</div>

              <div className="history-time">
                {new Date(session.timestamp).toLocaleString()}
              </div>
            </div>
          ))
      )}
    </div>
  );
}
