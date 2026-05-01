import H2 from '@/components/Typography/H2.tsx';
import SectionLabel from '@/components/Typography/SectionLabel.tsx';
import CtaTiltCard from '@/components/ui/CtaTiltCard.tsx';
import FlippingCard, { FloatingElement } from '@/components/ui/FlippingCard.tsx';
import { BriefcaseIcon, CompassIcon, FileTextIcon, LifeBuoyIcon, MicVocalIcon, RefreshCwIcon } from 'lucide-react';
import type { FC } from 'react';

const SERVICES = [
  {
    icon: BriefcaseIcon,
    title: 'Карьерные развилки и кейсы',
    description:
      'Сменить сферу, получить повышение, разобраться в сложной рабочей ситуации — обсудим и найдём разумный выход вместе',
  },
  {
    icon: CompassIcon,
    title: 'Тактика поиска',
    description:
      'Разберёмся, где искать вакансии, как откликаться и выходить на нужные компании напрямую',
  },
  {
    icon: MicVocalIcon,
    title: 'Подготовка к собеседованию',
    description:
      'Разберём типичные вопросы, проработаем ваши ответы, потренируемся вживую, чтобы вы пришли на встречу подготовленным',
  },
  {
    icon: LifeBuoyIcon,
    title: 'Пакетное сопровождение',
    description:
      'Резюме + 3 консультации + онлайн-поддержка',
  },
  {
    icon: FileTextIcon,
    title: 'Резюме, которое работает',
    description:
      'Помогу сделать резюме, которое не теряется и привлекает внимание с первых секунд ',
  },
];

const Services: FC = () => {
  return (
    <section id="services"
             className="relative overflow-hidden min-h-screen py-32 px-4 bg-primary-50/60 grainy flex flex-col justify-center">
      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* Section header */}
        <SectionLabel>Услуги</SectionLabel>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-14">
          <H2>
            Чем я могу помочь
          </H2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            return (
              <FlippingCard
                key={index}
                frontSide={{
                  style: 'bg-white border border-white/20 justify-start',
                  node: (
                    <>
                      <FloatingElement depth={30}
                                       className="text-2xl font-medium text-black align-top w-full leading-tight">
                        {service.title}
                      </FloatingElement>
                      <FloatingElement depth={30}
                                       className="mt-4 text-black/50 align-top w-full text-sm leading-snug">
                        {service.description}
                      </FloatingElement>
                      <FloatingElement depth={60} className="absolute right-4 bottom-4">
                        <RefreshCwIcon size={48} strokeWidth={2.5} className="text-black opacity-10" />
                      </FloatingElement>
                    </>
                  ),
                }}
                backSide={{
                  style: 'bg-primary-500',
                  node: (
                    <>
                      <FloatingElement depth={30}
                                       className="text-sm leading-snug tracking-tight font-light text-white align-top w-full">
                        {service.description}
                      </FloatingElement>
                      <FloatingElement depth={60} className="absolute left-4 bottom-4">
                        <RefreshCwIcon size={48} strokeWidth={2.5} className="text-white opacity-20" />
                      </FloatingElement>
                    </>
                  ),
                }}
                className="w-full h-56"
              />
            );
          })}

          {/* Last card — CTA */}
          <CtaTiltCard />
        </div>

      </div>
    </section>
  );
};

export default Services;
