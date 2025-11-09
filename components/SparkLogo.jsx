import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SparkLogo() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30"
      >
        <Sparkles className="w-5 h-5"/>
      </motion.div>
      <div>
        <div className="font-bold tracking-tight">NeoTask</div>
        <div className="text-[10px] uppercase opacity-60">AI To-Do</div>
      </div>
    </div>
  );
}
