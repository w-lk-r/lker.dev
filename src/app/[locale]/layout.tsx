import { M_PLUS_1p, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navigation from "../../components/Navigation";
import BackgroundPattern from "../../components/BackgroundPattern";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus-1p",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}



export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

    // Enable static rendering
  setRequestLocale(locale);

  return(
    <html lang={locale}>
      <body
        className={`${mPlus1p.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundPattern />
        <NextIntlClientProvider>
          <Navigation/>
          {children}
          </NextIntlClientProvider>
      </body>
    </html>
  )
 
}