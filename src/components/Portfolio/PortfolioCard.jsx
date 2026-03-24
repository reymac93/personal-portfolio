import { useLanguage } from '../../hooks/useLanguage.js'

function PortfolioCard({ project, onImageClick }) {
  const { language } = useLanguage()
  const title = project.title[language] ?? project.title.en

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border-2 border-slate-300 shadow-sm transition-all hover:shadow-lg">
      {/* Image Container - Clickable for modal */}
      <button
        onClick={onImageClick}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
        aria-label={`View ${title} details`}
      >
        <img
          src={project.image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
      </button>

      {/* Title Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent px-4 py-6 sm:px-5 sm:py-7">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-block"
        >
          <h3 className="text-base font-bold text-white sm:text-lg line-clamp-2 group-hover/link:text-blue-400 transition-colors">
            {title}
          </h3>
        </a>
      </div>
    </article>
  )
}

export default PortfolioCard

