import Card from './ui/Card';
import { ReactNode } from 'react';
import Image from 'next/image';

type LinkCardProps = {
  title: string;
  description?: string;
  url: string;
  icon?: ReactNode;
  previewImage?: string;
  scrapedDescription?: string;
};

export default function LinkCard({ title, description, url, icon, previewImage, scrapedDescription }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card hover className="overflow-hidden p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-400/10 dark:bg-blue-400/20 flex items-center justify-center">
              {icon}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                {description}
              </p>
            )}
            {scrapedDescription && (
              <>
                <div className="my-3 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
                <p className="text-xs text-slate-500 dark:text-slate-500 italic line-clamp-2">
                  {scrapedDescription}
                </p>
              </>
            )}
          </div>

          {/* Preview Image */}
          {previewImage && (
            <div className="relative flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
              <Image
                src={previewImage}
                alt={title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}

          {/* Arrow indicator */}
          <div className="flex-shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200 group-hover:translate-x-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 3l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Card>
    </a>
  );
}
