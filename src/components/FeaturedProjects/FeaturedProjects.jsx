const featuredProjects = [
  {
    id: 1,
    title: 'AI Customer Support Automation',
    category: 'AI · FastAPI · NLP',
    description:
      'Built an AI-powered support system that automates ticket classification and response workflows.',
    problem:
      'Companies struggle with slow response times and high support costs.',
    solution:
      'Developed a FastAPI backend with NLP routing, automated response generation, and ticket escalation logic.',
    impact: ['Reduced response time by 45%', 'Automated 60% of incoming queries', 'Improved customer satisfaction'],
    tech: 'FastAPI · Python · NLP · AWS · Docker',
    image: '/images/portfolio/Chatbot.png',
    caseStudyLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Distributed Job Processing System',
    category: 'Node.js · Redis · PostgreSQL',
    description:
      'Designed a resilient job processing platform to handle background tasks at scale.',
    problem:
      'Heavy async workloads were delaying user-facing services and causing instability.',
    solution:
      'Built worker-based processing with Redis queues, retry logic, and persistent job tracking.',
    impact: ['Processed thousands of jobs reliably', 'Improved system responsiveness', 'Reduced backend load spikes'],
    tech: 'Node.js · Redis · PostgreSQL · Docker',
    image: '/images/portfolio/Ecommerce.png',
    caseStudyLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'High-Performance REST API Platform',
    category: 'Python · FastAPI · PostgreSQL',
    description:
      'Built an API platform optimized for concurrent usage and efficient data delivery.',
    problem:
      'The application needed faster response times and better handling of concurrent traffic.',
    solution:
      'Optimized database queries, added Redis caching, and structured endpoints for predictable performance.',
    impact: ['Reduced API response times', 'Increased throughput under load', 'Enabled efficient filtering and pagination'],
    tech: 'FastAPI · Python · PostgreSQL · Redis',
    image: '/images/portfolio/hotel booking.png',
    caseStudyLink: '#',
    githubLink: '#',
  },
]

function FeaturedProjects() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Featured Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Core systems built for impact.
        </h2>
        <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
          The projects below showcase high-performance architectures, distributed workflows, and AI-enhanced systems designed for production.
        </p>
      </div>

      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="grid gap-6 rounded-3xl border border-slate-700 bg-slate-900/75 p-6 shadow-xl shadow-slate-900/20 lg:grid-cols-[minmax(320px,1fr)_minmax(420px,460px)]"
          >
            <div className="relative overflow-hidden rounded-3xl bg-slate-950/80">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full min-h-[320px] object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {project.category}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Problem
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Solution
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">{project.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Impact
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.impact.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950/80 px-5 py-4 text-sm text-slate-300 ring-1 ring-slate-700">
                <span className="font-semibold text-white">Tech:</span> {project.tech}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
