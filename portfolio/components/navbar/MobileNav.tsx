"use client"

import Link from "next/link";
import { LucideX, LucideDownload } from "lucide-react";
import LinkButton from "../ui/LinkButton";
import { useTranslations } from "next-intl";

interface NavLink {
    href: string;
    label: string;
}

interface MobileNavProps {
    navOpen: boolean;
    setNavOpen: (open: boolean) => void;
    navLinks: NavLink[];
}

export default function MobileNav({ navOpen, setNavOpen, navLinks }: MobileNavProps) {
    const t=useTranslations("Navbar")
    return (
        <>
            {/* overlay */}
            <div
                onClick={() => setNavOpen(false)}
                className={`fixed inset-0 z-40 lg:hidden bg-purple-950/50 backdrop-blur-sm transition-all duration-500 ${
                    navOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            />

            {/* drawer */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-[80%] sm:w-[60%] max-w-sm
                            bg-white dark:bg-[#0f0817]
                            border-l border-purple-200 dark:border-purple-500/20
                            shadow-2xl shadow-purple-900/20
                            transition-transform duration-500 ease-in-out
                            lg:hidden
                            flex flex-col
                            ${navOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* header */}
                <div className="flex items-center justify-between px-5 h-16 border-b border-purple-100 dark:border-purple-500/10">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {t('titlemobilenav')}
                    </span>
                    <button
                        onClick={() => setNavOpen(false)}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 transition-colors hover:bg-purple-100 dark:hover:bg-purple-900/60"
                        aria-label="Close menu"
                    >
                        <LucideX size={18} />
                    </button>
                </div>

                {/* links */}
                <ul className="flex flex-col gap-1 px-4 py-5 overflow-y-auto">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={() => setNavOpen(false)}
                                className="block px-4 py-3 rounded-xl text-sm font-medium
                                           text-gray-600 dark:text-gray-300
                                           hover:bg-purple-600 hover:text-white
                                           dark:hover:bg-purple-500
                                           transition-all duration-300"
                            >
                                {t(link.label)}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* footer */}
                <div className="mt-auto px-4 py-5 border-t border-purple-100 dark:border-purple-500/10">
                    <LinkButton
                        iconPosition="left"
                        icon={LucideDownload}
                        rounded
                        variant="outline"
                        text={t('downloadbtn')}
                        href="/documents/rezome.pdf"
                        download
                        className="!w-full !justify-center"
                    />
                </div>
            </aside>
        </>
    );
}