import Image from 'next/image';
import Card from './ui/Card';
import { ReactNode } from 'react';

type SocialLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

type ProfileCardProps = {
  name: string;
  title: string;
  avatarUrl?: string;
  socialLinks?: SocialLink[];
};

export default function ProfileCard({
  name,
  title,
  avatarUrl,
  socialLinks = []
}: ProfileCardProps) {
  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Avatar */}
        {avatarUrl && (
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-lg">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            {name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {title}
          </p>
        </div>

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex gap-6 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-600 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
