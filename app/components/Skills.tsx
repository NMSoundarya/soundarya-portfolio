type SkillGroup = {
  category: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    category: "Embedded & Automotive",
    skills: ["Embedded Systems", "AUTOSAR", "Functional Safety", "ISO 26262"],
  },
  {
    category: "Testing",
    skills: ["Unit Testing", "Test Automation", "Unity"],
  },
  {
    category: "CI/CD & Tooling",
    skills: ["Git", "GitHub", "Docker", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Security",
    skills: ["Automotive Cybersecurity", "OT Security"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Skills</h2>

      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}