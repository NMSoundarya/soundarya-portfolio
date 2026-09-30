"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-8 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>
        <p className="mb-8 text-slate-400">Feel free to reach out for opportunities or collaboration.</p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadevsoundarya01@gmail.com&su=Portfolio%20Contact" target="_blank" rel="noopener noreferrer" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Email Me
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/soundarya-mahadev-17891625a" target="_blank" rel="noopener noreferrer" className="rounded-md border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800">
            LinkedIn
          </motion.a>
        </div>

        {/* <p className="mt-4 text-sm text-slate-500">mahadevsoundary01gmail.com</p> */}
      </div>
    </section>
  );
}