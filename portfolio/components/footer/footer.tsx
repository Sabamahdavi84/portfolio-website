"use client"
import { useLocale , useTranslations } from "next-intl"
import Logo from "../navbar/Logo"
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { useState ,useEffect } from "react";

export default function Footer() {
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false);
  const t=useTranslations("Footer")
  const year = new Date().getFullYear()

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // اسکرول به بالا
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
     {/* دکمه بازگشت به بالا */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-purple-400 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
          aria-label="بازگشت به بالا"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
      
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-purple-100/50 dark:bg-purple-900/30 overflow-hidden">
      {/* background glow */}
      <div
        className={`absolute ${
          locale === "fa" ? "left-1/12" : "right-1/3"
        } top-1/3 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-purple-300/20 dark:bg-purple-800/15 pointer-events-none`}
      />

      <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
        {/* top section */}
        <div
          className="flex flex-col items-center text-center gap-8
          md:flex-row md:items-start md:justify-between md:text-left"
        >
          <div className="space-y-3 max-w-xs">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className={`${locale==='fa' ?"text-right pr-6":"text-left pl-6"} text-sm text-gray-500 dark:text-gray-400 leading-relaxed`}>
              {t("description")}
            </p>
          </div>

          {/* socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Sabamahdavi84"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-full
              text-gray-500 dark:text-gray-400
              border border-gray-300 dark:border-gray-600
              hover:text-purple-600 dark:hover:text-purple-400
              hover:border-purple-300 dark:hover:border-purple-500
              hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/saba-mahdavi84/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full
              text-gray-500 dark:text-gray-400
              border border-gray-300 dark:border-gray-600
              hover:text-purple-600 dark:hover:text-purple-400
              hover:border-purple-300 dark:hover:border-purple-500
              hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://t.me/sbaFullStackDev"
              aria-label="Telegram"
              className="w-9 h-9 flex items-center justify-center rounded-full
              text-gray-500 dark:text-gray-400
              border border-gray-300 dark:border-gray-600
              hover:text-purple-600 dark:hover:text-purple-400
              hover:border-purple-300 dark:hover:border-purple-500
              hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaTelegram size={16} />
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 dark:via-purple-800 to-transparent" />

        {/* bottom footer */}
        <p className="text-center text-gray-400 dark:text-gray-600 text-sm">
           {t("copyright", { year })}
        </p>
      </div>
    </footer>
    </>
  )
}