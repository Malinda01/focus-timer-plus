import { getSessions } from "../utils/storage";

export default function SessionHistory() {
  const sessions = getSessions();

  return (
    <div>
      <h2>📜 Session History</h2>

      {sessions.length === 0 ? (
        <p>No sessions yet.</p>
      ) : (
        sessions
          .slice()
          .reverse()
          .map((s, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>{s.type.toUpperCase()}</strong> — {s.duration / 60} min
              <br />
              <small>{new Date(s.timestamp).toLocaleString()}</small>
            </div>
          ))
      )}
    </div>
  );
}
