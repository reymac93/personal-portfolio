import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage.js'
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaReact,
  FaAngular,
  FaPhp,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
  SiFastapi,
  SiRedis,
  SiVuedotjs,
  SiHtml5,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
  SiGo,
  SiVercel,
  SiNetlify
} from 'react-icons/si'

const tabs = ['all', 'frontend', 'backend-apis', 'databases', 'system-tools', 'cloud-deployment']

const techByTab = {
  frontend: [
    { name: 'HTML5', icon: SiHtml5, level: 'Advanced', score: 90 },
    { name: 'CSS3', icon: SiSass, level: 'Advanced', score: 88 },
    { name: 'JavaScript', icon: SiJavascript, level: 'Expert', score: 95 },
    { name: 'React', icon: FaReact, level: 'Expert', score: 95 },
  ],
  'backend-apis': [
    { name: 'Node.js', icon: FaNodeJs, level: 'Expert', score: 92 },
    { name: 'Python', icon: FaPython, level: 'Advanced', score: 88 },
    { name: 'FastAPI', icon: SiFastapi, level: 'Advanced', score: 85 },
    { name: 'Django', icon: SiLaravel, level: 'Intermediate', score: 80 },
  ],
  databases: [
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', score: 88 },
    { name: 'MySQL', icon: SiMysql, level: 'Expert', score: 92 },
    { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', score: 86 },
  ],
  'system-tools': [
    { name: 'Redis', icon: SiRedis, level: 'Intermediate', score: 82 },
    { name: 'Docker', icon: SiDocker, level: 'Advanced', score: 88 },
    { name: 'Git', icon: FaLaptopCode, level: 'Expert', score: 95 },
    { name: 'CI/CD', icon: SiGithubactions, level: 'Advanced', score: 84 },
  ],
  'cloud-deployment': [
    { name: 'AWS', icon: SiAmazonwebservices, level: 'Advanced', score: 86 },
    { name: 'Azure', icon: FaCloud, level: 'Intermediate', score: 80 },
    { name: 'Netlify', icon: SiNetlify, level: 'Intermediate', score: 78 },
    { name: 'Vercel', icon: SiVercel, level: 'Intermediate', score: 78 },
  ],
}

const tabIcons = {
  all: FaLaptopCode,
  frontend: FaLaptopCode,
  'backend-apis': FaServer,
  databases: FaDatabase,
  'system-tools': FaLaptopCode,
  'cloud-deployment': FaCloud,
}

const allTechIcons = Object.values(techByTab).flat()
const techByTabWithAll = { all: allTechIcons, ...techByTab }

function Skills() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('frontend')

  const getTabLabel = (key) => {
    switch (key) {
      case 'all':
        return t('skills_tab_all')
      case 'frontend':
        return t('skills_tab_frontend')
      case 'backend-apis':
        return t('skills_tab_backend')
      case 'databases':
        return t('skills_tab_databases')
      case 'system-tools':
        return t('skills_tab_system_tools')
      case 'cloud-deployment':
        return t('skills_tab_cloud_deployment')
      default:
        return key
    }
  }

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('section_skills_title')}
        </h2>
        <p className="mt-3 text-base font-medium text-slate-300">
          {t('skills_subtitle')}
        </p>
      </div>

      {/* Category tabs */}
      <nav
        className="flex flex-wrap gap-2 border-b-2 border-slate-700"
        role="tablist"
        aria-label="Skill categories"
      >
        {tabs.map((tabKey) => {
          const Icon = tabIcons[tabKey]
          const isActive = activeTab === tabKey
          return (
            <button
              key={tabKey}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tabKey}`}
              id={`tab-${tabKey}`}
              onClick={() => setActiveTab(tabKey)}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-all ${
                isActive
                  ? 'border-sky-500 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {Icon && <Icon className="h-5 w-5 shrink-0" aria-hidden />}
              <span>{getTabLabel(tabKey)}</span>
            </button>
          )
        })}
      </nav>

      {/* Skills grid */}
      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`} 
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          {techByTabWithAll[activeTab].map(({ name, icon: Icon, score }) => (
            <div
              key={name}
              className="group flex cursor-default flex-col items-center gap-3 rounded-xl border-2 border-slate-700 bg-slate-800/50 px-4 py-5 transition-all hover:border-sky-500/60 hover:bg-slate-800 hover:shadow-lg hover:shadow-sky-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
              tabIndex={0}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 shadow-sm group-hover:bg-sky-500/30 transition-colors">
                {Icon ? (
                  <Icon className="h-6 w-6" aria-hidden />
                ) : (
                  <span className="text-sm font-bold" aria-hidden>
                    {name.charAt(0)}
                  </span>
                )}
              </div>
              <p className="truncate text-center text-sm font-semibold text-white">
                {name}
              </p>
              {typeof score === 'number' && (
                <div className="w-full">
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700"
                    role="progressbar"
                    aria-valuenow={score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${name}: ${score}%`}
                  >
                    <div
                      className="h-full min-w-0 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 transition-[width] duration-700 ease-out"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
