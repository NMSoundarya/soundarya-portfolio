export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      <span className="font-bold text-lg">Soundarya Mahadev</span>
      <div className="flex gap-6 text-sm font-medium text-gray-700">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}