import { useLanguage } from '../../hooks/useLanguage.js'
import { FaArrowRight, FaDownload } from 'react-icons/fa'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                {t('hero_intro')}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('hero_headline')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('hero_subheadline')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
              >
                {t('hero_cta_projects')}
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-lg transition-colors duration-200"
              >
                <FaDownload className="w-4 h-4" />
                {t('hero_cta_contact')}
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{t('hero_status')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{t('hero_location')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Code Card */}
          <div className="relative">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-slate-800">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                  portfolio.tsx
                </span>
              </div>

              {/* Code Content */}
              <div className="space-y-4 font-mono text-sm">
                <div className="text-blue-600 dark:text-blue-400">
                  const developer = {'{'}
                </div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400">name:</span>{' '}
                  <span className="text-orange-600 dark:text-orange-400">"{t('hero_name')}"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400">role:</span>{' '}
                  <span className="text-orange-600 dark:text-orange-400">"{t('hero_title')}"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400">skills:</span>{' '}
                  <span className="text-purple-600 dark:text-purple-400">['React', 'Node.js', 'TypeScript']</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400">passionate:</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">true</span>
                </div>
                <div className="text-blue-600 dark:text-blue-400">
                  {'}'};
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

