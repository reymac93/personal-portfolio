import { createElement } from 'react'
import { useLanguage } from '../../hooks/useLanguage.js'
import { FaCode, FaCogs, FaServer, FaBrain } from 'react-icons/fa'

const services = (t) => [
  {
    id: 'web-dev',
    icon: FaCode,
    title: t('services_web_dev_title'),
    description: t('services_web_dev_desc'),
  },
  {
    id: 'api',
    icon: FaServer,
    title: t('services_api_title'),
    description: t('services_api_desc'),
  },
  {
    id: 'devops',
    icon: FaCogs,
    title: t('services_devops_title'),
    description: t('services_devops_desc'),
  },
  {
    id: 'ai-ml',
    icon: FaBrain,
    title: t('services_ai_ml_title'),
    description: t('services_ai_ml_desc'),
  },
]

function Services() {
  const { t } = useLanguage()
  const items = services(t)

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('section_services_title')}
        </h2>
        <p className="mt-3 text-base font-medium text-slate-300">
          {t('services_subtitle')}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ id, icon: Icon, title, description }) => (
          <article
            key={id}
            className="group rounded-lg border-2 border-slate-700 bg-slate-800/50 p-7 transition-all hover:border-sky-500/60 hover:bg-slate-800 hover:shadow-lg hover:shadow-sky-500/10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 shadow-sm group-hover:bg-sky-500/30 transition-colors mb-5">
              {createElement(Icon, { className: 'h-7 w-7', 'aria-hidden': true })}
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3">
              {title}
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services

