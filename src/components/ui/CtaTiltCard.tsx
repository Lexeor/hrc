import Button from '@/components/ui/Button.tsx';
import { FloatingElement } from '@/components/ui/FlippingCard.tsx';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { FC, MouseEvent } from 'react';

const CtaTiltCard: FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 25 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: 800 }} className="w-full h-56">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative flex flex-col items-start justify-between w-full h-full rounded-2xl bg-primary-500 p-7 grainy before:rounded-2xl"
      >
        <FloatingElement depth={30}>
          <p className="text-lg font-bold text-white leading-snug mb-3">
            Не знаете, с чего начать?
          </p>
        </FloatingElement>
        <FloatingElement depth={20}>
          <p className="text-sm text-white/75 leading-relaxed">
            Запишитесь на бесплатный 15-минутный разговор — вместе разберёмся, что нужно именно вам.
          </p>
        </FloatingElement>
        <FloatingElement depth={30} className="mt-auto">
          <Button href="#contact" variant="secondary" className="px-5 py-2.5">
            Давайте поговорим
          </Button>
        </FloatingElement>
      </motion.div>
    </div>
  );
};

export default CtaTiltCard;
