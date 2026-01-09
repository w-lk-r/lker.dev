'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '@/i18n/navigation';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block my-1 px-4 py-3 rounded-md transition-all duration-200',
        'focus:outline-none',
        'border-b-2',
        isActive
          ? 'text-blue-400 font-semibold border-blue-400'
          : 'text-slate-100 hover:text-blue-300 border-transparent'
      )}
      href={href}
      {...rest}
    />
  );
}