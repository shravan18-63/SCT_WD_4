const LS_KEY = "neotask_state_v1";

export function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load state", e);
    return null;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state", e);
  }
}
