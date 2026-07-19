import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // لیست زبان‌هایی که پشتیبانی می‌کنید
  locales: ['en', 'fa', 'ar'],

  // زبان پیش‌فرض وقتی کاربر آدرس خالی می‌زند
  defaultLocale: 'fa'
});

export const config = {
  // این خط باعث می‌شود middleware روی تمام صفحات اجرا شود (به جز API و فایل‌های استاتیک)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};