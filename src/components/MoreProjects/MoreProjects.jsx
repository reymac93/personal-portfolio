const moreProjects = [
  {
    id: 1,
    title: 'Real-Time Analytics Dashboard',
    stack: 'Node.js · WebSocket · MongoDB',
    github: '#',
  },
  {
    id: 2,
    title: 'Customer Data Platform',
    stack: 'Python · FastAPI · PostgreSQL',
    github: '#',
  },
  {
    id: 3,
    title: 'Notification Delivery Engine',
    stack: 'Node.js · Redis · Docker',
    github: '#',
  },
  {
    id: 4,
    title: 'Performance Monitoring Stack',
    stack: 'AWS · Grafana · CI/CD',
    github: '#',
  },
]

function MoreProjects() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          More Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Additional systems and delivery work.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {moreProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl border border-slate-700 bg-slate-900/75 p-5 transition hover:border-sky-500/60 hover:bg-slate-800"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.stack}</p>
              </div>
              <a
                href={project.github}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-sky-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default MoreProjects
