import { isToday, isBefore, parseISO, startOfDay } from "date-fns";

export function generateAISuggestions(tasks) {
  const now = new Date();
  const todayTasks = tasks.filter((t) => t.due && isToday(parseISO(t.due)) && !t.completed);
  const overdue = tasks.filter((t) => t.due && isBefore(parseISO(t.due), startOfDay(now)) && !t.completed);
  const high = tasks.filter((t) => t.priority === "high" && !t.completed);

  const suggestions = [];

  if (overdue.length) {
    suggestions.push({
      type: "warning",
      title: `You have ${overdue.length} overdue task(s)`,
      tip: "Reschedule them today or tomorrow. Start with the smallest overdue task to regain flow.",
    });
  }

  if (todayTasks.length > 4) {
    suggestions.push({
      type: "focus",
      title: "Too many tasks for today",
      tip: "Pick a Top 3. Defer or delegate the rest.",
    });
  }

  if (high.length) {
    const soonestHigh = [...high].sort((a, b) => new Date(a.due) - new Date(b.due))[0];
    suggestions.push({
      type: "priority",
      title: `Next Best Action: ${soonestHigh.title}`,
      tip: "Do a 25-minute focus sprint on this high-impact task.",
    });
  }

  if (!suggestions.length) {
    suggestions.push({
      type: "ok",
      title: "You're on track",
      tip: "Keep momentum with the 2-minute rule: if it takes <2 minutes, do it now.",
    });
  }

  return suggestions;
}
