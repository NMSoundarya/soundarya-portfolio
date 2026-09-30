"use client";
import { motion } from "framer-motion";
import { ComponentType } from "react";

type Stage = { label: string; Icon: ComponentType<{ size?: number }> };

export default function FlowDiagram({ stages }: { stages: Stage[] }) {
  const duration = stages.length * 1.3;
  return (
    <div className="relative mx-auto flex max-w-2xl items-center justify-between py-10">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-slate-700" />
      <motion.div className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-400" style={{ boxShadow: "0 0 10px 3px rgba(96,165,250,0.7)" }} animate={{ left: ["0%", "100%"] }} transition={{ duration, repeat: Infinity, ease: "linear" }} />
      {stages.map((stage, i) => (
        <motion.div key={stage.label} className="relative z-10 flex flex-col items-center gap-2 px-1" animate={{ y: [0, -5, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-blue-400">
            <stage.Icon size={18} />
          </div>
          <span className="text-[11px] text-slate-400">{stage.label}</span>
        </motion.div>
      ))}
    </div>
  );
}