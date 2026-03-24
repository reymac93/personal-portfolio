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
  SiGo
} from 'react-icons/si'

const tabs = ['frontend', 'backend', 'databases', 'devops']

const techByTab = {
  frontend: [
    { name: 'HTML5 / CSS3', icon: SiHtml5, level: 'Advanced', score: 92 },
    { name: 'JavaScript', icon: SiJavascript, level: 'Expert', score: 95 },
    { name: 'TypeScript', icon: SiTypescript, level: 'Advanced', score: 90 },
    { name: 'React', icon: FaReact, level: 'Expert', score: 95 },
    { name: 'Angular', icon: FaAngular, level: 'Intermediate', score: 80 },
    { name: 'Vue', icon: SiVuedotjs, level: 'Intermediate', score: 78 },
    { name: 'SCSS / SASS', icon: SiSass, level: 'Advanced', score: 88 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', score: 90 },
    { name: 'Material-UI', icon: SiMui, level: 'Advanced', score: 85 },
    { name: 'Bootstrap', icon: SiBootstrap, level: 'Advanced', score: 88 },
  ],
  backend: [
    { name: 'PHP', icon: FaPhp, level: 'Expert', score: 93 },
    { name: 'Python', icon: FaPython, level: 'Advanced', score: 88 },
    { name: 'Node.js', icon: FaNodeJs, level: 'Expert', score: 92 },
    { name: 'Golang', icon: SiGo, level: 'Expert', score: 90 },
  ],
  databases: [
    { name: 'MySQL', icon: SiMysql, level: 'Expert', score: 92 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', score: 88 },
    { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', score: 86 },
    { name: 'Redis', icon: SiRedis, level: 'Intermediate', score: 82 },
  ],
  devops: [
    { name: 'Docker', icon: SiDocker, level: 'Advanced', score: 88 },
    { name: 'AWS', icon: SiAmazonwebservices, level: 'Advanced', score: 86 },
    { name: 'GitHub Actions', icon: SiGithubactions, level: 'Advanced', score: 84 },
    { name: 'Azure', icon: FaCloud, level: 'Intermediate', score: 80 },
  ],
}

const tabIcons = {
  frontend: FaLaptopCode,
  backend: FaServer,
  databases: FaDatabase,
  devops: FaCloud,
}

const allTechIcons = Object.values(techByTab).flat()

function Skills() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('frontend')

  const getTabLabel = (key) => {
    switch (key) {
      case 'frontend':
        return t('skills_tab_frontend')
      case 'backend':
        return t('skills_tab_backend')
      case 'databases':
        return t('skills_tab_databases')
      case 'devops':
        return t('skills_tab_devops')
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
          {techByTab[activeTab].map(({ name, icon: Icon, score }) => (
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
