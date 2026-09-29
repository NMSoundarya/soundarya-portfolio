export default function Contact() {
  return (
    <section id="contact" className="px-8 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>
        <p className="mb-8 text-gray-600">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadevsoundarya01@gmail.com&su=Portfolio%20Contact" target="_blank" rel="noopener noreferrer" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/soundarya-mahadev-17891625a" target="_blank" rel="noopener noreferrer" className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
            LinkedIn
          </a>
        </div>

        {/* <p className="mt-4 text-sm text-gray-400">mahadevsoundarya01@gmail.com</p> */}
      </div>
    </section>
  );
}