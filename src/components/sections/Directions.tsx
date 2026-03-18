import H2 from '@/components/Typography/H2.tsx';
import SectionLabel from '@/components/Typography/SectionLabel.tsx';
import Button from '@/components/ui/Button.tsx';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { type FC, type MouseEvent, type ReactNode } from 'react';

const AUDIENCES = [
  {
    number: '01',
    title: 'Студентам и выпускникам',
    subtitle: 'Даже если вы ещё ни разу не делали резюме',
    description:
      'Вы только начинаете — и это нормально. Вместе разберёмся, как правильно оформить опыт, что написать, если его почти нет, и как произвести нужное впечатление с первых шагов.',
    tags: ['Первое резюме', 'Стажировки', 'Старт карьеры'],
    cardBg: 'bg-background',
    numColor: 'text-primary-300/70',
  },
  {
    number: '02',
    title: 'Специалистам разных отраслей',
    subtitle: 'Вне зависимости от уровня опыта',
    description:
      'Хотите сменить компанию, направление или формат работы — помогу переупаковать ваш опыт, найти сильные стороны и выйти на рынок уверенно.',
    tags: ['Смена компании', 'Карьерный рост'],
    cardBg: 'bg-primary-50/60',
    numColor: 'text-primary-400/75',
  },
  {
    number: '03',
    title: 'Руководителям подразделений',
    subtitle: 'Производство, бэк-офис и другие',
    description:
      'На управленческом уровне рынок другой — и требования другие. Знаю, как позиционировать управленческий опыт и находить возможности, которых не видно снаружи.',
    tags: ['Управление командой', 'Переговоры'],
    cardBg: 'bg-primary-100/50',
    numColor: 'text-primary-500/75',
  },
];

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard: FC<TiltCardProps> = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 25 });

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
    <div style={{ perspective: 900 }} className="w-full h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Directions: FC = () => {
  return (
    <section id="directions"
             className="relative overflow-hidden min-h-screen py-32 px-4 bg-primary-50/60 grainy flex flex-col justify-center">
      <div className="relative z-10 mx-auto max-w-[1280px]">

        <SectionLabel>Направления</SectionLabel>
        <div className="mb-14 flex flex-col gap-0 md:flex-row md:items-end md:justify-between">
          <H2>Кому я могу помочь эффективнее</H2>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-15">
          {AUDIENCES.map((audience, i) => (
            <motion.div
              key={audience.number}
              className="h-full"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
            >
              <TiltCard
                className={`relative flex flex-col gap-5 rounded-2xl ${audience.cardBg} p-7 h-full shadow-xs hover:shadow-md transition-shadow duration-300 cursor-default`}
              >
                {/* Title + subtitle */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[1.05rem] font-semibold leading-snug">{audience.title}</h3>
                  <p className="text-sm font-medium text-primary-600/80 leading-snug">{audience.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {audience.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {audience.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary-100/80 px-3 py-1 text-xs font-medium text-primary-700/80"
                    >
                        {tag}
                      </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* "Don't know where to start" banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
          className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-primary-500 px-8 py-7 grainy"
        >
          <div>
            <p className="font-semibold text-white text-base leading-snug">
              Если вы не знаете, с чего начать
            </p>
            <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
              Обращайтесь — вместе разберёмся, что подойдёт именно вам, и наметим первые шаги.
            </p>
          </div>

          <Button href="#contact" variant="secondary" className="shrink-0 sm:ml-4 px-5 py-2.5 whitespace-nowrap">
            Я помогу
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Directions;
