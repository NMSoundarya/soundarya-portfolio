"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

type Stat = { label: string; value: number; suffix: string; decimals: number };

const stats: Stat[] = [
  { label: "Tests Passing", value: 40, suffix: "/40", decimals: 0 },
  { label: "Line Coverage", value: 99.0, suffix: "%", decimals: 1 },
  { label: "Branch Coverage", value: 97.4, suffix: "%", decimals: 1 },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-slate-900 px-8 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-400">Featured Project</p>
        <Link href="/projects/verisafe" className="hover:underline">
          <h2 className="mb-4 text-3xl font-bold">VERISAFE</h2>
        </Link>
        <p className="mb-8 max-w-2xl text-slate-400">
          AI-assisted unit-test generation and CI/CD verification engine for embedded C codebases, validated on an NXP S32K144-based automotive ECU codebase.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.2 }} className="rounded-lg border border-slate-800 bg-slate-950 p-6 text-center">
              <p className="text-3xl font-bold text-blue-400">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}