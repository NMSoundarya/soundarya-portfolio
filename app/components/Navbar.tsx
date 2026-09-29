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
    <nav className="border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">Soundarya Mahadev</span>

        <div className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-medium text-gray-700 sm:hidden" aria-label="Toggle menu">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 text-sm font-medium text-gray-700 sm:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}