import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type FC, type ReactNode, useState } from 'react';

interface FlippingCardProps {
  frontSide: { node: ReactNode, style?: string };
  backSide: { node: ReactNode, style?: string };
  className?: string;
}

interface FloatingElementProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export const FloatingElement: FC<FloatingElementProps> = ({
  children,
  depth = 20,
  className,
}: FloatingElementProps) => {
  return (
    <div
      className={className}
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

const FlippingCard: FC<FlippingCardProps> = ({
  frontSide,
  backSide,
  className,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn('relative w-80 h-96 cursor-pointer perspective-1000 select-none', className)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
        }}
      >
        {/* Front Side */}
        <motion.div
          className={cn('absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-white grainy before:rounded-2xl', frontSide.style)}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            pointerEvents: isFlipped ? 'none' : 'auto',
          }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="pointer-events-none absolute inset-[3px] rounded-xl border border-dashed border-black/15"
            aria-hidden
          />
          {frontSide.node}
        </motion.div>

        {/* Back Side */}
        <motion.div
          className={cn('absolute inset-0 w-full h-full flex flex-col items-start justify-start p-8 rounded-2xl bg-white grainy before:rounded-2xl', backSide.style)}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            rotateY: 180,
            translateZ: 1,
          }}
          animate={{
            pointerEvents: isFlipped ? 'auto' : 'none',
          }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="pointer-events-none absolute inset-[3px] rounded-xl border border-dashed border-white/40"
            aria-hidden
          />
          {backSide.node}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlippingCard;
