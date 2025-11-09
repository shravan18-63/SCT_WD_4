import { startOfDay, format, isToday, parseISO } from "date-fns";

export function accuracyForDay(tasks, date = new Date()) {
  const isSameDay = (iso) => isToday(parseISO(iso));
  const todays = tasks.filter((t) => t.due && isSameDay(t.due));
  const done = todays.filter((t) => t.completed);
  return {
    total: todays.length,
    completed: done.length,
    percent: todays.length ? Math.round((done.length / todays.length) * 100) : 0,
  };
}

export function weekStats(tasks) {
  const days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const acc = accuracyForDay(tasks, d);
    return { day: format(d, "EEE"), value: acc.percent };
  });
  return days;
}
