import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
          <h1 className="">
            {t('title')}
          </h1>
  );
}
