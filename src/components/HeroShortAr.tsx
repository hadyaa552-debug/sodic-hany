import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { config } from '../config';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

const HERO_IMAGE = '/sections/east/sodic-cms/hero-birdseye-1600.webp';
const HERO_SRCSET =
  '/sections/east/sodic-cms/hero-birdseye-640.webp 640w, /sections/east/sodic-cms/hero-birdseye-1024.webp 1024w, /sections/east/sodic-cms/hero-birdseye-1600.webp 1600w';

const HeroShortAr = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = getWhatsAppLink({ text: config.whatsappDefaultMessageAr });

  return (
    <section id="hero" className="relative min-h-[68vh] overflow-hidden bg-black md:min-h-screen">
      <img
        src={HERO_IMAGE}
        srcSet={HERO_SRCSET}
        alt=""
        width={1920}
        height={1080}
        sizes="100vw"
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="relative z-10 flex min-h-[68vh] items-end pb-20 pt-20 md:min-h-screen md:pb-32 md:pt-28">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-arabic text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              مجتمعات
              <br />
              تليق بعيشة
              <br />
              أكثر راحة
            </h1>
            <p className="font-arabic mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
              سجّل اهتمامك وسيتواصل معك فريق المبيعات بخصوص مشاريع سوديك.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.button
              type="button"
              onClick={scrollToLeadForm}
              className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              سجّل اهتمامك
            </motion.button>
            <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className="inline-flex items-center gap-2 border border-[#25D366] bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
            >
              <MessageCircle size={16} />
              واتساب
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroShortAr;
