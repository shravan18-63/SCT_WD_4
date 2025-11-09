// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, parseISO } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Sparkles, Clock, Filter, Search, BadgeCheck, ChevronDown, ListTodo
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";

// ✅ Custom Components
import SparkLogo from "./components/SparkLogo";
import ListCreator from "./components/ListCreator";
import TaskComposer from "./components/TaskComposer";
import TaskRow from "./components/TaskRow";
import BulkComplete from "./components/BulkComplete";
import SuggestionPill from "./components/SuggestionPill";

// ✅ Utilities
import { loadState, saveState } from "./utils/storage";
import { generateAISuggestions } from "./utils/ai";
import { accuracyForDay, weekStats } from "./utils/stats";

// ✅ Your App component (paste your full App() function here)
export default function App() {
   // (paste your App function code here unchanged)
}
