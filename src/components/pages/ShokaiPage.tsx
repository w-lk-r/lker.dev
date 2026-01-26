import { useTranslations } from "next-intl";
import { TimelineSection, TimelineItem } from '../Timeline';

type EmploymentEntry = {
  company: string;
  role?: string;
  period: string;
  duration?: string;
  location?: string;
  description?: string;
};

type EducationEntry = {
  institution: string;
  degree?: string;
  period: string;
  location?: string;
  grade?: string;
  description?: string;
};

export default function ShokaiPage() {
  const t = useTranslations('ShokaiPage');

  // Helper to safely get translation value
  const safeTranslation = (key: string): string | undefined => {
    const value = t(key);
    // Return undefined if empty string
    return value === '' ? undefined : value;
  };

  // Get employment entries
  const employmentEntries: EmploymentEntry[] = [];
  for (let i = 0; i < 5; i++) {
    try {
      const company = safeTranslation(`employment.entries.${i}.company`);
      const period = safeTranslation(`employment.entries.${i}.period`);

      if (!company || !period) continue;

      employmentEntries.push({
        company,
        period,
        role: safeTranslation(`employment.entries.${i}.role`),
        duration: safeTranslation(`employment.entries.${i}.duration`),
        location: safeTranslation(`employment.entries.${i}.location`),
        description: safeTranslation(`employment.entries.${i}.description`),
      });
    } catch {
      continue;
    }
  }

  // Get education entries
  const educationEntries: EducationEntry[] = [];
  for (let i = 0; i < 6; i++) {
    try {
      const institution = safeTranslation(`education.entries.${i}.institution`);
      const period = safeTranslation(`education.entries.${i}.period`);

      if (!institution || !period) continue;

      educationEntries.push({
        institution,
        period,
        degree: safeTranslation(`education.entries.${i}.degree`),
        location: safeTranslation(`education.entries.${i}.location`),
        grade: safeTranslation(`education.entries.${i}.grade`),
        description: safeTranslation(`education.entries.${i}.description`),
      });
    } catch {
      continue;
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12">
        {t('title')}
      </h1>

      <div className="space-y-12">
        {/* Employment History */}
        <TimelineSection title={t('employment.title')}>
          {employmentEntries.map((entry, index) => (
            <TimelineItem
              key={index}
              title={entry.company}
              subtitle={entry.role}
              period={entry.period}
              duration={entry.duration}
              location={entry.location}
              description={entry.description}
              isLast={index === employmentEntries.length - 1}
            />
          ))}
        </TimelineSection>

        {/* Education */}
        <TimelineSection title={t('education.title')}>
          {educationEntries.map((entry, index) => (
            <TimelineItem
              key={index}
              title={entry.institution}
              subtitle={entry.degree}
              period={entry.period}
              location={entry.location}
              grade={entry.grade}
              description={entry.description}
              isLast={index === educationEntries.length - 1}
            />
          ))}
        </TimelineSection>
      </div>
    </div>
  );
}
