export const calculateScore = (sessions) => {
  let score = 0;

  sessions.forEach((s) => {
    if (s.type === "focus") {
      score += s.duration;
    } else {
      score -= 10;
    }
  });

  return score;
};
