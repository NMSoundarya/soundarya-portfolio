"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center gap-6 overflow-hidden bg-slate-950 px-8 text-center text-white">
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"
      />

      <div
      className="absolute inset-0 opacity-40"
      style={{
      backgroundImage: "url('/images/circuit-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30"
        >
          <Image src="/profile.jpg" alt="Soundarya Mahadev" width={128} height={128} className="h-full w-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl"
        >
          Soundarya Mahadev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-2xl font-medium text-blue-300"
        >
          Senior Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-lg text-slate-300"
        >
          Embedded &amp; Automotive Software
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-sm text-slate-400"
        >
          C/C++ • AUTOSAR • AI Testing • CI/CD • Functional Safety • Cybersecurity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-4 flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            View My Projects
          </a>
          <a href="/resume.pdf" className="rounded-md border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}