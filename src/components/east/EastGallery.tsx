import { motion } from 'framer-motion';
import { useEastPage } from '../../contexts/EastLocaleContext';

const EastGallery = () => {
  const { copy, fontClass } = useEastPage();
  const g = copy.gallery;

  return (
    <section id="east-gallery" className="bg-white py-16 md:py-24">
      <div className="px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{g.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>{g.title}</h2>
          <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{g.lead}</p>
        </motion.div>
      </div>

      <div
        className="scrollbar-thin flex gap-4 overflow-x-auto px-6 pb-6 md:gap-6 md:px-16 md:pb-8"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {g.slides.map((slide, index) => (
          <motion.figure
            key={slide.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.04 * index }}
            className="group relative shrink-0 overflow-hidden bg-stone-100"
            style={{
              scrollSnapAlign: 'start',
              width: 'min(85vw, 640px)',
              height: 'min(60vw, 420px)',
            }}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
              <p className={`${fontClass} text-xs font-semibold text-white md:text-sm`}>{slide.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default EastGallery;
