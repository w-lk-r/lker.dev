import { useTranslations } from "next-intl";

export default function ShokaiPage() {
  const t = useTranslations('ShokaiPage')
  return (
          <h1 className="">
            {t('title')}
          </h1>
  );
}
