"use client"

import { useLocale , useTranslations } from "next-intl"
import { ImageIcon, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "titleproject",
    description:"descproject",
    image: "/images/p1.png",
    tags: ["Next.js", "TypeScript"],
    liveURL: "#",
    githubURL: "https://github.com/Sabamahdavi84/portfolio-website",
  },
  {
    title: "titleproject1",
    description: "descproject1",
    image: "/images/p2+.png",
    tags: ["HTML/CSS", "JavaScript"],
    liveURL: "https://shoestore-site.vercel.app/",
    githubURL: "https://github.com/Sabamahdavi84/shoestore_site",
  },
  {
    title: "titleproject2",
    description: "descproject2",
    image: "/images/p3.png",
    tags: ["Python"],
    githubURL: "https://github.com/Sabamahdavi84/simple-finance-dashboard",
  },
  {
    title: "titleproject3",
    description: "descproject3",
    image: "/images/p4.jpg",
    tags: ["Python"],
    githubURL: "https://github.com/Sabamahdavi84/weather-app",
  },
  {
    title: "titleproject4",
    description: "descproject4",
    image: "/images/p5.jpg",
    tags: ["Python", "PostgreSQL"],
    githubURL: "https://github.com/Sabamahdavi84/TODOLIST",
  },
  {
    title: "titleproject5",
    description: "descproject5",
    image: "/images/p6.png",
    tags: ["PostgreSQL"],
    githubURL: "https://github.com/Sabamahdavi84/barbershop-database",
  },
]

export default function Project() {
  const locale = useLocale()
  const t=useTranslations("Projects")

  return (
    <section id="projects" className="py-24 relative -mt-20 overflow-hidden">
      {/* background glow */}
      <div
        className={`absolute ${
          locale === "fa" ? "left-1/12" : "right-1/3"
        } top-1/3 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-purple-300/30 dark:bg-purple-800/20 pointer-events-none`}
      />

      {/* content */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto space-y-14">
        {/* heading */}
        <div className="text-center space-y-6">
          <span className="block text-purple-600 dark:text-purple-400 text-sm tracking-[0.3em] font-medium uppercase">
            {t('title')}
          </span>

          <h2
            className={`${
              locale === "fa" ? "font-medium text-4xl" : "font-serif text-4xl md:text-5xl"
            } leading-tight text-gray-900 dark:text-gray-50`}
          >
            {t('things')}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t('Built')}</span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group rounded-2xl overflow-hidden flex flex-col
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-900
                shadow-sm hover:shadow-xl hover:shadow-purple-500/10
                hover:border-purple-300 dark:hover:border-purple-700
                hover:-translate-y-1.5 transition-all duration-300 ease-out
              "
            >
              {/* image / fallback */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-gray-100 dark:from-purple-950/40 dark:to-gray-900 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-purple-300 dark:text-purple-800">
                    <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {/* body */}
              <div className="p-5 space-y-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t(project.title)}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {t(project.description)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1 rounded-full text-xs font-medium
                        bg-purple-50 text-purple-700
                        dark:bg-purple-900/30 dark:text-purple-300
                        border border-purple-100 dark:border-purple-900
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                {project.liveURL ? (
                 <a
                    href={project.liveURL}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("LiveDemo")}
                  </a>
                 ): null}
                  <a
                    href={project.githubURL}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    {t('Github')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}