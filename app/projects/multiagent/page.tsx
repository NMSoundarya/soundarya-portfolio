"use client";
import Link from "next/link";
import { SiFastapi, SiReact, SiPostgresql, SiDocker } from "react-icons/si";
import FloatingTechIcons from "../../components/FloatingTechIcons";
import AnimatedCheck from "../../components/AnimatedCheck";
import ProprietaryBadge from "../../components/ProprietaryBadge";
import AgentNetwork from "../../components/AgentNetwork";
export default function MultiagentPage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-slate-950 px-8 py-16 text-white" style={{ backgroundImage: "linear-gradient(rgba(2,6,23,0.8), rgba(2,6,23,0.8)), url('/images/mesh-dark.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <FloatingTechIcons icons={[SiFastapi, SiReact, SiPostgresql, SiDocker]} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link href="/projects" className="text-sm text-blue-400 hover:underline">← Back to Projects</Link>
          <h1 className="mt-4 text-4xl font-bold">Multiagent Orchestration Platform</h1>
          <div className="mt-8">
            <AgentNetwork />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-8 py-16">
        <section>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-gray-600">Building workflows that combine multiple AI agents typically requires custom orchestration code for every new combination of agents.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Objective</h2>
          <p className="mt-2 text-gray-600">Build a platform for creating AI agents and wiring several agents into one workflow by drawing a diagram rather than writing code.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Solution</h2>
          <ul className="mt-2 flex flex-col gap-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>FastAPI + React application backed by PostgreSQL and Qdrant, with six Docker services.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>Agents answer from user documents and run on OpenAI, Anthropic, Google, or a local model — without an API key or data leaving the machine.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">▸</span><span>Workflows are reachable through a browser, REST call, webhook, or Slack mention.</span></li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Technologies</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {["FastAPI", "React", "PostgreSQL", "Qdrant", "Docker", "REST", "Webhooks", "Slack"].map((tech) => (
              <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tech}</span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold">Results <AnimatedCheck /></h2>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {[{ value: "418", label: "Backend Tests" }, { value: "95", label: "Frontend Tests" }].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 flex flex-wrap items-center gap-3">
          <ProprietaryBadge />
        </section>
      </div>
    </main>
  );
}