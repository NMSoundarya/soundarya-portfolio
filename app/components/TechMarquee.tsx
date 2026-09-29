import {
  SiC,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";

const techs = [
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Python", Icon: SiPython },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "GitHub Actions", Icon: SiGithubactions },
];

const tripled = [...techs, ...techs, ...techs];

export default function TechMarquee() {
  return (
    <div className="group relative overflow-hidden border-y border-slate-800 bg-slate-950 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {tripled.map((tech, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap text-slate-400 transition hover:text-blue-400">
            <tech.Icon className="text-2xl" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}