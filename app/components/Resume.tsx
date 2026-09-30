"use client";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="bg-slate-900 px-8 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/40 bg-slate-950 text-blue-400">
          <FileText size={28} />
        </motion.div>
        <h2 className="mb-4 text-3xl font-bold">Resume</h2>
        <p className="mb-6 text-slate-400">Download my full resume for a complete overview of my experience, skills, and projects.</p>
        <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          <Download size={16} /> Download Resume (PDF)
        </motion.a>
      </div>
    </section>
  );
}