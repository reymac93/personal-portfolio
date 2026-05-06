import { useLanguage } from '../../hooks/useLanguage.js'
import { FaCode, FaServer, FaCogs, FaBrain, FaRocket, FaShieldAlt } from 'react-icons/fa'

function Services() {
  const { t } = useLanguage()

  const services = [
    {
      id: 'design-performance',
      icon: FaCode,
      title: t('services_web_dev_title'),
      description: t('services_web_dev_desc'),
      features: ['Responsive Design', 'Performance Optimization', 'Modern Frameworks']
    },
    {
      id: 'scalable-architecture',
      icon: FaServer,
      title: t('services_api_title'),
      description: t('services_api_desc'),
      features: ['RESTful APIs', 'Microservices', 'Database Design']
    },
    {
      id: 'reliability',
      icon: FaCogs,
      title: t('services_devops_title'),
      description: t('services_devops_desc'),
      features: ['CI/CD Pipelines', 'Containerization', 'Monitoring']
    },
    {
      id: 'ml-production',
      icon: FaBrain,
      title: t('services_ai_ml_title'),
      description: t('services_ai_ml_desc'),
      features: ['Model Deployment', 'Data Pipelines', 'MLOps']
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('section_services_title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-800 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaRocket className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
            </div>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with modern technology and best practices.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <FaShieldAlt className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

