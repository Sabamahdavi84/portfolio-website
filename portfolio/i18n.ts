// import {getRequestConfig} from 'next-intl/server';

// const locales = ['en', 'fa', 'ar'];

// export default getRequestConfig(async ({locale}) => {

//   const validatedLocale = (locale || 'fa') as string;


//   if (!locales.includes(validatedLocale)) {

//     return {
//       locale: 'fa' as string,
//       messages: {}
//     };
//   }

//   return {
//     locale: validatedLocale,
//     messages: {}
//   };
// });

import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'fa', 'ar'];

export default getRequestConfig(async ({locale}) => {
  const validatedLocale =
    locales.includes(locale ?? '') ? locale! : 'fa';

  // const messages = (await import(`./locales/${validatedLocale}/Landing.json`)).default;

  return {
    locale: validatedLocale,
    // messages:{}
  };
});
