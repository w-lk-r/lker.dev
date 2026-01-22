import {use} from 'react';
import {routing} from '@/i18n/routing';
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomePage from '@/components/pages/HomePage';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(
  props: Omit<LayoutProps<'/[locale]'>, 'children'>
) {
  const {locale} = await props.params;

  const t = await getTranslations({
    locale: locale,
    namespace: 'HomePage'
  });

  return {
    title: t('title')
  };
}

export default function Home({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params);
  setRequestLocale(locale);

  return <HomePage/>
}
