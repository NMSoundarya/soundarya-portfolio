"use client";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const satellites = [
  { top: 20, left: 140 },
  { top: 100, left: 240 },
  { top: 220, left: 200 },
  { top: 220, left: 80 },
  { top: 100, left: 40 },
];

export default function AgentNetwork() {
  return (
    <div className="relative mx-auto h-[260px] w-[280px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 280 260">
        {satellites.map((s, i) => (
          <motion.line key={i} x1="140" y1="130" x2={s.left} y2={s.top} stroke="#3b82f6" strokeWidth="1" animate={{ opacity: [0.15, 0.6, 0.15] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-500 bg-slate-900 text-blue-400">
        <Bot size={22} />
      </div>
      {satellites.map((s, i) => (
        <motion.div key={i} className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-[10px] text-blue-300" style={{ top: s.top, left: s.left }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>
          AI
        </motion.div>
      ))}
    </div>
  );
}