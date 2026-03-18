import { cn } from '@/lib/utils.ts';
import type { FC, PropsWithChildren } from 'react';

const H2: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <h2 className={cn('text-4xl font-medium tracking-tight md:text-5xl', className)}>
      {children}
    </h2>
  );
};

export default H2;
