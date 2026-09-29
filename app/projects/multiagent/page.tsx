import Link from "next/link";

export default function MultiagentPage() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-16">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="mt-4 text-4xl font-bold">
        Multiagent Orchestration Platform
      </h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-2 text-gray-600">
          Building workflows that combine multiple AI agents typically
          requires custom orchestration code for every new combination of
          agents.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Objective</h2>
        <p className="mt-2 text-gray-600">
          Build a platform for creating AI agents and wiring several agents
          into one workflow by drawing a diagram rather than writing code.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Solution</h2>
        <p className="mt-2 text-gray-600">
          A visual orchestration platform supporting OpenAI, Anthropic,
          Google, and local models, with REST and webhook integration and
          Slack support, backed by PostgreSQL and Qdrant.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Technologies</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            "FastAPI",
            "React",
            "PostgreSQL",
            "Qdrant",
            "Docker",
            "REST",
            "Webhooks",
            "Slack",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Results</h2>
        <div className="mt-2 grid grid-cols-2 gap-4">
          {[
            { value: "418", label: "Backend Tests" },
            { value: "95", label: "Frontend Tests" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gray-200 p-4 text-center"
            >
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Screenshots</h2>
        <div className="mt-2 flex h-40 items-center justify-center rounded-lg border border-dashed border-gray-300 text-sm text-gray-400">
          Screenshot placeholder — add project images here later
        </div>
      </section>
    </main>
  );
}