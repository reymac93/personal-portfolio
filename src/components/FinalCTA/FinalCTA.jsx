function FinalCTA() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Final Call to Action
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let’s build something impactful.
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            I help teams turn complex technical ideas into reliable systems that scale. Reach out and let’s discuss the next project.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:rey.mac93@outlook.com"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/reymac93"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-full bg-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default FinalCTA
