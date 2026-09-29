import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "AUTOSAR Basic Software CI/CD Demonstrator",
    description:
      "Demonstration environment for an AUTOSAR-oriented Basic Software stack (DIO, Port, DET, ECU Manager) with automated build, testing, coverage analysis, and CI/CD integration.",
    tags: ["AUTOSAR BSW", "Embedded C", "CI/CD", "Coverage"],
    href: "/projects/autosar-bsw",
  },
  {
    title: "Multiagent Orchestration Platform",
    description:
      "A platform for building AI agents and wiring several agents into one workflow by drawing a diagram rather than writing code. 418 backend tests, 95 frontend tests.",
    tags: ["FastAPI", "React", "PostgreSQL", "Qdrant", "Docker"],
    href: "/projects/multiagent",
  },
  {
    title: "VERISAFE — C/C++ Testing & CI/CD Framework",
    description:
      "AI-assisted C/C++ software testing and CI/CD framework with ASIL-based and MC/DC-oriented coverage validation and automated reporting.",
    tags: ["C/C++", "CI/CD", "ASIL", "MC/DC"],
    href: "/projects/verisafe-framework",
  },
];

export default function SelectedProjects() {
  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Selected Projects
      </h2>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold">{project.title}</h3>
            <p className="mb-4 flex-1 text-sm text-gray-600">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}