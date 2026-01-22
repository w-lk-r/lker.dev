import { ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-slate-200/60 dark:border-slate-700/60',
        'bg-white/40 dark:bg-slate-800/40',
        'backdrop-blur-sm shadow-lg',
        'transition-all duration-300',
        hover && 'hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
