"use client";
import { motion } from "framer-motion";

export default function AnimatedCheck() {
  return (
    <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} className="inline-block">
      <motion.circle cx="12" cy="12" r="10" stroke="#34d399" strokeWidth="2" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }} transition={{ duration: 0.5 }} />
      <motion.path d="M7 12.5l3 3 7-7" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }} transition={{ duration: 0.4, delay: 0.4 }} />
    </motion.svg>
  );
}