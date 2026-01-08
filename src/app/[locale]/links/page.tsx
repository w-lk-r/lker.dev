import {use} from 'react';
import {routing} from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";
import LinksPage from '@/components/pages/LinksPage';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function Links({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params);
  setRequestLocale(locale);

  return <LinksPage/>
}
