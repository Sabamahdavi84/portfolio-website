"use client"

import { useLocale,useTranslations } from "next-intl";
import { Building2, UsersRound } from "lucide-react";

const experience = [
  {
    role: "role1",
    company: "company1",
    period: "period1",
    description: "description1",
    icon: Building2,
    technologies: ["Next.js", "Tailwind css","React","Figma"],
  },
  {
    role: "role2",
    company: "company2",
    period: "period2",
    description: "description2",
    icon: UsersRound,
    technologies: ["Node.js", "TypeScript", "Express.js", "TypeORM" , "mysql"],
  },
  {
    role: "role2",
    company: "company3",
    period: "period3",
    description: "description3",
    icon: UsersRound,
    technologies: ["Node.js", "TypeScript", "JavaScript", "PostgreSQL"],
  },
]

export default function Experience() {
  const locale = useLocale();
  const t=useTranslations('Experience')

  return (
    <section id="experience" className="py-32 relative -mt-24 overflow-hidden">
      {/* background glow */}
      <div
        className={`absolute ${
          locale === "fa" ? "left-1/12" : "right-1/3"
        } top-1/3 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-purple-300/30 dark:bg-purple-800/20 pointer-events-none`}
      />

      <div className="relative z-10">
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
            {t('titr1')} <br />
            <span className="text-purple-600 dark:text-purple-400 pt-2 block">{t('titr2')}</span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </div>

        {/* timeline */}
        <div className="relative mt-14 max-w-5xl mx-auto px-6">
          <div
            className="absolute left-11 md:left-1/2 top-0 bottom-0 w-0.5
            bg-gradient-to-b from-purple-400 via-purple-300 to-transparent md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8">
                {/* dot */}
                <div
                  className="absolute left-5 md:left-1/2 top-0 w-3 h-3 bg-purple-500 rounded-full
                  -translate-x-1/2 ring-4 ring-purple-200 dark:ring-purple-900 z-10"
                >
                  <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />
                </div>

                {/* content */}
                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0 ? `${locale==='fa'?"md:text-right":"md:text-left"}` : "md:col-start-2"
                  }`}
                >
                  <div
                    className="
                      p-6 rounded-2xl border border-gray-200 dark:border-purple-900
                      bg-purple-200/30 dark:bg-purple-800/20 shadow-sm
                      hover:shadow-lg hover:shadow-purple-500/10
                      hover:border-purple-300 dark:hover:border-purple-700
                      transition-all duration-300
                    "
                  >
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                      {t(exp.period)}
                    </span>

                    <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
                      {t(exp.role)}
                    </h3>

                    {/* <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{t(exp.company)}</p> */}
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-2">
                        {exp.icon && (()=>{
                            const Icon=exp.icon;
                            return <Icon size={16}/>
                        })()}
                        <span>{t(exp.company)}</span>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                      {t(exp.description)}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-start" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="
                            px-3 py-1 rounded-full text-xs font-medium
                            bg-purple-200 text-purple-700
                            dark:bg-purple-900/30 dark:text-purple-300
                            border border-purple-100 dark:border-purple-900
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}