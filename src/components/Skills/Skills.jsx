import { FaServer, FaBrain, FaCloud, FaCode, FaDatabase, FaTools } from 'react-icons/fa'
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('section_skills_title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('skills_subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-800 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Technologies
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <FaCode className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                React, Vue.js, TypeScript, Tailwind CSS
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                <FaDatabase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Databases</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                PostgreSQL, MongoDB, Redis, Elasticsearch
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
                <FaCloud className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Platforms</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AWS, GCP, Azure, Vercel, Netlify
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4">
                <FaTools className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Others</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Git, Docker, Kubernetes, Jenkins, Terraform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
