"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LucideDownload, LucideMenu, LucideX } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";

const navLinks = [
    { href: "#home", lable: "Home" },
    { href: "#about", lable: "About" },
    { href: "#projects", lable: "Projects" },
    { href: "#experience", lable: "Experience" },
    { href: "#contact", lable: "Contact" }
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
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
                                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-white hover:bg-purple-600 dark:hover:bg-purple-500"
                            >
                                {link.lable}
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
                            text="Download CV"
                            href="/documents/cv.pdf"
                            download
                        />
                    </div>

                    <LanguageSwitcher />
                    <ThemeToggle />

                    {/* دکمه منوی موبایل */}
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {navOpen ? <LucideX size={20} /> : <LucideMenu size={20} />}
                    </button>
                </div>
            </div>

            {/* منوی موبایل */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    navOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-1 px-4 pb-4">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={() => setNavOpen(false)}
                                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
                            >
                                {link.lable}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-2">
                        <LinkButton
                            iconPosition="left"
                            icon={LucideDownload}
                            rounded
                            variant="outline"
                            text="Download CV"
                            href="/documents/cv.pdf"
                            download
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
}