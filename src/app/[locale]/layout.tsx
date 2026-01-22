import { M_PLUS_1p, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navigation from "../../components/Navigation";
import BackgroundPattern from "../../components/BackgroundPattern";
import type { Metadata } from 'next';

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: {
      default: 'w-lk-r.com | Jonathan Walker',
      template: '%s | w-lk-r.com'
    },
    description: 'CPA | Software Engineer | Japanese Learner. Portfolio and professional timeline of Jonathan Walker.',
    keywords: ['Jonathan Walker', 'Software Engineer', 'CPA', 'Developer', 'Portfolio', 'w-lk-r'],
    authors: [{ name: 'Jonathan Walker' }],
    creator: 'Jonathan Walker',
    publisher: 'Jonathan Walker',
    metadataBase: new URL('https://w-lk-r.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'jp': '/jp',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'jp' ? 'ja_JP' : 'en_US',
      url: 'https://w-lk-r.com',
      siteName: 'w-lk-r.com',
      title: 'Jonathan Walker | Software Engineer & CPA',
      description: 'CPA | Software Engineer | Japanese Learner',
      images: [
        {
          url: '/opengraph-image.svg',
          width: 1200,
          height: 630,
          alt: 'w-lk-r.com - Jonathan Walker',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jonathan Walker | Software Engineer & CPA',
      description: 'CPA | Software Engineer | Japanese Learner',
      images: ['/twitter-image.svg'],
      creator: '@w_lk_r',
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/apple-icon.svg', type: 'image/svg+xml' },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
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