"use client"

import { LucideSend, Mail, MapPin, Phone } from "lucide-react"
import { useLocale , useTranslations} from "next-intl";

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    value: "emailValue",
    href: "mailto:sabamahdavi8400@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "phoneValue",
    href: "tel:+989909334899",
  },
  {
    icon: MapPin,
    label: "location",
    value: "locationValue",
    href: "#",
  },
]

export default function Contact() {
  const locale = useLocale();
  const t=useTranslations('Contact');

  return (
    <section id="contact" className="relative py-24 overflow-hidden -mt-22">
      {/* background glow */}
      <div
        className={`absolute ${
          locale === "fa" ? "left-1/12" : "right-1/3"
        } top-1/3 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-purple-300/30 dark:bg-purple-800/20 pointer-events-none`}
      />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
        {/* heading */}
        <div data-aos="fade-up" className="text-center space-y-6">
          <span className="block text-purple-600 dark:text-purple-400 text-sm tracking-[0.3em] font-medium uppercase">
           {t('badge')}
          </span>

          <h2
            className={`${
              locale === "fa" ? "font-medium text-4xl" : "font-serif text-4xl md:text-5xl"
            } leading-tight text-gray-900 dark:text-gray-50`}
          >
            {t('title1')}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("title2")}</span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </div>

        <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left - form */}
          <form
            className="p-6 rounded-2xl bg-purple-200/50 dark:bg-purple-800/30
            border border-gray-200 dark:border-purple-900 shadow-sm space-y-5"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('formTitle')}
            </h3>

            {/* name */}
            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1.5">
                {t('name')}
              </label>
              <input
                type="text"
                required
                placeholder={t('namePlaceholder')}
                className="w-full px-4 py-2.5 rounded-lg
                bg-gray-50 dark:bg-purple-700
                border border-gray-200 dark:border-purple-500
                text-gray-900 dark:text-gray-100
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                outline-none focus:border-purple-400 dark:focus:border-purple-600
                focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/30
                transition"
              />
            </div>

            {/* email */}
            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1.5">
                {t('email')}
              </label>
              <input
                type="email"
                required
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-2.5 rounded-lg
                bg-gray-50 dark:bg-purple-700
                border border-gray-200 dark:border-purple-500
                text-gray-900 dark:text-gray-100
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                outline-none focus:border-purple-400 dark:focus:border-purple-600
                focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/30
                transition"
              />
            </div>

            {/* message */}
            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1.5">
                {t('message')}
              </label>
              <textarea
                required
                rows={4}
                placeholder={t('messagePlaceholder')}
                className="w-full px-4 py-2.5 rounded-lg
                bg-gray-50 dark:bg-purple-700
                border border-gray-200 dark:border-purple-500
                text-gray-900 dark:text-gray-100
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                outline-none focus:border-purple-400 dark:focus:border-purple-600
                focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/30
                transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-purple-500/60
              hover:bg-purple-500/80
              dark:bg-purple-500 dark:hover:bg-purple-400
              text-white font-medium transition-colors
              flex items-center justify-center gap-2 cursor-pointer"
            >
              {t('send')}
              <LucideSend className="w-4 h-4" />
            </button>
          </form>

          {/* right - contact info */}
          <div className="p-2">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {t('infoTitle')}
            </h3>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl
                  border border-transparent
                  hover:bg-purple-50 hover:border-purple-100
                  dark:hover:bg-purple-900/20 dark:hover:border-purple-900
                  transition-colors group"
                >
                  <div
                    className="w-11 h-11 shrink-0 rounded-xl
                    bg-purple-50 dark:bg-purple-900/30
                    flex items-center justify-center
                    group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50
                    transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {t(item.label)}
                    </div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {t(item.value)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}