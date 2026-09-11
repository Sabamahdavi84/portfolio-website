"use client";

import DotGrid from "./background";
import { useTheme } from "@/app/theme/ThemeContext";
import { useLocale, useTranslations } from "next-intl";
import LinkButton from "../ui/LinkButton";
import { LucideArrowDown, LucideArrowLeft, LucideArrowRight} from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const locale = useLocale();
  const t = useTranslations("Hero");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 pb-16">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-purple-300/40 dark:bg-purple-900/40 pointer-events-none"/>
      {/* DOT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">
        {/* TEXT SIDE */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-start space-y-6 order-2 lg:order-1">
          {/* Decorative star 1 */}
          <div
            className="absolute -top-8 left-4"
            style={{
              animation: "starMove1 3s ease-in-out infinite",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
              <span className="relative text-purple-400 text-xs">
                ✦
              </span>
            </div>
          </div>

          {/* Decorative star 2 */}
          <div
            className="absolute -top-4 right-2"
            style={{
              animation: "starMove2 3.5s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
              <span className="relative text-purple-300 text-[10px]">
                ✦
              </span>
            </div>
          </div>

          {/* Decorative star 3 */}
          <div
            className="absolute top-1/2 -right-5 -translate-y-1/2"
            style={{
              animation: "starMove3 4s ease-in-out infinite",
              animationDelay: "0.6s",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
              <span className="relative text-purple-400 text-xs">
                ✦
              </span>
            </div>
          </div>

          {/* Decorative star 4 */}
          <div
            className="absolute bottom-10 left-4"
            style={{
              animation: "starMove4 3.2s ease-in-out infinite",
              animationDelay: "0.9s",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/40 blur-md" />
              <span className="relative text-purple-300 text-[10px]">
                ✦
              </span>
            </div>
          </div>

          {/* Greeting */}
          <span
            data-aos="fade-up"
            className="block text-purple-500 dark:text-purple-400 text-sm tracking-[0.3em] font-medium"
          >
            {t("hi")}
          </span>
          {/* Name */}
          <h1
            data-aos="fade-up"
            className={`leading-[1.05] text-gray-800 dark:text-gray-100
              ${
                locale === "fa"
                  ? "font-medium text-4xl md:text-5xl"
                  : "font-serif text-6xl md:text-7xl"
              }
            `}
          >
            {t("name")}
            <br />
            <span
              className={`
                ${
                  locale === "fa"
                    ? "text-5xl md:text-6xl pt-4 block"
                    : "text-6xl md:text-7xl"
                }
                bg-linear-to-r from-purple-600 via-purple-400 to-gray-400 dark:from-purple-500 dark:via-violet-400 dark:to-purple-200
                bg-clip-text text-transparent`}
            >
              {t("lastname")}
            </span>
          </h1>

          {/* Title */}
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center px-5 py-2 rounded-full text-purple-500 dark:text-purple-400 text-sm
            border border-purple-500/40 bg-purple-500/5 backdrop-blur-sm shadow-[0_0_25px_rgba(124,58,237,0.10)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 animate-pulse" />

            {t("title")}
          </span>

          {/* Divider */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative flex items-center w-48"
          >
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent"/>
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md" />
                <span className="relative z-10 text-purple-400 text-sm">
                  ✦
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 dark:text-gray-400 max-w-lg tracking-wide leading-8"
          >
            {t("titr")}
            <br />
            {t("with")}
            <br />
            {t("titr2")}
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative z-20 flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 pb-8 sm:pb-10 lg:pb-0"
          >
            <LinkButton
              text={t("textbtn")}
              href="#contact"
              rounded
              icon={
                locale === "fa"
                  ? LucideArrowLeft
                  : LucideArrowRight
              }
            />

            <LinkButton
              text={t("textbtn1")}
              href="#projects"
              rounded
              variant="outline"
            />
          </div> 
        </div>

        {/* IMAGE SIDE */}
        <div
          data-aos="fade-left"
          className="relative order-1 lg:order-2 flex justify-center items-center min-h-[400px] md:min-h-[500px]"
        >
          {/* Main Glow */}
          <div
            className="absolute w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-purple-600/20 dark:bg-purple-600/15 blur-[80px]"
          />
          {/* Outer Ring */}
          <div
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-purple-500/20"
          />

          {/* Dashed Ring */}
          <div
            className="absolute w-[290px] h-[290px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-purple-400/25 animate-[spin_30s_linear_infinite]"
          />

          {/* Inner Ring */}
          <div
            className="absolute w-[250px] h-[250px] md:w-[365px] md:h-[365px] rounded-full border border-purple-500/10"
          />

          {/* Image Wrapper */}
          <div className="relative">
            {/* Gradient Border */}
            <div
              className="absolute -inset-[5px] rounded-full bg-gradient-to-br blur-[1px]"
            />

            {/* Image Circle */}
            <div
              className="relative  w-[250px] h-[250px] sm:w-[290px] sm:h-[290px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden
                border-4 shadow-[0_0_80px_rgba(124,58,237,0.35)]"
            >
              <img
                src="/images/myphoto.png"
                alt="Saba Mahdavi"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-950/25 via-transparent to-purple-500/5 pointer-events-none"/>
            </div>

            {/* Top Right */}
            <div
              className="absolute -top-8 -right-6 md:-right-10 text-purple-400"
              style={{
                animation: "starMove1 3s ease-in-out infinite",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-purple-500/30 blur-xl" />
                <span className="relative text-2xl">
                  ✦
                </span>
              </div>
            </div>

            {/* Left */}
            <div
              className="absolute top-1/3 -left-8 md:-left-14 text-purple-300"
              style={{
                animation: "starMove2 4s ease-in-out infinite",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-purple-500/30 blur-lg" />
                <span className="relative text-xl">
                  ✦
                </span>
              </div>
            </div>

            {/* Bottom Right */}
            <div
              className="absolute -bottom-4 -right-2 md:-right-7 text-purple-400"
              style={{
                animation: "starMove3 3.5s ease-in-out infinite",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 w-7 h-7 rounded-full bg-purple-500/30 blur-lg" />
                <span className="relative text-lg">
                  ✦
                </span>
              </div>
            </div>

            {/* Small top left star */}
            <div
              className="absolute top-4 -left-4 md:-left-8 text-purple-300"
              style={{
                animation: "starMove4 3.2s ease-in-out infinite",
              }}
            >
              <span className="text-xs">
                ✦
              </span>
            </div>
          </div>
          {/* SOCIAL LINKS UNDER IMAGE */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20">
            <a
              href="https://github.com/Sabamahdavi84"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/30 bg-white/60
                text-gray-600 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2
                hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]
                dark:bg-purple-950/30 dark:text-gray-300"
            >
              <FaGithub
                size={21}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/saba-mahdavi84/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/30 bg-white/60 text-gray-600
                shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500
                hover:text-purple-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] dark:bg-purple-950/30 dark:text-gray-300"
            >
              <FaLinkedin
                size={21}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://t.me/sbaFullStackDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/30 bg-white/60 text-gray-600
                shadow-lg backdrop-blur-md transition-all  duration-300 hover:-translate-y-2 hover:border-purple-500
                hover:text-purple-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]
                dark:bg-purple-950/30 dark:text-gray-300"
            >
              <FaTelegram
                size={21}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-gray-500 dark:text-gray-400 text-xs tracking-[0.3em]">
          {t("scroll")}
        </span>
        <LucideArrowDown className="w-4 h-4 text-gray-500 dark:text-gray-400 animate-bounce"/>
      </div>
    </section>
  );
}