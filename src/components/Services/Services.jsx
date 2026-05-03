import { useLanguage } from '../../hooks/useLanguage.js'
import { FaCode, FaServer, FaCogs, FaBrain } from 'react-icons/fa'

function Services() {
  const { t } = useLanguage()

  const items = [
    {
      id: 'design-performance',
      icon: FaCode,
      title: t('services_web_dev_title'),
      description: t('services_web_dev_desc'),
    },
    {
      id: 'scalable-architecture',
      icon: FaServer,
      title: t('services_api_title'),
      description: t('services_api_desc'),
    },
    {
      id: 'reliability',
      icon: FaCogs,
      title: t('services_devops_title'),
      description: t('services_devops_desc'),
    },
    {
      id: 'ml-production',
      icon: FaBrain,
      title: t('services_ai_ml_title'),
      description: t('services_ai_ml_desc'),
    },
  ]

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('section_services_title')}
        </h2>
        <p className="mt-3 max-w-3xl text-base text-slate-300">
          {t('services_subtitle')}
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_minmax(320px,420px)]">
        <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.id}
                  className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/10 transition hover:border-sky-500/60 hover:bg-slate-800"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              )
            })}
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Architecture</p>
              <h3 className="mt-2 text-xl font-semibold text-white">System flow overview</h3>
            </div>
            <span className="inline-flex h-3.5 w-3.5 rounded-full bg-sky-400" />
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm font-semibold text-white">API Layer</p>
                <p className="mt-2 text-sm text-slate-400">Fast, cache-friendly endpoints designed for low latency.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm font-semibold text-white">Processing</p>
                <p className="mt-2 text-sm text-slate-400">Worker queues and parallel pipelines for reliable background tasks.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm font-semibold text-white">ML / Analytics</p>
                <p className="mt-2 text-sm text-slate-400">Stable model inference and event-driven data processing.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-900/80 p-5 text-sm text-slate-300">
            <p className="font-semibold text-white">Why this matters</p>
            <p className="mt-3">
              A clear architecture keeps systems easier to maintain, faster to iterate, and more resilient in production.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

