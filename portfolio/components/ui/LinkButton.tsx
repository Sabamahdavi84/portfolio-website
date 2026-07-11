import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  rounded?: boolean;
  download?: boolean;
  variant?: "primary" | "outline";
  className?: string;
}

export default function LinkButton({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded,
  download = false,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  const baseStyle = `
    relative inline-flex items-center justify-center gap-2
    overflow-hidden
    px-6 py-3
    text-sm
    font-semibold
    ${rounded ? "rounded-full" : "rounded-xl"}
    border
    transition-all duration-300
    hover:-translate-y-0.5
    hover:scale-[1.02]
    active:scale-[0.98]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2
    dark:focus-visible:ring-offset-[#0f0817]
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600
      text-white
      border-transparent
      shadow-lg shadow-violet-500/25
      hover:shadow-violet-500/40
      hover:from-violet-500
      hover:via-purple-500
      hover:to-fuchsia-500
      dark:shadow-violet-500/10
      dark:hover:shadow-violet-500/25
    `,
    outline: `
      bg-transparent
      text-violet-600
      border-violet-500/40
      hover:bg-violet-600/10
      hover:border-violet-500
      hover:text-violet-500
      dark:text-violet-400
      dark:border-violet-400/40
      dark:hover:bg-violet-500/10
      dark:hover:text-violet-300
    `,
  };

  return (
    <Link
      download={download}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      href={href}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 z-10" />}
      <span className="z-10">{text}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 z-10" />}
    </Link>
  );
}