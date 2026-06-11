import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, Send, Sparkles, X } from 'lucide-react';
import { config } from '../../config';
import { useEastPage } from '../../contexts/EastLocaleContext';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { scrollToLeadFormAfterModal } from '../../utils/scrollToLeadFormAfterModal';
import { getWhatsAppLink } from '../../utils/whatsapp';

const TIME_DELAY_MS = 30_000;

const trackPopup = (action: 'open' | 'close' | 'cta_phone' | 'cta_whatsapp' | 'cta_form', trigger?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'east_popup', { action, trigger });
  }
};

const EastBookingPopup = () => {
  const { copy, fontClass, locale } = useEastPage();
  const b = copy.booking;
  const [open, setOpen] = useState(false);

  const openPopup = useCallback(
    (trigger: string) => {
      if (typeof window === 'undefined') return;
      if (sessionStorage.getItem(b.sessionKey) === '1') return;
      sessionStorage.setItem(b.sessionKey, '1');
      setOpen(true);
      trackPopup('open', trigger);
    },
    [b.sessionKey],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(b.sessionKey) === '1') return;

    const timer = window.setTimeout(() => openPopup('time'), TIME_DELAY_MS);

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) openPopup('exit_intent');
    };

    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [openPopup, b.sessionKey]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    trackPopup('close');
  };

  const handleForm = () => {
    trackPopup('cta_form');
    setOpen(false);
    scrollToLeadFormAfterModal('east-lead-form');
  };

  const waHref = getWhatsAppLink({ text: b.waPrefill });
  const closeCorner = b.dir === 'rtl' ? 'left-3' : 'right-3';

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="east-popup"
          className={`${fontClass} fixed inset-0 z-[100] flex items-center justify-center px-4 py-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          dir={b.dir}
        >
          <button
            type="button"
            aria-label={b.closeOverlayAria}
            onClick={close}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="east-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl"
          >
            <div className="relative bg-black px-6 py-5 text-white md:px-8 md:py-6">
              <button
                type="button"
                onClick={close}
                aria-label={b.closeBtnAria}
                className={`absolute top-3 grid h-9 w-9 place-items-center text-white/70 transition-colors hover:bg-white/10 hover:text-white ${closeCorner}`}
              >
                <X size={18} strokeWidth={2} />
              </button>

              <div className="flex items-center gap-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                <p className="text-[11px] font-semibold tracking-wider text-white/70">{b.topLine}</p>
              </div>

              <h3 id="east-popup-title" className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">{b.lead}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-white/70 md:text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={12} strokeWidth={2} className="text-amber-400" />
                  {b.perk1}
                </span>
                <span className="text-white/30">·</span>
                <span>{b.perk2}</span>
                <span className="text-white/30">·</span>
                <span>{b.perk3}</span>
              </div>
            </div>

            <div className="grid gap-3 px-6 py-6 md:px-8 md:py-7">
              <a
                href={`tel:${config.phoneNumber}`}
                title={locale === 'ar' ? 'اتصل بنا' : 'Call us'}
                onClick={() => {
                  trackMarketingContact('phone');
                  trackPopup('cta_phone');
                  setOpen(false);
                }}
                className="group inline-flex w-full items-center justify-between gap-3 bg-black px-5 py-4 text-base font-bold text-white transition-colors hover:bg-zinc-800"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Phone size={18} strokeWidth={2} />
                  {b.callCta}
                </span>
                <span className="flex shrink-0 flex-col items-end gap-0.5 text-end">
                  <span className="text-[11px] font-semibold tracking-wide text-white/70 group-hover:text-white">
                    {b.fastReply}
                  </span>
                </span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackMarketingContact('whatsapp');
                  trackPopup('cta_whatsapp');
                  setOpen(false);
                }}
                className="group inline-flex w-full items-center justify-between gap-3 bg-[#25D366] px-5 py-4 text-base font-bold text-white transition-colors hover:bg-[#20bd5a]"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MessageCircle size={18} />
                  {b.waCta}
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-white/80 group-hover:text-white">
                  {b.waBadge}
                </span>
              </a>

              <button
                type="button"
                onClick={handleForm}
                className="inline-flex w-full items-center justify-between gap-3 border border-black bg-white px-5 py-4 text-base font-bold text-black transition-colors hover:bg-stone-50"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Send size={18} />
                  {b.formCta}
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-zinc-500">{b.formBadge}</span>
              </button>
            </div>

            <div className="border-t border-zinc-100 bg-stone-50 px-6 py-4 text-xs leading-relaxed text-zinc-600 md:px-8 md:text-sm">
              <p>{b.trust}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default EastBookingPopup;
