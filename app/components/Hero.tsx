export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-8 text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        Soundarya Mahadev
      </h1>

      <p className="text-2xl font-medium text-gray-700">
        Senior Software Engineer
      </p>

      <p className="max-w-2xl text-lg text-gray-500">
        Embedded &amp; Automotive Software
      </p>

      <p className="max-w-2xl text-sm text-gray-500">
        C/C++ • AUTOSAR • AI Testing • CI/CD • Functional Safety • Cybersecurity
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a href="#projects" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          View My Projects
        </a>
        <a href="/resume.pdf" className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
          Download Resume
        </a>
      </div>
    </section>
  );
}