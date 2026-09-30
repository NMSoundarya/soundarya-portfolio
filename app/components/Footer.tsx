export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-8 py-10 text-center text-sm text-slate-500">
      <p>Soundarya Mahadev — Senior Software Engineer</p>
      <p className="mt-2">© {new Date().getFullYear()} Soundarya Mahadev</p>
    </footer>
  );
}