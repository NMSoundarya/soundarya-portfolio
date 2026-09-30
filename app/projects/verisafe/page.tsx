"use client";
import Link from "next/link";
import { SiC, SiPython, SiDocker, SiJenkins, SiGithubactions } from "react-icons/si";
import FloatingTechIcons from "../../components/FloatingTechIcons";
import AnimatedCheck from "../../components/AnimatedCheck";
import ProprietaryBadge from "../../components/ProprietaryBadge";
import { FileCode, Search, Wand2, Hammer, FileCheck2 } from "lucide-react";
import FlowDiagram from "../../components/FlowDiagram";

export default function VerisafePage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-slate-950 px-8 py-16 text-white" style={{ backgroundImage: "linear-gradient(rgba(2,6,23,0.8), rgba(2,6,23,0.8)), url('/images/mesh-dark.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <FloatingTechIcons icons={[SiC, SiPython, SiDocker, SiJenkins, SiGithubactions]} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link href="/projects" className="text-sm text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
          <h1 className="mt-4 text-4xl font-bold">VERISAFE</h1>
          <p className="mt-2 text-slate-300"/>
            <div className="mt-8">
              <FlowDiagram stages={[{ label: "Source", Icon: FileCode }, { label: "Analyze", Icon: Search }, { label: "Generate", Icon: Wand2 }, { label: "Compile", Icon: Hammer }, { label: "Validate", Icon: FileCheck2 }]} />
            </div>
            AI-Assisted CI/CD Test Automation for Embedded C · v1.0.0 → v3.1.3  
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-8 py-16">
        <section>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-gray-600">
            Writing and maintaining unit tests for embedded C codebases is
            time-consuming, especially in safety-critical automotive contexts
            where high coverage is required.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Objective</h2>
          <p className="mt-2 text-gray-600">
            Build an AI-assisted engine that analyzes C source code, generates
            unit tests, compiles and runs them, and reports coverage — as part
            of an automated CI/CD pipeline.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-2 text-gray-600">
            VERISAFE analyzes C source code, classifies testability, uses an
            LLM to draft Unity unit tests, then compiles and executes every
            draft with a real toolchain before it&apos;s trusted, reporting
            line and branch coverage. It evolved through five release
            milestones from v1.0.0 to v3.1.3.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Delivery &amp; Automation</h2>
          <ul className="mt-2 flex flex-col gap-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>Packaged as a standalone PyInstaller executable and a portable Docker image published via GitHub Container Registry.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>Parameterized, multi-client Jenkins CI/CD pipeline with a Gherkin/BDD front end and JSON configuration.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>A release watcher polls the registry roughly every five minutes and automatically triggers verification on a new build — deliberately avoiding inbound webhook exposure.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>Root-caused and fixed AI-drafted assertion errors, a stale-manifest reporting bug, and Jenkins/Docker-outside-of-Docker infrastructure issues.</span></li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Architecture</h2>
          <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
{`C Source Code
   ↓
Static Analysis
   ↓
Testability Classification
   ↓
LLM Test Generation
   ↓
Unity Test Code
   ↓
Build / Compile
   ↓
Execute Tests
   ↓
Coverage / MC/DC
   ↓
Safety Validation
   ↓
Report`}
          </pre>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Technologies</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {["C", "Unity", "Gemini API / LLM", "Jenkins", "Docker", "GitHub Actions", "Gherkin/BDD", "PyInstaller"].map((tech) => (
              <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tech}</span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            Results <AnimatedCheck />
          </h2>
          <div className="mt-2 grid grid-cols-3 gap-4">
            {[{ value: "40/40", label: "Tests Passing" }, { value: "99.0%", label: "Line Coverage" }, { value: "97.4%", label: "Branch Coverage" }].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Validated on an NXP S32K144-based smart-HMI automotive ECU codebase, reproduced across executable, Docker, and Jenkins environments.
          </p>
        </section>

        <section className="mt-8 flex flex-wrap items-center gap-3">
          <ProprietaryBadge />
        </section>
      </div>
    </main>
  );
}