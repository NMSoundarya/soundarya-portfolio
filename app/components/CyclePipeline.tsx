"use client";
import { motion } from "framer-motion";
import { GitBranch, Package, CheckCircle2, Rocket, ShieldCheck } from "lucide-react";

const stages = [
  { label: "Code", Icon: GitBranch, top: 20, left: 140 },
  { label: "Build", Icon: Package, top: 103, left: 254 },
  { label: "Test", Icon: CheckCircle2, top: 237, left: 210 },
  { label: "Deploy", Icon: Rocket, top: 237, left: 70 },
  { label: "Validate", Icon: ShieldCheck, top: 103, left: 26 },
];

export default function CyclePipeline() {
  return (
    <div className="relative mx-auto h-[280px] w-[280px]">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "conic-gradient(from 0deg, transparent, #3b82f6, transparent 30%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[10px] rounded-full bg-slate-950" />

      {stages.map((stage, i) => (
        <motion.div key={stage.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1" style={{ top: stage.top, left: stage.left }} animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-blue-400">
            <stage.Icon size={20} />
          </div>
          <span className="text-xs text-slate-400">{stage.label}</span>
        </motion.div>
      ))}
    </div>
  );
}