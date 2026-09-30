"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function ShieldPulse() {
  return (
    <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="absolute rounded-full border border-blue-500/40" style={{ height: 80 + i * 50, width: 80 + i * 50 }} animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
      ))}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-blue-500 bg-slate-900 text-blue-400">
        <ShieldCheck size={32} />
      </div>
    </div>
  );
}