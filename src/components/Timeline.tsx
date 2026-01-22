import { ReactNode } from 'react';

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  period: string;
  duration?: string;
  location?: string;
  description?: string;
  grade?: string;
  isLast?: boolean;
};

export function TimelineItem({
  title,
  subtitle,
  period,
  duration,
  location,
  description,
  grade,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0">
        <div className="w-3 h-3 bg-blue-400 rounded-full border-2 border-white dark:border-slate-900"></div>
        {!isLast && (
          <div className="absolute left-1/2 top-3 w-0.5 h-full bg-slate-200 dark:bg-slate-700 -translate-x-1/2"></div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          {subtitle && (
            <p className="text-base text-slate-700 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>

        {(period || duration || location || grade) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
            {period && <span className="font-medium">{period}</span>}
            {duration && <span>• {duration}</span>}
            {location && <span>• {location}</span>}
            {grade && <span>• {grade}</span>}
          </div>
        )}

        {description && (
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

type TimelineSectionProps = {
  title: string;
  children: ReactNode;
};

export function TimelineSection({ title, children }: TimelineSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
