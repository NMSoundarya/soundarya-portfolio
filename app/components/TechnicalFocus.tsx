"use client";
import { motion } from "framer-motion";
import { Cpu, Car, Wand2, GitBranch, Settings2, ShieldCheck, Lock } from "lucide-react";

const focusAreas = [
  { label: "Embedded Software", Icon: Cpu },
  { label: "Automotive", Icon: Car },
  { label: "AI-Assisted Testing", Icon: Wand2 },
  { label: "CI/CD", Icon: GitBranch },
  { label: "AUTOSAR", Icon: Settings2 },
  { label: "Functional Safety", Icon: ShieldCheck },
  { label: "Cybersecurity", Icon: Lock },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function TechnicalFocus() {
  return (
    <section className="bg-slate-950 px-8 py-20 text-white">
      <h2 className="mb-10 text-center text-3xl font-bold">Technical Focus</h2>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {focusAreas.map((area) => (
          <motion.div key={area.label} variants={item} whileHover={{ y: -4, scale: 1.03 }} className="flex flex-col items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-center transition hover:border-blue-500/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <area.Icon size={20} />
            </div>
            <span className="text-sm font-medium text-slate-200">{area.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}