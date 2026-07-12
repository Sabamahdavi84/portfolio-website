"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const isFa = locale === "fa";
  const t=useTranslations("LanguageSwitcher")

  return (
    <div
      dir="ltr"
      className={`relative flex items-center rounded-full p-1
                 bg-purple-50 dark:bg-purple-950/40
                 border border-purple-200 dark:border-purple-500/20
                 overflow-hidden shrink-0 ${locale==='fa'? "w-24 h-8":" w-20 h-8"}`}
    >
      {/* پس‌زمینه‌ی کشویی */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-9 rounded-full
                    bg-gradient-to-r from-violet-600 to-purple-600
                    shadow-md shadow-violet-500/30
                    transition-transform duration-300 ease-in-out
                    ${isFa ? "translate-x-12" : "translate-x-0"}`}
      />

      {/* گزینه انگلیسی - چپ */}
      <Link
        href="/en"
        className={`relative z-10 flex-1 h-full flex items-center justify-center
                    text-[11px] font-bold rounded-full transition-colors duration-300
                    ${!isFa ? "text-white" : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-300"}`}
      >
        {t('en')}
      </Link>

      {/* گزینه فارسی - راست */}
      <Link
        href="/fa"
        className={`relative z-10 flex-1 h-full flex items-center justify-center
                    text-[11px] font-bold rounded-full transition-colors duration-300
                    ${isFa ? "text-white" : "text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-300"}`}
      >
        {t('fa')}
      </Link>
    </div>
  );
}