import { useState } from 'react'

const systems = [
  {
    id: 'api-system',
    title: 'API System',
    summary: 'High-throughput, low-latency endpoints designed for growth.',
    details: [
      'Architecture: decoupled API layer with caching and queue-based processing.',
      'Decisions: prioritize predictable responses, horizontal scale, and fast retries.',
      'Trade-offs: lighter consistency for faster user-facing performance.',
    ],
  },
  {
    id: 'ml-pipeline',
    title: 'ML Pipeline',
    summary: 'Production-ready ML inference and data preprocessing flows.',
    details: [
      'Architecture: event-driven ingestion, batch training, and real-time scoring.',
      'Decisions: use reusable pipelines, versioned models, and stable deployments.',
      'Trade-offs: added observability versus faster model iteration.',
    ],
  },
  {
    id: 'scalable-backend',
    title: 'Scalable Backend',
    summary: 'Reliable backend components built for sustained service loads.',
    details: [
      'Architecture: containerized services with health checks and autoscaling.',
      'Decisions: split responsibilities, enforce clean interfaces, and simplify failures.',
      'Trade-offs: more upfront design for long-term operational efficiency.',
    ],
  },
]

function SelectedSystems() {
  const [active, setActive] = useState(systems[0].id)

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Selected Systems
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Systems that show how I think.
        </h2>
        <p className="max-w-2xl text-base text-slate-300">
          Click each card to see the architecture choices, decisions, and trade-offs that make these systems senior-level.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {systems.map((system) => {
          const isOpen = active === system.id
          return (
            <button
              key={system.id}
              type="button"
              onClick={() => setActive(system.id)}
              className={`group flex flex-col gap-4 rounded-3xl border p-5 text-left transition-all ${
                isOpen
                  ? 'border-sky-500/80 bg-slate-900/90 shadow-xl shadow-sky-500/10'
                  : 'border-slate-700 bg-slate-900/70 hover:border-sky-500/50 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{system.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{system.summary}</p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition group-hover:bg-sky-500/20">
                  {isOpen ? '−' : '+'}
                </span>
              </div>

              {isOpen && (
                <div className="space-y-3 rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-300">
                  {system.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SelectedSystems
