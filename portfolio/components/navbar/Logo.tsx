import Link from "next/link";
import { LucideCodeXml } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group ml-4 mr-4">
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-violet-500/40">
        <LucideCodeXml className="h-5 w-5" />
        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <p className="hidden sm:block text-lg font-semibold tracking-wide text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 md:text-xl">
        Saba
      </p>
    </Link>
  );
}