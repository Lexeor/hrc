import Button from '@/components/ui/Button.tsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { type FC, useState } from 'react';

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
          className="flex items-center justify-between rounded-xl bg-background/85 px-4 py-3 shadow-sm backdrop-blur-md">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none" onClick={close}>
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
            <Button href="#contact" className="hidden sm:inline-flex px-4 py-2">
              Записаться
              <ArrowUpRightIcon size={14} />
            </Button>
            <button
              className="md:hidden p-2 rounded-lg bg-foreground/5 transition-colors duration-150 hover:bg-foreground/10"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setOpen(o => !o)}
            >
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

              <div className="border-t border-foreground/6 px-4 py-4">
                <Button href="#contact" onClick={close} className="w-full justify-center">
                  Записаться
                  <ArrowUpRightIcon size={14} />
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
