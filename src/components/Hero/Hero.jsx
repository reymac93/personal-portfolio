import { createElement } from 'react'
import { useLanguage } from '../../hooks/useLanguage.js'
import { FaReact, FaNodeJs, FaVuejs, FaPython, FaDocker, FaPhp } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiAmazonwebservices } from 'react-icons/si'

// Tech-related terms to bold in the summary (longer phrases first for regex)
const TECH_TERMS = [
  'Node.js', 'Express/NestJS', 'FastAPI', 'RESTful', 'GraphQL', 'NoSQL',
  'PostgreSQL', 'MongoDB', 'microservices', 'containerization', 'performance optimization',
  'responsive design', 'React', 'Angular', 'Vue', 'Express', 'NestJS', 'Laravel',
  'JWT', 'OAuth', 'MySQL', 'DevOps', 'CI/CD', 'AWS', 'Azure', 'Docker',
  'JavaScript', 'TypeScript', 'API', 'front-end', 'backend', 'full stack',
]

function boldTechWords(text) {
  const escaped = TECH_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const sorted = escaped.sort((a, b) => b.length - a.length)
  const regex = new RegExp(`(${sorted.join('|')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    TECH_TERMS.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold text-slate-200">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

const heroTechStack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: FaReact },
  { name: 'Vue', icon: FaVuejs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'PHP', icon: FaPhp },
  { name: 'Python', icon: FaPython },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: SiAmazonwebservices },
]

function Hero() {
  const { t } = useLanguage()

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t('hero_name')}
        </h1>
        <p className="text-lg font-medium text-sky-400 sm:text-xl">{t('hero_title')}</p>
        <p className="text-sm text-slate-400">{t('hero_location')}</p>
        {t('hero_about_short')
          .split('\n\n')
          .map((paragraph, idx) => (
            <p
              key={idx}
              className="text-sm text-slate-300 text-justify sm:text-base"
            >
              {boldTechWords(paragraph)}
            </p>
          ))}

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400 sm:text-base"
          >
            {t('hero_cta_view_portfolio')}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-sky-400/10 to-transparent blur-3xl" />
        <div className="relative rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Tech stack
          </p>
          <div className="grid grid-cols-3 gap-4">
            {heroTechStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex flex-col items-center gap-3 rounded-xl border-2 border-slate-700 bg-slate-800/50 px-3 py-5 transition-all hover:border-sky-500/60 hover:bg-slate-800 hover:shadow-lg hover:shadow-sky-500/10"
                title={name}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 group-hover:bg-sky-500/30 transition-colors">
                  {createElement(Icon, { className: 'h-7 w-7', 'aria-hidden': true })}
                </div>
                <span className="text-center text-xs font-semibold text-slate-200">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

