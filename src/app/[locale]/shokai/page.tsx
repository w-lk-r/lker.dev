import {use} from 'react';
import {routing} from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";
import ShokaiPage from '@/components/pages/ShokaiPage';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function About({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params);
  setRequestLocale(locale);

  return <ShokaiPage/>
}
