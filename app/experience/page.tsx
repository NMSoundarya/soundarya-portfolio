import Link from "next/link";

type Job = {
  title: string;
  company: string;
  period: string;
  location: string;
};

const jobs: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "Requisimus",
    period: "March 2026 — Present",
    location: "Bengaluru",
  },
  {
    title: "Content Promotion Specialist / Software Engineer",
    company: "Stratacache",
    period: "Dec 2023 — Mar 2026",
    location: "",
  },
  {
    title: "Associate Software Engineer",
    company: "Virtusa",
    period: "Feb 2022 — Dec 2022",
    location: "",
  },
];

export default function ExperiencePage() {
  return (
    <main className="px-8 py-16"
      style={{
        backgroundImage: "url('/images/journey-path.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-3xl">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="mt-4 mb-8 text-4xl font-bold">Experience</h1>

      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="rounded-lg border border-gray-200 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-lg font-semibold">{job.title}</p>
              <p className="text-sm text-gray-400">{job.period}</p>
            </div>
            <p className="mt-1 text-gray-600">
              {job.company}
              {job.location && ` · ${job.location}`}
            </p>
          </div>
        ))}
      </div>
       </div>
    </main>
  );
}