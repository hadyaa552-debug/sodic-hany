import { motion } from 'framer-motion';
import { MessageCircle, Plus } from 'lucide-react';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

/** Static hero (video removed — large payload + not committed; improves LCP / TBT). */
const HERO_IMAGE = '/sections/east/sodic-cms/hero-birdseye-1600.webp';
const HERO_SRCSET =
  '/sections/east/sodic-cms/hero-birdseye-640.webp 640w, /sections/east/sodic-cms/hero-birdseye-1024.webp 1024w, /sections/east/sodic-cms/hero-birdseye-1600.webp 1600w';

const Hero = () => {
  const scrollToDevelopments = () => {
    document.getElementById('interactive-filter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative z-10 flex min-h-[68vh] items-end pb-20 pt-20 md:min-h-screen md:pb-32 md:pt-28">
        <div className="w-full pl-6 pr-6 md:pl-16 lg:pl-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-white font-light text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              Creating
              <br />
              Communities for
              <br />
              You to Live More
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.button
              type="button"
              onClick={scrollToDevelopments}
              className="inline-flex items-center gap-2 border border-white/80 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white/10"
            >
              <Plus size={14} />
              Our Developments
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollToLeadForm}
              className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-colors hover:bg-white/90"
            >
              Register Your Interest
            </motion.button>
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className="inline-flex items-center gap-2 border border-[#25D366] bg-[#25D366]/95 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#20bd5a]"
            >
              <MessageCircle size={14} />
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
