"use client";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 px-8 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">Soundarya Mahadev</span>

        <div className="hidden gap-6 text-sm font-medium text-slate-300 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-blue-400">{link.label}</a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-medium text-slate-300 sm:hidden" aria-label="Toggle menu">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 text-sm font-medium text-slate-300 sm:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-blue-400">{link.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}