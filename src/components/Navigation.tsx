import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
      <nav className="sticky top-0 z-50 flex justify-between bg-purple-800">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/shokai">{t('shokai')}</NavigationLink>
          <NavigationLink href="/links">{t('links')}</NavigationLink>
        </div>
          <LocaleSwitcher />
      </nav>
  );
}