import H2 from '@/components/Typography/H2.tsx';
import SectionLabel from '@/components/Typography/SectionLabel.tsx';
import Button from '@/components/ui/Button.tsx';
import { cn } from '@/lib/utils.ts';
import { ArrowUpRightIcon, ChevronDownIcon } from 'lucide-react';
import { type FC, useState } from 'react';

const SERVICE_OPTIONS = [
  'Создание резюме',
  'Стратегия поиска работы',
  'Подготовка к собеседованию',
  'Полное сопровождение',
  'Карьерный или рабочий кейс',
  'Пока не знаю — хочу поговорить',
];

const Select: FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={cn(
          'flex w-full items-center justify-between rounded-xl bg-background/80 px-4 py-3 text-sm shadow-xs transition-shadow duration-150',
          value ? 'text-foreground' : 'text-foreground/35',
          open && 'shadow-sm',
        )}
      >
        <span>{value || 'Выберите тему'}</span>
        <ChevronDownIcon
          size={16}
          className={cn('shrink-0 text-foreground/40 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <ul
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl bg-background shadow-md">
          {SERVICE_OPTIONS.map(option => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={cn(
                  'w-full px-4 py-2.5 text-left text-sm transition-colors duration-100 hover:bg-primary-50 hover:text-primary-700',
                  value === option && 'bg-primary-50 font-semibold text-primary-700',
                )}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TelegramIcon: FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const Contact: FC = () => {
  const [consent, setConsent] = useState(false);

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-[1280px]">

        <div className="relative overflow-hidden rounded-3xl bg-primary-50/60 p-10 md:p-16 lg:p-20 grainy">
          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-stretch">
            {/* Left — text + photo */}
            <div className="flex flex-col gap-6 lg:self-stretch">
              <div>
                <SectionLabel>Контакты</SectionLabel>
                <H2>
                  Давайте<br />
                  знакомиться
                </H2>
                <p className="mt-4 text-base text-foreground/60 leading-relaxed max-w-sm">
                  Оставьте заявку — я отвечу в течение дня. Сначала просто поговорим: расскажете, что происходит, я
                  скажу, чем могу помочь.
                </p>
              </div>

              {/* Photo placeholder */}
              <div className="relative flex-1 overflow-hidden rounded-2xl bg-primary-100/70 grainy min-h-[200px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-primary-400/50">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="text-xs font-medium tracking-wide">Фото</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">Как вас
                    зовут?</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="rounded-xl bg-background/80 px-4 py-3 text-sm shadow-xs placeholder:text-foreground/30 focus:shadow-sm focus:outline-none transition-shadow duration-150"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">Как
                    связаться?</label>
                  <input
                    type="text"
                    placeholder="Telegram или телефон"
                    className="rounded-xl bg-background/80 px-4 py-3 text-sm shadow-xs placeholder:text-foreground/30 focus:shadow-sm focus:outline-none transition-shadow duration-150"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">Расскажите чуть
                  подробнее</label>
                <textarea
                  rows={4}
                  placeholder="Что сейчас происходит? Что хотите изменить?"
                  className="rounded-xl bg-background/80 px-4 py-3 text-sm shadow-xs placeholder:text-foreground/30 focus:shadow-sm focus:outline-none transition-shadow duration-150 resize-none"
                />
              </div>

              {/* Consent checkbox */}
              <label className="flex cursor-pointer items-center gap-3">
                <div className="relative shrink-0">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="sr-only"
                    required
                  />
                  <div className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-md border-2 transition-colors duration-150',
                    consent ? 'border-primary-500 bg-primary-500' : 'border-foreground/20 bg-background/80',
                  )}>
                    {consent && (
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                        <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs leading-relaxed text-foreground/45">
                  Я даю согласие на обработку моих персональных данных
                </span>
              </label>

              <Button
                type="submit"
                disabled={!consent}
                className="relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white grainy hover:bg-primary-600 transition-colors duration-150"
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Отправить заявку
                  <ArrowUpRightIcon size={15} />
                </span>
              </Button>

              {/* Divider */}
              <div className="relative my-1 flex items-center gap-3">
                <div className="h-px flex-1"
                     style={{ background: 'linear-gradient(to right, transparent, rgba(28,41,24,0.15) 40%, rgba(28,41,24,0.15) 60%)' }} />
                <span className="shrink-0 text-xs font-medium text-foreground/35">или</span>
                <div className="h-px flex-1"
                     style={{ background: 'linear-gradient(to left, transparent, rgba(28,41,24,0.15) 40%, rgba(28,41,24,0.15) 60%)' }} />
              </div>

              {/* Telegram CTA */}
              <Button
                href="https://t.me/tamara_shavradze"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center text-md leading-none bg-[#229ED9] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-[#1a8ec3] active:bg-[#167aab]"
              >
                <TelegramIcon size={18} />
                Написать в Telegram
              </Button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
