import { useTranslations } from "next-intl";

export default function LinksPage() {
  const t = useTranslations('LinksPage')
  return (
          <h1 className="">
            {t('title')}
          </h1>
  );
}
