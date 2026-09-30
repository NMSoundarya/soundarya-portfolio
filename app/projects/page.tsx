"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiC, SiCplusplus, SiPython, SiDocker, SiJenkins, SiGithubactions, SiReact, SiFastapi } from "react-icons/si";
import FloatingTechIcons from "../components/FloatingTechIcons";
import AnimatedCheck from "../components/AnimatedCheck";

type Project = {
  slug: string;
  title: string;
  blurb: string;
  icons: typeof SiC[];
};

const projects: Project[] = [
  { slug: "verisafe", title: "VERISAFE — AI-Assisted CI/CD Test Automation", blurb: "40/40 tests passing, 99.0% line coverage, validated on an automotive ECU.", icons: [SiC, SiPython, SiDocker, SiJenkins] },
  { slug: "autosar-bsw", title: "AUTOSAR Basic Software CI/CD Demonstrator", blurb: "DIO, Port, DET, ECU Manager with automated build, test, and coverage.", icons: [SiC, SiGithubactions] },
  { slug: "multiagent", title: "Multiagent Orchestration Platform", blurb: "418 backend + 95 frontend tests across a FastAPI + React platform.", icons: [SiFastapi, SiReact, SiDocker] },
  { slug: "verisafe-framework", title: "VERISAFE — C/C++ Testing & CI/CD Framework", blurb: "ASIL-based and MC/DC-oriented coverage validation for safety-critical code.", icons: [SiC, SiCplusplus] },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden px-8 py-16" style={{ backgroundImage: "linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.85)), url('/images/mesh-dark.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <FloatingTechIcons icons={[SiC, SiCplusplus, SiPython, SiDocker, SiJenkins, SiGithubactions]} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-blue-400 hover:underline">← Back to Home</Link>
          <h1 className="mt-4 text-4xl font-bold">Projects</h1>
          <p className="mt-2 text-slate-400">Embedded, automotive, and AI-assisted engineering work.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-8 py-16">
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-white">{project.title}</h2>
                    <p className="mt-1 text-sm text-slate-400">{project.blurb}</p>
                  </div>
                  <AnimatedCheck />
                </div>
                <div className="mt-4 flex gap-3 text-xl text-slate-500">
                  {project.icons.map((Icon, i) => (<Icon key={i} />))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}