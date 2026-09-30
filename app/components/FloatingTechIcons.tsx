"use client";
import { motion } from "framer-motion";
import { ComponentType } from "react";

type IconComp = ComponentType<{ className?: string; size?: number }>;

const positions = [
  { top: "10%", left: "8%" },
  { top: "20%", left: "85%" },
  { top: "65%", left: "5%" },
  { top: "75%", left: "90%" },
  { top: "45%", left: "50%" },
  { top: "15%", left: "45%" },
];

export default function FloatingTechIcons({ icons }: { icons: IconComp[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map((Icon, i) => {
        const pos = positions[i % positions.length];
        return (
          <motion.div key={i} className="absolute text-slate-700/50" style={{ top: pos.top, left: pos.left, fontSize: 40 + (i % 3) * 10 }} animate={{ y: [0, -18, 0], rotate: [0, 6, -6, 0] }} transition={{ duration: 8 + (i % 4) * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}>
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}