const KEY = "focus_sessions";

export const saveSession = (session) => {
  const existing = JSON.parse(localStorage.getItem(KEY)) || [];
  existing.push(session);
  localStorage.setItem(KEY, JSON.stringify(existing));
};

export const getSessions = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};
