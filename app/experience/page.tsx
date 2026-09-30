"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import CyclePipeline from "../components/CyclePipeline";
type Job = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: "Requisimus",
    title: "Senior Software Engineer",
    period: "March 2026 — Present",
    location: "Bengaluru",
    bullets: [
      "Develop embedded and automotive software using C/C++ and related engineering tools.",
      "Develop automated testing approaches covering unit testing, test execution, code coverage, and continuous testing.",
      "Develop AI-assisted solutions for source-code analysis and automated unit-test generation.",
      "Build reusable frameworks that analyze source code, generate tests, build software, execute test suites, and collect coverage and validation results.",
      "Integrate automated build and testing workflows into CI/CD pipelines using Git-based development practices.",
      "Work with AUTOSAR Basic Software concepts and embedded software validation; apply software-quality and functional-safety concepts aligned with ISO 26262 and ASIL-oriented validation.",
      "Develop technical proof-of-concepts and engineering automation solutions across embedded software, AI-assisted testing, and CI/CD.",
    ],
  },
  {
    company: "Stratacache",
    title: "Content Promotion Specialist / Software Engineer",
    period: "December 2023 — March 2026",
    location: "Bengaluru",
    bullets: [
      "Worked on software development, application maintenance, debugging, testing, validation, and delivery.",
      "Developed and maintained software components based on project requirements and collaborated with cross-functional teams.",
      "Worked with software development tools and version-control practices throughout the development lifecycle.",
      "Supported content-promotion activities using CMS tools and worked on promotional initiatives for multiple brands.",
    ],
  },
  {
    company: "Virtusa",
    title: "Associate Software Engineer",
    period: "February 2022 — December 2022",
    location: "Bengaluru",
    bullets: [
      "Supported application development, testing, debugging, software maintenance, defect analysis, and issue resolution.",
      "Developed and maintained software components based on functional requirements and collaborated with team members throughout the software lifecycle.",
      "Followed structured development, version-control, and testing practices.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-slate-950 px-8 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-blue-400 hover:underline">
          ← Back to Home
        </Link>
        <h1 className="mt-4 mb-2 text-4xl font-bold">Experience</h1>
        <p className="mb-12 text-slate-400">
          4 years across embedded/automotive software, testing automation, and full-stack delivery.
        </p>
          <div className="mb-16 flex flex-col items-center gap-3">
        <CyclePipeline />
        <p className="text-sm text-slate-500">The workflow behind every role below</p>
      </div>
        <div className="relative">
          <div className="absolute left-[7px] top-2 h-full w-px bg-slate-800" />
          <motion.div
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-blue-500 to-purple-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-14">
            {jobs.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-blue-400 bg-slate-950" />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <span className="text-sm text-slate-500">{job.period}</span>
                </div>
                <p className="mb-4 text-blue-300">
                  {job.company} · {job.location}
                </p>

                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1 text-blue-400">▸</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}