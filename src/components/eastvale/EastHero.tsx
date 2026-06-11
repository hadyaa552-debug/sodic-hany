import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { useEastvalePage } from '../../contexts/EastvaleLocaleContext';

/** Hero art from brochures (PDF render) */
const HERO_IMAGE = '/sections/eastvale/raw/apartments-page-01-1600.webp';
const HERO_SRCSET =
  '/sections/eastvale/raw/apartments-page-01-640.webp 640w, /sections/eastvale/raw/apartments-page-01-1024.webp 1024w, /sections/eastvale/raw/apartments-page-01-1600.webp 1600w';

const EastHero = () => {
  const { copy, whatsappEastvale, fontClass, locale } = useEastvalePage();
  const h = copy.hero;

  const scrollToLeadForm = () => {
    document.getElementById('eastvale-lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('eastvale-units')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = getWhatsAppLink({ text: whatsappEastvale });
  const sideVignette =
    locale === 'ar'
      ? 'bg-gradient-to-l from-black/70 via-black/30 to-transparent'
      : 'bg-gradient-to-r from-black/70 via-black/30 to-transparent';

  return (
    <section
      id="hero"
      className="relative min-h-[68vh] overflow-hidden bg-black md:min-h-screen"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <img
        src={HERO_IMAGE}
        srcSet={HERO_SRCSET}
        alt={h.imgAlt}
        width={1200}
        height={800}
        sizes="100vw"
        decoding="async"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/90"
        aria-hidden
      />
      <div className={`absolute inset-0 ${sideVignette}`} aria-hidden />

      <div className="relative z-10 flex min-h-[68vh] items-end pb-20 pt-20 md:min-h-screen md:pb-32 md:pt-24">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-6 max-w-2xl border-2 border-emerald-400/90 bg-emerald-950/40 px-4 py-3 shadow-lg shadow-black/25 backdrop-blur-md md:mb-7 md:px-5 md:py-4"
          >
            <p
              className={`${fontClass} text-base font-bold leading-snug text-white sm:text-lg md:text-2xl md:leading-tight`}
            >
              {h.valueBanner}
            </p>
            <p className={`${fontClass} mt-2 text-sm leading-relaxed text-white/90 md:text-base`}>
              {h.valueBannerHint}
            </p>
          </motion.div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm"
            >
              {h.badgePulse ? (
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              ) : null}
              <span>{h.badge}</span>
            </motion.div>
            <Link
              to={h.langFlipTo}
              className="border border-white/40 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {h.langFlipLabel}
            </Link>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className={`${fontClass} max-w-3xl text-4xl font-bold leading-[1.05] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-[5.25rem]`}
          >
            {h.h1Main}
            <span className="block text-2xl font-semibold text-white/90 sm:text-3xl md:text-4xl lg:text-5xl">
              {h.h1Sub}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
            className={`${fontClass} mt-5 max-w-xl text-base leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] md:text-lg`}
          >
            {h.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
            className="mt-7 grid max-w-xl grid-cols-2 gap-2 text-white sm:gap-3"
          >
            <div className="border border-white/25 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                {h.card1Label}
              </p>
              <p className={`${fontClass} mt-1 text-lg font-bold sm:text-xl md:text-2xl`}>{h.card1Price}</p>
              <p className="text-[11px] text-white/70">{h.card1Sq}</p>
            </div>
            <div className="border border-white/25 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                {h.card2Label}
              </p>
              <p className={`${fontClass} mt-1 text-lg font-bold sm:text-xl md:text-2xl`}>{h.card2Price}</p>
              <p className="text-[11px] text-white/70">{h.card2Sq}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.24 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <button
              type="button"
              onClick={scrollToLeadForm}
              className={`${fontClass} inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white/90 sm:text-base`}
            >
              {h.ctaBook}
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className={`${fontClass} inline-flex min-h-12 items-center justify-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a] sm:text-base`}
            >
              <MessageCircle size={18} />
              {h.ctaWhatsapp}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className={`${fontClass} mt-5 text-xs text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] md:text-sm`}
          >
            {h.footnote}
          </motion.p>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        aria-label={h.scrollAria}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
        }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/80 hover:text-white md:block"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
};

export default EastHero;
