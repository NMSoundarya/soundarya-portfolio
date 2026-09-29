import Link from "next/link";

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: "Tests Passing", value: "40/40" },
  { label: "Line Coverage", value: "99.0%" },
  { label: "Branch Coverage", value: "97.4%" },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Featured Project
        </p>
        <Link href="/projects/verisafe" className="hover:underline">
          <h2 className="mb-4 text-3xl font-bold">VERISAFE</h2>
        </Link>
        <p className="mb-8 max-w-2xl text-gray-600">
          AI-assisted unit-test generation and CI/CD verification engine for
          embedded C codebases, validated on an NXP S32K144-based automotive
          ECU codebase.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center"
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}