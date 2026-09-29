import Link from "next/link";

export default function VerisafeFrameworkPage() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-16">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="mt-4 text-4xl font-bold">
        VERISAFE — C/C++ Testing &amp; CI/CD Framework
      </h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-2 text-gray-600">
          Safety-critical C/C++ codebases need testing frameworks that go
          beyond basic pass/fail results, validating coverage against
          safety-oriented criteria like ASIL and MC/DC.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Objective</h2>
        <p className="mt-2 text-gray-600">
          Extend AI-assisted C/C++ testing with safety-oriented validation:
          ASIL-based coverage checks, MC/DC-oriented analysis, and automated
          reporting, integrated into CI/CD.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Solution</h2>
        <p className="mt-2 text-gray-600">
          Source-code analysis, AI-assisted unit-test generation, automated
          build and test execution, code coverage, and safety-oriented
          validation, all wired into a CI/CD pipeline with automated
          reporting.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Technologies</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {["C", "C++", "CI/CD", "ASIL", "MC/DC", "Automated Reporting"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {tech}
              </span>
            )
          )}
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