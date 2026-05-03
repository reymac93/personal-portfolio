import { FaServer, FaBrain, FaCloud } from 'react-icons/fa'
import { useLanguage } from '../../hooks/useLanguage.js'

const skillGroups = [
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    skills: ['Node.js', 'FastAPI', 'Django'],
    description:
      'Designing APIs and backend services for stability, low latency, and efficient scaling.',
    icon: FaServer,
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    skills: ['TensorFlow', 'PyTorch', 'NLP / Data Pipelines'],
    description:
      'Building production-ready machine learning workflows and inference pipelines.',
    icon: FaBrain,
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD'],
    description:
      'Deploying and maintaining systems with automation, monitoring, and reliable deployment flows.',
    icon: FaCloud,
  },
]

function Skills() {
  const { t } = useLanguage()

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('section_skills_title')}
        </h2>
        <p className="mt-3 text-base font-medium text-slate-300">
          {t('skills_subtitle')}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <article
              key={group.id}
              className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/10 transition hover:border-sky-500/60 hover:bg-slate-800"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{group.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
