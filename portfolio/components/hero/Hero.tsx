"use client"

import DotGrid from "./background";
import { useTheme } from "@/app/theme/ThemeContext";
import { useLocale } from "next-intl";
import LinkButton from "../ui/LinkButton";
import { LucideArrowDown, LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Hero(){
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const locale = useLocale();
    const t=useTranslations("Hero")

    return(
        <section id="home" className="relative min-h-screen overflow-hidden
        flex items-center justify-center pt-20 py-8">
            {/* background glow */}
            <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-96 h-96 rounded-full
            blur-3xl bg-purple-300/40 dark:bg-purple-900/40"/>

            {/* background */}
            <div className="inset-0 absolute">
                  <DotGrid
                   dotSize={2}
                   gap={15}
                   baseColor={isDark ? "#332A45" : "#DDD6FE"}
                   activeColor="#7C3AED"
                   proximity={120}
                   shockRadius={250}
                   shockStrength={5}
                   resistance={750}
                   returnDuration={1.5}
                   />
            </div>

            {/* content */}
            <div className="relative z-10 w-[90%] max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">

                <span className="block text-purple-500 dark:text-purple-400 text-sm tracking-[0.3em] font-medium mt-4">
                     {t('hi')}
                </span>

                <h1 data-aos='fade-up' className={`${locale==='fa' ? "font-medium text-4xl" : "font-serif text-6xl md:text-7xl"} leading-[1.05] text-gray-800 dark:text-gray-100`}>
                     {t('name')} <br />
                   <span className={`${locale==='fa' ? "text-5xl pt-4 block" : "text-6xl md:text-7xl"} bg-gradient-to-r from-purple-600 via-purple-400 to-gray-400 dark:from-purple-500 dark:via-violet-400 dark:to-purple-200 bg-clip-text text-transparent`}>
                    {t('lastname')}
                  </span>
                </h1>
                 {/* stars */}
              <div
                className="absolute -top-2 -left-3"
                style={{ animation: "starMove1 3s ease-in-out infinite" }}>
               <div className="relative">
               <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
               <span className="relative text-purple-400 text-xs">✦</span>
              </div>
             </div>

        <div
            className="absolute -top-3 right-2"
            style={{ animation: "starMove2 3.5s ease-in-out infinite", animationDelay: "0.3s" }}>
           <div className="relative">
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
            <span className="relative text-purple-300 text-[10px]">✦</span>
        </div>
       </div>

       <div
            className="absolute top-1/2 -right-4 -translate-y-1/2"
            style={{ animation: "starMove3 4s ease-in-out infinite", animationDelay: "0.6s" }}>
          <div className="relative">
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
            <span className="relative text-purple-400 text-xs">✦</span>
        </div>
      </div>

      <div
            className="absolute bottom-12 left-4"
            style={{ animation: "starMove4 3.2s ease-in-out infinite", animationDelay: "0.9s" }}>
        <div className="relative">
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
            <span className="relative text-purple-300 text-[10px]">✦</span>
        </div>
       </div>


                 <span  data-aos='fade-up' data-aos-delay="100" className="inline-block px-4 py-1.5 rounded-full
                 text-purple-500 dark:text-purple-400 text-sm border border-purple-700">
                    {t('title')}
                </span>

                {/* divider */}
                <div  data-aos='fade-up' data-aos-delay="200" className="relative flex items-center w-48 justify-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md" />
                             <span className="relative z-10 text-purple-400 text-sm leading-none">✦</span>
                          </div>
                    </div>
                </div>

                <p data-aos='fade-up' data-aos-delay="200" className="text-gray-500 max-w-lg tracking-wide">
                    {t('titr')}<br/>
                    {t('with')} <strong className="dark:text-gray-300/60 text-gray-600"> {t('titr1')}</strong> <br/>
                      {t('titr2')}
                </p>
<div 
  data-aos="fade-up" 
  data-aos-delay="300" 
  className="flex flex-col items-center justify-center gap-4 pt-2 mb-2"
>
                <div className="flex items-center justify-center gap-4">
                    <LinkButton text={t('textbtn')} href="#contact" rounded icon={locale === "fa" ? LucideArrowLeft : LucideArrowRight}/>
                    <LinkButton text={t('textbtn1')} href="#projects" rounded variant="outline"/>
                </div>
                                     {/* social + scroll */}
                    <div className="flex items-center justify-between pt-4 mb-22 max-w-md">
                        <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
                             <a href="https://github.com/Sabamahdavi84" className="hover:text-purple-500 transition-colors"><FaGithub size={20} /></a>
                             <a href="https://www.linkedin.com/in/saba-mahdavi84/" className="hover:text-purple-500 transition-colors"><FaLinkedin size={20} /></a>
                           <a href="https://t.me/sbaFullStackDev" className="hover:text-purple-500 transition-colors"><FaTelegram size={20} /></a>
                         </div>
                       
                     </div>
                {/* scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="text-gray-500 dark:text-gray-400 text-xs tracking-[0.3em]">{t('scroll')}</span>
                <LucideArrowDown className="w-4 h-4 text-gray-500 dark:text-gray-400 animate-bounce" />
            </div>
            </div>
            </div>
        </section>
    )
}