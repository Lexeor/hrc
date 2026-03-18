import Button from '@/components/ui/Button.tsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { type FC, useState } from 'react';

const TelegramIcon: FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-672.000000, -48.000000)">
        <g transform="translate(672.000000, 48.000000)">
          <path
            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
            fill-rule="nonzero">

          </path>
          <path
            d="M19.7773,4.42984 C20.8652,3.97177 22.0315,4.8917 21.8394,6.05639 L19.5705,19.8131 C19.3517,21.1395 17.8949,21.9006 16.678,21.2396 C15.6597,20.6865 14.1489,19.8352 12.7873,18.9455 C12.1074,18.5012 10.0255,17.0766 10.2814,16.0625 C10.5002,15.1954 14.0001,11.9375 16.0001,10 C16.7857,9.23893 16.4279,8.79926 15.5001,9.5 C13.1985,11.2383 9.50332,13.8812 8.28136,14.625 C7.20323,15.2812 6.64031,15.3932 5.96886,15.2812 C4.74273,15.0769 3.60596,14.7605 2.67788,14.3758 C1.42351,13.8558 1.48461,12.132 2.67703,11.63 L19.7773,4.42984 Z"
            fill="currentColor">
          </path>
        </g>
      </g>
    </g>
  </svg>
);

const NAV_LINKS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Направления', href: '#directions' },
  { label: 'Как я работаю', href: '#how-it-works' },
  { label: 'Контакты', href: '#contact' },
];

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div className="w-full max-w-[1280px]">

        {/* Bar */}
        <div
          className="flex items-center justify-between rounded-2xl bg-background/85 px-2 py-2 shadow-sm backdrop-blur-md">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none ml-2" onClick={close}>
            <span className="text-sm font-bold tracking-tight">Тамара Шаврадзе</span>
            <span className="text-xs text-foreground/45 font-medium">карьерный консультант</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button href="#contact" className="hidden sm:inline-flex px-4 py-3 h-12">
              Записаться
              <ArrowUpRightIcon size={14} />
            </Button>
            <Button
              className="hidden sm:inline-flex h-12 w-12 justify-center bg-[#229ED9] text-white! shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-[#1a8ec3] active:bg-[#167aab]"
            >
              <TelegramIcon size={20} />
            </Button>
            <button
              className="relative md:hidden p-2.5 rounded-xl bg-primary-500 grainy text-white! transition-colors duration-150 hover:bg-primary-600 active:bg-primary-600/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.15)]"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setOpen(o => !o)}
            >
              <span className="pointer-events-none absolute inset-[3px] rounded-lg border border-dashed border-white/40"
                    aria-hidden />
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <XIcon size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <MenuIcon size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' as const }}
              className="mt-2 overflow-hidden rounded-xl bg-background/95 shadow-md backdrop-blur-md"
            >
              <nav className="flex flex-col px-2 py-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: i * 0.04, ease: 'easeOut' as const }}
                    className="rounded-lg px-4 py-3.5 text-2xl font-light tracking-tight text-foreground/70 hover:bg-foreground/4 hover:text-foreground transition-colors duration-150"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="border-t border-foreground/6 px-4 py-4 flex flex-col gap-3">
                <Button href="#contact" onClick={close} className="w-full justify-center">
                  Записаться
                  <ArrowUpRightIcon size={14} />
                </Button>
                <Button
                  href="https://t.me/tamara_shavradze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center bg-[#229ED9] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-[#1a8ec3] active:bg-[#167aab]"
                >
                  <TelegramIcon size={16} />
                  Написать в Telegram
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
