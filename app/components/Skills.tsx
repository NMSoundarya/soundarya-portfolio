"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";

type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "⌘",
    skills: ["C", "C++", "Python"],
  },
  {
    category: "Embedded & Automotive",
    icon: "⚙",
    skills: ["Embedded Systems", "AUTOSAR", "Functional Safety", "ISO 26262"],
  },
  {
    category: "Testing",
    icon: "✓",
    skills: ["Unit Testing", "Test Automation", "Unity"],
  },
  {
    category: "CI/CD & Tooling",
    icon: "⟲",
    skills: ["Git", "GitHub", "Docker", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Security",
    icon: "◆",
    skills: ["Automotive Cybersecurity", "OT Security"],
  },
];

const skillLogos: Record<string, IconType> = {
  C: SiC,
  "C++": SiCplusplus,
  Python: SiPython,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-950 px-8 py-20 text-white"
      style={{
      backgroundImage: "linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.85)), url('/images/circuit-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
      <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-lg text-blue-400">
                {group.icon}
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {group.category}
              </h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => {
                const Logo = skillLogos[skill];
                return (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                  >
                    {Logo && <Logo className="text-base" />}
                    {skill}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}