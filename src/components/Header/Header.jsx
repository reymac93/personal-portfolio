import { useLanguage } from '../../hooks/useLanguage.js'

function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 font-semibold tracking-tight">
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">{t('hero_name')}</span>
            <span className="text-xs text-slate-400">
              {t('hero_title')} · {t('hero_location')}
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#hero" className="hover:text-sky-400">
            {t('nav_about_me')}
          </a>
          <a href="#projects" className="hover:text-sky-400">
            {t('nav_portfolio')}
          </a>
          <a href="#skills" className="hover:text-sky-400">
            {t('nav_skills')}
          </a>
          <a href="#build" className="hover:text-sky-400">
            {t('nav_services')}
          </a>
          <a href="#contact" className="hover:text-sky-400">
            {t('nav_contact')}
          </a>
        </nav>

        {/* <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-slate-600 bg-slate-800/80 px-1.5 py-0.5 text-xs font-medium">
            <button
              type="button"
              onClick={() => handleLanguageChange('en')}
              aria-label="Switch to English"
              className={`rounded-full px-3 py-1 text-sm ${
                language === 'en' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-sky-400'
              }`}
            >
              {t('lang_en')}
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange('es')}
              aria-label="Cambiar a español"
              className={`rounded-full px-3 py-1 text-sm ${
                language === 'es' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-sky-400'
              }`}
            >
              {t('lang_es')}
            </button>
          </div>
        </div> */}
      </div>
    </header>
  )
}

export default Header

