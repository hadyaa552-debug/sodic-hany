import { motion } from 'framer-motion';
import {
  Baby,
  Bike,
  Coffee,
  Croissant,
  Dumbbell,
  Flame,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Sun,
  TreeDeciduous,
  UtensilsCrossed,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEastPage } from '../../contexts/EastLocaleContext';

const OAK_IMAGE = '/sections/east/sodic-cms/amenities-lifestyle.webp';

const AMENITY_ICONS: LucideIcon[] = [
  Waves,
  Sun,
  HeartPulse,
  Dumbbell,
  Baby,
  Flame,
  Coffee,
  Croissant,
  ShoppingBag,
  Stethoscope,
  TreeDeciduous,
  UtensilsCrossed,
  Bike,
  Sparkles,
];

const EastAmenities = () => {
  const { copy, fontClass } = useEastPage();
  const a = copy.amenities;
  const amenities = a.labels.map((label, i) => ({
    icon: AMENITY_ICONS[i] ?? Sparkles,
    label,
  }));

  return (
    <section id="east-amenities" className="bg-stone-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative h-[55vh] min-h-[360px] overflow-hidden md:h-[65vh]"
      >
        <img
          src={OAK_IMAGE}
          alt={a.oakImgAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" aria-hidden />
        <div className="relative z-10 flex h-full items-end p-6 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-3xl text-white"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] text-white/70">{a.oakEyebrow}</p>
            <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight md:text-5xl`}>{a.oakTitle}</h2>
            <p className={`${fontClass} mt-4 text-sm leading-relaxed text-white/85 md:text-base`}>{a.oakLead}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10 max-w-2xl md:mb-14"
          >
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{a.sectionEyebrow}</p>
            <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>
              {a.sectionTitle}
            </h2>
            <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{a.sectionLead}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: 0.025 * index }}
                  className="group flex flex-col items-center justify-center gap-3 border border-zinc-200 bg-white p-5 text-center transition-colors hover:border-black"
                >
                  <span className="grid h-12 w-12 place-items-center bg-stone-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                    <Icon size={22} strokeWidth={1.4} />
                  </span>
                  <p className={`${fontClass} text-xs font-semibold leading-snug text-zinc-700 md:text-sm`}>
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EastAmenities;
