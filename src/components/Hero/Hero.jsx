import { useLanguage } from '../../hooks/useLanguage.js'

function Hero() {
  const { t } = useLanguage()

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          {t('hero_intro')}
        </p>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
          {t('hero_headline')}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {t('hero_subheadline')}
        </p>
        <p className="text-sm text-slate-400">{t('hero_small_line')}</p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            {t('hero_cta_projects')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-white"
          >
            {t('hero_cta_contact')}
          </a>
        </div>
      </div>

      <div className="relative hidden overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-sky-500/10 lg:block">
        <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="relative rounded-[2rem] border border-slate-700 bg-slate-950/90 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">live system</p>
              <p className="mt-2 text-base font-semibold text-white">Production architecture</p>
            </div>
            <span className="inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400" />
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>service.js</span>
              <span>Node.js</span>
            </div>
            <div className="space-y-2 text-sm font-medium leading-7 text-slate-300">
              <p className="text-sky-300">async function processJob() {'{'}</p>
              <p className="pl-4">const task = await queue.getNext()</p>
              <p className="pl-4">await worker.run(task)</p>
              <p className="pl-4">task.complete()</p>
              <p>{'}'}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Latency</p>
              <p className="mt-3 text-2xl font-semibold text-white">120ms</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Throughput</p>
              <p className="mt-3 text-2xl font-semibold text-white">12k req/min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

