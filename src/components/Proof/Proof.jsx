const proofItems = [
  {
    id: 1,
    title: 'Built systems handling 100k+ users',
    description: 'Delivered reliable backends for high-traffic applications and production workloads.',
  },
  {
    id: 2,
    title: 'Improved performance by 40%',
    description: 'Optimized APIs, caching, and database queries for faster, more efficient systems.',
  },
  {
    id: 3,
    title: 'Deployed production-ready ML pipelines',
    description: 'Built ML workflows with monitoring, versioning, and stable deployment patterns.',
  },
]

function Proof() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Credibility
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Proof that systems work in production.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {proofItems.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-slate-700 bg-slate-900/75 p-6 transition hover:border-sky-500/60 hover:bg-slate-800"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Proof
