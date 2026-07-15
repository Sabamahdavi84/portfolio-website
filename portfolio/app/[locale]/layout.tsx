// app/[locale]/layout.tsx

import { NextIntlClientProvider } from "next-intl";
import { promises as fs } from "fs";
import path from "path";
// import ToastProvider from "@/components/ToastProvider";
import type { Metadata } from "next";
import { vazirmatn , inter } from "@/app/lib/fonts";

const titles = {
  fa: "پورتفولیو شخصی من",
  en: "My Portfolio"
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = params instanceof Promise ? await params : params;

  return {
    title: titles[locale as keyof typeof titles] || titles.fa,
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}

const RTL_LOCALES = ["fa", "ar"];

const LOCALE_STRUCTURE: Record<string, string> = {
  // فایل جدید؟ فقط یک خط اضافه کن:
  navbar:"navbar",
  hero:"hero",
  about:"about",
  skills:"skills",
  projects:"projects"
  // newfile: "folder1/folder2/newfile",
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params instanceof Promise ? await params : params;
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";

  const basePath = path.join(process.cwd(), "locales", locale);
  // const fontClass = vazirmatn.className;

const fontClass =
  locale === "fa"
    ? vazirmatn.className
    : inter.className;

  // ✅ خواندن موازی فایل‌ها
  const messages = await loadAllMessages(basePath, LOCALE_STRUCTURE);

  return (
    <div className={fontClass} lang={locale} dir={dir}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
         {/* <ToastProvider /> */}
      </NextIntlClientProvider>
    </div>
  );
}

// ✅ تابع کمکی - خواندن موازی با try/catch
async function loadAllMessages(basePath: string, structure: Record<string, string>) {
  const messages: Record<string, any> = {};
  const entries = Object.entries(structure);

  await Promise.all(
    entries.map(async ([namespace, relativePath]) => {
      try {
        const filePath = path.join(basePath, `${relativePath}.json`);
        const content = await fs.readFile(filePath, "utf-8");
        Object.assign(messages, JSON.parse(content));
      } catch (error) {
        console.warn(`⚠️ Missing: "${namespace}" for locale`);
      }
    })
  );

  return messages;
}
