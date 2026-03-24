import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaTimes } from 'react-icons/fa'

import { portfolioData } from '../../data/portfolioData.js'
import { useLanguage } from '../../hooks/useLanguage.js'
import PortfolioCard from './PortfolioCard.jsx'

function PortfolioSlider() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('section_portfolio_title')}
        </h2>
        <p className="mt-3 text-base font-medium text-slate-300">{t('portfolio_subtitle')}</p>
      </div>

      {/* Portfolio Slider */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-12"
      >
        {portfolioData.map((project) => (
          <SwiperSlide key={project.id}>
            <PortfolioCard
              project={project}
              onImageClick={() => setSelectedProject(project)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Top Right Corner */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-200 hover:scale-110"
              aria-label="Close"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {/* Image Only */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title.en}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioSlider

