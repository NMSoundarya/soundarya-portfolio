import Link from "next/link";

export default function VerisafePage() {
  return (
    <main>
      <div
      className="bg-slate-950 px-8 py-16 text-white"
      style={{
      backgroundImage: "linear-gradient(rgba(2,6,23,0.8), rgba(2,6,23,0.8)), url('/images/circuit-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
        <div className="mx-auto max-w-3xl">
          <Link href="/projects" className="text-sm text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
          <h1 className="mt-4 text-4xl font-bold">VERISAFE</h1>
          <p className="mt-2 text-slate-300">
            AI-Assisted CI/CD Test Automation for Embedded C
          </p>
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
            LLM to generate Unity unit tests, then compiles and executes them
            for real, reporting line and branch coverage.
          </p>
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
            {[
              "C",
              "Unity",
              "Gemini API / LLM",
              "Jenkins",
              "Docker",
              "GitHub Actions",
              "Gherkin/BDD",
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
          <div className="mt-2 grid grid-cols-3 gap-4">
            {[
              { value: "40/40", label: "Tests Passing" },
              { value: "99.0%", label: "Line Coverage" },
              { value: "97.4%", label: "Branch Coverage" },
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
          <p className="mt-2 text-sm text-gray-500">
            Validated on an NXP S32K144-based automotive ECU codebase.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Screenshots</h2>
          <div className="mt-2 flex h-40 items-center justify-center rounded-lg border border-dashed border-gray-300 text-sm text-gray-400">
            Screenshot placeholder — add project images here later
          </div>
        </section>
      </div>
    </main>
  );
}
