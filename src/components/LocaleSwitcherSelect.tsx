'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative inline-flex items-center',
        'border border-slate-700 rounded-md',
        'bg-slate-800 text-slate-100',
        'transition-all duration-200',
        'hover:bg-slate-700 hover:border-slate-600 hover:text-blue-300',
        'focus-within:ring-2 focus-within:ring-blue-400',
        isPending && 'opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="appearance-none bg-transparent px-3 py-1 pr-8 cursor-pointer focus:outline-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">⌄</span>
    </label>
  );
}