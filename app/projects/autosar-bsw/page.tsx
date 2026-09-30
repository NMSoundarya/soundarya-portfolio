"use client";
import Link from "next/link";
import { SiC, SiGithubactions } from "react-icons/si";
import { AlertTriangle, Cpu, Plug, Settings2, ShieldCheck } from "lucide-react";
import FloatingTechIcons from "../../components/FloatingTechIcons";
import AnimatedCheck from "../../components/AnimatedCheck";
import ProprietaryBadge from "../../components/ProprietaryBadge";
import FlowDiagram from "../../components/FlowDiagram";

export default function AutosarBswPage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-slate-950 px-8 py-16 text-white" style={{ backgroundImage: "linear-gradient(rgba(2,6,23,0.8), rgba(2,6,23,0.8)), url('/images/mesh-dark.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <FloatingTechIcons icons={[SiC, SiGithubactions, Cpu, ShieldCheck]} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link href="/projects" className="text-sm text-blue-400 hover:underline">← Back to Projects</Link>
          <h1 className="mt-4 text-4xl font-bold">AUTOSAR Basic Software CI/CD Demonstrator</h1>
          <div className="mt-8">
            <FlowDiagram stages={[{ label: "DIO", Icon: Cpu }, { label: "Port", Icon: Plug }, { label: "DET", Icon: AlertTriangle }, { label: "ECU Manager", Icon: Settings2 }]} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-8 py-16">
        <section>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-gray-600">AUTOSAR Basic Software modules need thorough automated testing and CI/CD integration to catch regressions early in embedded development.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Objective</h2>
          <p className="mt-2 text-gray-600">Build a demonstration environment for an AUTOSAR-oriented Basic Software stack with automated build, testing, coverage analysis, and CI/CD integration.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-2 text-gray-600">A demonstrator covering DIO, Port, DET, and ECU Manager modules, with automated unit testing, code coverage, AI-assisted software analysis, and automated reporting wired into a CI/CD pipeline.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Technologies</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {["AUTOSAR BSW", "DIO", "Port", "DET", "ECU Manager", "Embedded C", "CI/CD"].map((tech) => (
              <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tech}</span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold">Demonstrated <AnimatedCheck /></h2>
          <p className="mt-2 text-sm text-gray-600">A repeatable embedded software validation workflow: build → test → coverage → report, running automatically on every change.</p>
        </section>

        <section className="mt-8 flex flex-wrap items-center gap-3">
          <ProprietaryBadge />
        </section>
      </div>
    </main>
  );
}