"use client"

import { useTheme } from "@/app/theme/ThemeContext";
import { useLocale , useTranslations} from "next-intl";
import { LucideCode2, LucideRocket, LucideUsers, LucideSparkles } from "lucide-react";

const stats = [
  { icon: LucideCode2, label: "projects", value: "8" },
  { icon: LucideUsers, label: "teams", value: "3" },
  { icon: LucideRocket, label: "years", value: "1" },
  { icon: LucideSparkles, label: "stack", value: "15" },
];

export default function About() {
    const { theme } = useTheme();
    const locale = useLocale();
    const t=useTranslations("About")

    return (
        <section id="about" className="relative overflow-hidden py-24 pb-2">
            {/* background glow */}
            <div className={`absolute ${locale === 'fa' ? "left-1/12" : "right-1/3"} top-1/3 -translate-x-1/2 w-96 h-96 rounded-full
            blur-3xl bg-purple-300/40 dark:bg-purple-800/25`} />

            {/* content */}
            <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* left side - text */}
                <div className="space-y-6">
                    <span className="block text-purple-500 dark:text-purple-400 text-sm tracking-[0.3em] font-medium">
                        {t('title')}
                    </span>

                    <h2 className={`${locale==='fa' ? "font-medium text-4xl" : "font-serif text-4xl md:text-5xl"} leading-tight text-gray-800 dark:text-gray-100`}>
                        {t('titr')} <br />
                        <span className="text-purple-500 dark:text-purple-400">{t('titr1')}</span>
                    </h2>

                    <div className="w-24 h-px bg-gradient-to-r from-purple-500 to-transparent" />

                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {t('me')} <strong className="text-gray-700 dark:text-gray-200">{t('fullstack')}</strong> {t('titr2')}{" "}
                        <strong className="text-gray-700 dark:text-gray-200">{t('language')}</strong>,
                        {t('titr3')}{" "}
                        <strong className="text-gray-700 dark:text-gray-200">{t('language1')}</strong>{" "}{t('titr4')}.
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                       <strong className="text-gray-700 dark:text-gray-200">
                       {t('titr5')}</strong>{" "}
                       {t('titr6')}</p>
                </div>

                {/* right side - stats grid */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl
                            bg-purple-50 dark:bg-purple-900/20 border border-purple-200/50 dark:border-purple-700/30
                            hover:border-purple-400/60 hover:-translate-y-1 transition-all duration-300"
                        >
                            <stat.icon className="text-purple-500 dark:text-purple-400" size={26} />
                            <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{t(stat.value)}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{t(stat.label)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}