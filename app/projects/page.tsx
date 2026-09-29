import Link from "next/link";

const projects = [
  { slug: "verisafe", title: "VERISAFE — AI-Assisted CI/CD Test Automation" },
  { slug: "autosar-bsw", title: "AUTOSAR Basic Software CI/CD Demonstrator" },
  { slug: "multiagent", title: "Multiagent Orchestration Platform" },
  { slug: "verisafe-framework", title: "VERISAFE — C/C++ Testing & CI/CD Framework" },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-16">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="rounded-lg border border-gray-200 p-6 font-medium hover:bg-gray-50"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </main>
  );
}