
# 🧠 NeoTask – AI-Powered To-Do List Web App  
### 🚀 SkillCraft Technology Internship – Task 4

> **Task Objective:**  
> Develop a basic To-Do List App that enables users to add, maintain, and organize tasks — allowing them to mark completed ones, edit them, and set date & time for tasks.



---

## ✨ Features

✅ **Add / Edit / Delete Tasks** — Manage your daily tasks efficiently.  
✅ **Multiple Lists** — Organize tasks under custom lists (e.g., Work, Study, Personal).  
✅ **Mark as Completed** — Track your progress easily.  
✅ **Set Due Dates & Time** — Never miss a deadline.  
⚡ **AI-Powered Suggestions** — Recommends what to focus on next and how to plan your day.  
📊 **Daily Accuracy Tracker** — Calculates task completion accuracy for the day.  
📅 **Weekly Stats Chart** — Visual overview of your weekly performance.  
🎨 **Modern Animated UI** — Built using React.js, Tailwind CSS, and Framer Motion for smooth UX.  
💾 **Persistent Storage** — Uses LocalStorage to save tasks permanently.  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Component-based frontend framework |
| **Tailwind CSS** | Utility-first modern styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon components |
| **Recharts** | Visualization for weekly analytics |
| **date-fns** | Date & time formatting |
| **UUID** | Unique ID generation |

---

## 🧩 Project Structure

```

src/
├── App.jsx
├── components/
│   ├── SparkLogo.jsx
│   ├── ListCreator.jsx
│   ├── TaskComposer.jsx
│   ├── TaskRow.jsx
│   ├── BulkComplete.jsx
│   ├── SuggestionPill.jsx
├── utils/
│   ├── storage.js
│   ├── ai.js
│   ├── stats.js



## 🧠 AI Logic Overview

The built-in AI suggestions analyze:

* Overdue tasks 🔴
* Today's pending workload 📅
* High-priority items ⚡

Based on these, it provides dynamic advice like:

* *“You have 3 overdue tasks — reschedule or start the smallest one first.”*
* *“Too many tasks for today — focus on your top 3.”*
* *“Next best action: Begin with your most impactful task.”*

---

## 📊 Accuracy Calculation

The **Daily Accuracy Rate** =
`(Completed tasks today / Total tasks due today) × 100`

It helps users measure their daily productivity score.

