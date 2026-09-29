const focusAreas = [
  "Embedded Software",
  "Automotive",
  "AI-Assisted Testing",
  "CI/CD",
  "AUTOSAR",
  "Functional Safety",
  "Cybersecurity",
];

export default function TechnicalFocus() {
  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Technical Focus
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {focusAreas.map((area) => (
          <div
            key={area}
            className="rounded-lg border border-gray-200 p-4 text-center text-sm font-medium text-gray-700 shadow-sm hover:shadow-md"
          >
            {area}
          </div>
        ))}
      </div>
    </section>
  );
}