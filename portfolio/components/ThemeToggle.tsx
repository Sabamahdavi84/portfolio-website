"use client";
import { useTheme } from "@/app/theme/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-7 rounded-full transition-colors duration-500 ease-in-out
                 bg-purple-100 dark:bg-purple-500/60
                 shadow-inner border border-purple-300 dark:border-purple-500/30"
      aria-label="تغییر تم"
    >
      {/* دایره متحرک */}
      <div
        className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-purple-400 shadow-md
                    flex items-center justify-center transition-transform duration-500 ease-in-out
                    ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
      >
        {/* آیکون داخل دایره */}
        {theme === "dark" ? (
          <Moon size={16} className="text-violet-200" strokeWidth={2.5} />
        ) : (
          <Sun size={16} className="text-violet-500" strokeWidth={2.5} />
        )}
      </div>
    </button>
  );
}