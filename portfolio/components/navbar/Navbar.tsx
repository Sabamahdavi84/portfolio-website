"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LucideDownload, LucideMenu } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import MobileNav from "./MobileNav";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const navLinks = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const locale=useLocale();
    const t=useTranslations("Navbar")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    // جلوگیری از اسکرول پس‌زمینه وقتی منوی موبایل بازه
    useEffect(() => {
        document.body.style.overflow = navOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; }
    }, [navOpen])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
                scrolled
                    ? "bg-white/70 dark:bg-[#0f0817]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(147,51,234,0.15)] border-b border-purple-200/50 dark:border-purple-500/10"
                    : "bg-transparent"
            }`}
        >
            <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between gap-4">
                {/* لوگو */}
                <Logo />

                {/* منوی دسکتاپ */}
                <ul className="hidden lg:flex items-center gap-1 py-2 px-1.5 rounded-full bg-purple-50/80 dark:bg-purple-950/40 backdrop-blur-xl border border-purple-200 dark:border-purple-500/20 shadow-sm">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className={`${locale==='fa'? "px-4 py-1 rounded-full" : "px-4 py-2 rounded-full"} text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-white hover:bg-purple-600 dark:hover:bg-purple-500`}
                            >
                                {t(link.label)}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* آیتم‌های سمت راست */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="hidden lg:block">
                        <LinkButton
                            iconPosition="left"
                            icon={LucideDownload}
                            rounded
                            variant="outline"
                            text={t('downloadbtn')}
                            href="/documents/rezome.pdf"
                            download
                        />
                    </div>

                    <LanguageSwitcher />
                    <ThemeToggle />

                    {/* دکمه باز کردن منوی موبایل */}
                    <button
                        onClick={() => setNavOpen(true)}
                        className={`${locale==='fa' ? "lg:hidden ml-4":"lg:hidden mr-4"} flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 transition-colors`}
                        aria-label="Open menu"
                    >
                        <LucideMenu size={20} />
                    </button>
                </div>
            </div>

            {/* منوی موبایل (drawer از راست) */}
            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} navLinks={navLinks} />
        </nav>
    )
}