import { useTranslations } from "next-intl";
import ProfileCard from '../ProfileCard';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <ProfileCard
        name={t('name')}
        title={t('title')}
        avatarUrl="/avatar.jpg"
        socialLinks={socialLinks}
      />
    </div>
  );
}
