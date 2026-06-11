import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { config } from '../config';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

const headlineWords = ['إستلام', 'فوري', 'بمقدّم'] as const;
const headlineLast = 'فقط';

const wordFadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const headlineGlowLoop = {
  duration: 1.45,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

const PromoOfferStripAr = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = getWhatsAppLink({ text: config.whatsappPromoMessageAr });

  return (
    <section
      className="relative border-b border-white/10 bg-black font-arabic text-white"
      aria-label="عرض محدود"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-8 md:px-16 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="text-[11px] font-semibold tracking-wide text-white/60">عرض محدود</p>
          <motion.h2
            className="mt-2 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-xl font-bold leading-snug text-white md:text-2xl"
            dir="rtl"
            variants={headlineContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {headlineWords.map((word) =>
              word === 'فوري' ? (
                <motion.span key={word} variants={wordFadeUp} className="inline-block">
                  <motion.span
                    className="relative inline-block px-0.5 text-[1.35rem] font-extrabold leading-none text-white md:text-[1.75rem]"
                    animate={{
                      scale: [1, 1.14, 1],
                      textShadow: [
                        '0 0 4px rgba(255,255,255,0.35), 0 0 12px rgba(255,255,255,0.2)',
                        '0 0 22px rgba(255,255,255,1), 0 0 42px rgba(255,255,255,0.65), 0 0 64px rgba(255,255,255,0.35)',
                        '0 0 4px rgba(255,255,255,0.35), 0 0 12px rgba(255,255,255,0.2)',
                      ],
                      filter: [
                        'brightness(1.05)',
                        'brightness(1.35)',
                        'brightness(1.05)',
                      ],
                    }}
                    transition={{ ...headlineGlowLoop, delay: 0.35 }}
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ) : (
                <motion.span key={word} variants={wordFadeUp} className="inline-block">
                  {word}
                </motion.span>
              ),
            )}
            <motion.span
              variants={wordFadeUp}
              className="relative inline-flex items-center"
            >
              <motion.span
                className="inline-block rounded-sm bg-white px-2 py-0.5 text-lg font-extrabold tabular-nums text-black shadow-[0_0_20px_rgba(255,255,255,0.35)] md:text-xl"
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(255,255,255,0)',
                    '0 0 24px 2px rgba(255,255,255,0.45)',
                    '0 0 0 0 rgba(255,255,255,0)',
                  ],
                }}
                transition={headlineGlowLoop}
              >
                5٪
              </motion.span>
            </motion.span>
            <motion.span variants={wordFadeUp} className="inline-block">
              {headlineLast}
            </motion.span>
          </motion.h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            على وحدات مختارة — سجّل الآن أو تواصل مع فريق المبيعات.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
          className="flex flex-wrap gap-2 md:flex-nowrap md:justify-end"
        >
          <button
            type="button"
            onClick={scrollToLeadForm}
            className="inline-flex min-h-11 items-center justify-center border border-white bg-white px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-white/90"
          >
            حمّل بروشور المشروعات
          </button>
          <a
            href={`tel:${config.phoneNumber}`}
            title="اتصل بنا"
            onClick={() => trackMarketingContact('phone')}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/40 px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5 sm:text-xs"
          >
            <Phone size={16} strokeWidth={2} />
            اتصل بنا
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMarketingContact('whatsapp')}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#25D366] bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#20bd5a]"
          >
            <MessageCircle size={16} />
            واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoOfferStripAr;
