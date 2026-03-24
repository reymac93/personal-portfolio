import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { useLanguage } from '../../hooks/useLanguage.js'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkovebnv'

function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const email = 'rey.mac93@outlook.com'
  const linkedin = 'https://ph.linkedin.com/in/reymac93'
  const github = 'https://github.com/Reymac93'
  const facebook = 'https://www.facebook.com/share/18RwwtCe1e/?mibextid=wwXIfr'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.currentTarget
    setStatus('submitting')
    setErrorMessage('')
    try {
      const body = new FormData(formEl)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Inputs are controlled by state; reset() is optional but safe here.
        formEl?.reset?.()
      } else {
        const data = await res.json().catch(() => null)
        const message =
          data?.errors?.[0]?.message ??
          data?.error ??
          `Request failed. Please try again. (${res.status})`
        setErrorMessage(message)
        setStatus('error')
      }
    } catch (err) {
      setErrorMessage(err?.message ?? 'Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="text-white sm:p-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start lg:gap-12">
        {/* Left: Contact info + socials */}
        <div className="space-y-6 lg:col-start-1">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t('section_contact_title')}{' '}
              <span className="text-sky-400">{t('contact_heading_2')}</span>
            </h2>
            <p className="mt-2 text-white/90">{t('contact_subtitle')}</p>
          </div>

          <div className="h-px w-100 bg-white/40" aria-hidden />

          <div className="flex flex-wrap gap-3">
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-sky-400 transition hover:bg-sky-500/20 hover:text-sky-300"
              aria-label={t('contact_facebook_label')}
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-sky-400 transition hover:bg-sky-500/20 hover:text-sky-300"
              aria-label={t('contact_linkedin_label')}
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-sky-400 transition hover:bg-sky-500/20 hover:text-sky-300"
              aria-label={t('contact_github_label')}
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-sky-400 transition hover:bg-sky-500/20 hover:text-sky-300"
              aria-label={t('contact_email_label')}
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/90">
            <FaEnvelope className="h-4 w-4 shrink-0 text-sky-400" />
            <a href={`mailto:${email}`} className="hover:text-sky-300 hover:underline">
              {email}
            </a>
          </div>
        </div>

        {/* Right: Message form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 lg:col-start-2"
        >
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t('contact_name_placeholder')}
            className="w-full rounded-lg border-0 bg-slate-700/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 shadow-lg focus:ring-2 focus:ring-sky-400/50"
            disabled={status === 'submitting'}
          />
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t('contact_email_placeholder')}
            className="w-full rounded-lg border-0 bg-slate-700/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 shadow-lg focus:ring-2 focus:ring-sky-400/50"
            disabled={status === 'submitting'}
          />
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder={t('contact_message_placeholder')}
            className="w-full resize-y rounded-lg border-0 bg-slate-700/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 shadow-lg focus:ring-2 focus:ring-sky-400/50"
            disabled={status === 'submitting'}
          />
          {status === 'success' && (
            <p className="text-sm font-medium text-sky-300">
              {t('contact_success')}
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-400">
              {errorMessage || t('contact_error_generic')}
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending…' : t('contact_send_label')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
