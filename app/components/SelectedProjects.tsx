"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = { title: string; description: string; tags: string[]; href: string };

const projects: Project[] = [
  { title: "AUTOSAR Basic Software CI/CD Demonstrator", description: "Demonstration environment for an AUTOSAR-oriented Basic Software stack (DIO, Port, DET, ECU Manager) with automated build, testing, coverage analysis, and CI/CD integration.", tags: ["AUTOSAR BSW", "Embedded C", "CI/CD", "Coverage"], href: "/projects/autosar-bsw" },
  { title: "Multiagent Orchestration Platform", description: "A platform for building AI agents and wiring several agents into one workflow by drawing a diagram rather than writing code. 418 backend tests, 95 frontend tests.", tags: ["FastAPI", "React", "PostgreSQL", "Qdrant", "Docker"], href: "/projects/multiagent" },
  { title: "VERISAFE — C/C++ Testing & CI/CD Framework", description: "AI-assisted C/C++ software testing and CI/CD framework with ASIL-based and MC/DC-oriented coverage validation and automated reporting.", tags: ["C/C++", "CI/CD", "ASIL", "MC/DC"], href: "/projects/verisafe-framework" },
];

export default function SelectedProjects() {
  return (
    <section className="bg-slate-950 px-8 py-20 text-white">
      <h2 className="mb-10 text-center text-3xl font-bold">Selected Projects</h2>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.title} href={project.href}>
            <motion.div whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50">
              <h3 className="mb-2 font-semibold text-white">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">{tag}</span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}