export default function Resume() {
  return (
    <section id="resume" className="bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Resume</h2>
        <p className="mb-6 text-gray-600">
          Download my full resume for a complete overview of my experience,
          skills, and projects.
        </p>
        <a href="/resume.pdf" download className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}