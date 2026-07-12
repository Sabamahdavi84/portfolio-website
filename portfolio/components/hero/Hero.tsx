"use client"

import DotGrid from "./background";
import { useTheme } from "@/app/theme/ThemeContext";
import { useLocale } from "next-intl";
import LinkButton from "../ui/LinkButton";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero(){
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const locale=useLocale();

    return(
        <section id="home" className="relative min-h-screen overflow-hidden
        flex items-center pt-30 py-10">
            {/* background glow */}
            <div className={`absolute ${locale==='fa'? "right-1/12" :"left-1/3"} top-1/4 -translate-x-1/2 w-80 h-80 rounded-full
            blur-3xl bg-purple-300/50 dark:bg-purple-800/30`}/>
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
            <div className="relative -10 w-[90%] mx-auto grid grid-cols-1
            lg:grid-cols-2 gap-6 items-center">
                {/* left side */}
                <div className="space-y-6">
                    <span className="block text-purple-500 dark:text-purple-400 text-sm tracking-[0.3em] font-medium">
                         HELLO, I'M
                     </span>

                    <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] text-gray-800 dark:text-gray-100">
                         Saba <br />
                       <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-gray-200 dark:from-purple-300 dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                            Mahdavi
                         </span>
                     </h1>
                     <span className="inline-block px-4 py-1.5 rounded-full
                     text-purple-500 dark:text-purple-400 text-sm border border-purple-700">
                        Fullstack Developer | Next.js Specialist
                    </span>

                     {/* divider */}
                    <div className="relative flex items-center w-48">
                   <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <div className="absolute left-1/2 -translate-x-1/2">
                      <div className="relative">
                       {/* Glow */}
                       <div className="absolute inset-0 w-6 h-6 rounded-full bg-purple-500/40 blur-md" />

                       {/* Star */}
                       <span className="relative text-purple-400 text-sm">✦</span>
                        </div>
                   </div>
                  </div>
                    <p className="text-gray-500 max-w-lg tracking-wide">
                        Passionate about building modern, scalable web applications with React, Next.js, Node.js, PostgreSQL, and Prisma, with a strong focus on frontend development.
                    </p>
                    

                    <div className="flex items-center gap-4 pt-2">
                        <LinkButton text="Get in touch" href="#contact" rounded icon={locale === "fa" ? LucideArrowLeft : LucideArrowRight}/>
                        <LinkButton text="View projects" href="#projects" rounded variant="outline"/>
                    </div>
                </div>
                {/* right side */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-85 h-85 md:w-110 md:h-110 rounded-full
                    bg-purple-300 dark:bg-purple-800/50 background-blur-md border border-purple-200 dark:border-purple-700/50 flex items-center justify-center">
                        {/* image glow */}
                        <div className="absolute inset-0 rounded-full bg-purple-400/20
                        blur-3xl"/>
                        {/* <Image fill src="/images/profile.jpg" alt="profile" className="z-10 object-cover rounded-full"/> */}
                    </div>
                </div>
            </div>
        </section>
    )
}