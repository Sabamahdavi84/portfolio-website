"use client"

import { useTheme } from "@/app/theme/ThemeContext";
import { useLocale , useTranslations } from "next-intl";
import {
    LucideCode2,
    LucideServer,
    LucideWrench,
} from "lucide-react";

type Skill = { name: string };

const skillCategories: {
    icon: typeof LucideCode2;
    title: string;
    description: string;
    skills: Skill[];
}[] = [
    {
        icon: LucideCode2,
        title: "Frontend",
        description: "description",
        skills: [
            { name: "HTML & CSS" },
             { name: "Tailwind css" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "React" },
            { name: "Next.js" }
        ],
    },
    {
        icon: LucideServer,
        title: "Backend",
        description: "api",
        skills: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" },
            { name: "Python" },
            { name: "REST APIs"},
        ],
    },
    {
        icon: LucideWrench,
        title: "tools",
        description: "description1",
        skills: [
            { name: "Git / GitHub" },
            { name: "Figma" },
            { name: "Vercel"},
            { name: "Jira" },
            { name: "Azure Devops" },
        ],
    },
];


export default function Skills() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const locale = useLocale();
    const t=useTranslations('Skills')

    return (
        <section id="skills" className="relative overflow-hidden py-24">
            {/* background glow */}
            <div className={`absolute ${locale === 'fa' ? "right-1/4" : "left-1/4"} top-1/4 -translate-x-1/2 w-96 h-96 rounded-full
            blur-3xl bg-purple-300/40 dark:bg-purple-800/25`} />

            {/* content */}
            <div className="relative z-10 w-[90%] max-w-6xl mx-auto space-y-6">

                {/* heading */}
                <div className="text-center space-y-6">
                    <span className="block text-purple-500 dark:text-purple-400 text-sm tracking-[0.3em] font-medium">
                        {t('skill')}
                    </span>

                    <h2 className={`${locale==='fa' ? "font-medium text-4xl" : "font-serif text-4xl md:text-5xl"} leading-tight text-gray-800 dark:text-gray-100`}>
                        {t('tooling')} <br />
                        <span className="text-purple-500 dark:text-purple-400 pt-2 block">{t('ideas')}</span>
                    </h2>

                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
                </div>

                {/* categories grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
                    {skillCategories.map((category, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-purple-100/40 dark:bg-purple-900/10
                            border border-purple-200/50 dark:border-purple-700/30
                            hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/5
                            transition-all duration-300"
                        >
                            {/* category header */}
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-11 h-11 flex items-center justify-center rounded-xl
                                bg-purple-100 dark:bg-purple-800/40 shrink-0">
                                    <category.icon className="text-purple-600 dark:text-purple-400" size={22} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    {t(category.title)}
                                </h3>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 ms-14">
                                {t(category.description)}
                            </p>

                            {/* skill list */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200
                                        bg-purple-200 dark:bg-purple-800/30 px-3 py-1.5 rounded-full"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}