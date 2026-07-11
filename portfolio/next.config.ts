import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// ۱. اضافه کردن پلاگین next-intl
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {

        source: '/:locale/diet',
        destination: '/:locale/diet/landing',
        permanent: false, 
      },
    ];
  },
};

// ۴. اکسپورت کردن با پلاگین
export default withNextIntl(nextConfig);