"use client";
import { useEffect, useState } from "react";
import AnimatedNumber from "./AnimatedNumber";

const rotating = ["Embedded Systems", "Automotive Software", "AI-Assisted Testing", "CI/CD Pipelines", "Functional Safety"];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotating.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="bg-slate-900 px-8 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold">About</h2>
        <p className="mb-6 text-sm font-medium text-blue-400">{rotating[index]}</p>
        <p className="text-lg leading-relaxed text-slate-300">
          I&apos;m a Senior Software Engineer at Requisimus in Bengaluru,
          working on embedded and automotive software: C/C++, AUTOSAR,
          AI-assisted test automation, CI/CD, and functional safety
          (ISO 26262). I build tools and pipelines — like VERISAFE — that
          bring AI into safety-critical testing workflows without cutting
          corners on rigor. Before Requisimus, I worked at Stratacache and
          Virtusa, and I hold a B.E. in Electrical, Electronics and
          Communications Engineering.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: 3, suffix: "+", label: "Years Experience" },
            { value: 4, suffix: "", label: "Projects Shipped" },
            { value: 99, suffix: "%", label: "Peak Test Coverage" },
            { value: 3, suffix: "", label: "Companies" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-400">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}