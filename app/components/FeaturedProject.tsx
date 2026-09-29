"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  decimals: number;
};

const stats: Stat[] = [
  { label: "Tests Passing", value: 40, suffix: "/40", decimals: 0 },
  { label: "Line Coverage", value: 99.0, suffix: "%", decimals: 1 },
  { label: "Branch Coverage", value: 97.4, suffix: "%", decimals: 1 },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Featured Project
        </p>
        <Link href="/projects/verisafe" className="hover:underline">
          <h2 className="mb-4 text-3xl font-bold">VERISAFE</h2>
        </Link>
        <p className="mb-8 max-w-2xl text-gray-600">
          AI-assisted unit-test generation and CI/CD verification engine for
          embedded C codebases, validated on an NXP S32K144-based automotive
          ECU codebase.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md"
            >
              <p className="text-3xl font-bold text-blue-600">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}