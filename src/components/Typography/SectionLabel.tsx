import { cn } from '@/lib/utils.ts';
import type { FC, PropsWithChildren } from 'react';

const SectionLabel: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <p className={cn('-mb-2 font-caveat font-semibold text-4xl text-primary-500 md:text-5xl', className)}>
      {children}
    </p>
  );
};

export default SectionLabel;
