import { motion } from 'framer-motion';
import { useEastvalePage } from '../../contexts/EastvaleLocaleContext';
import { eastLocationIcon } from './eastIconMap';

const MAP = '/sections/eastvale/raw/apartments-page-04.webp';

const EastLocation = () => {
  const { copy, fontClass } = useEastvalePage();
  const l = copy.location;

  return (
    <section id="eastvale-location" className="bg-stone-50 px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{l.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>{l.title}</h2>
          <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{l.lead}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative overflow-hidden bg-white shadow-sm lg:col-span-3"
          >
            <img
              src={MAP}
              alt={l.mapAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
              <p className={`${fontClass} text-xs font-semibold text-white md:text-sm`}>{l.mapCaption}</p>
            </div>
          </motion.div>

          <div className="space-y-3 lg:col-span-2">
            {l.distances.map((d, index) => {
              const Icon = eastLocationIcon[d.icon as keyof typeof eastLocationIcon];
              return (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 * index }}
                  className="flex items-start gap-4 border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 md:p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-black text-white">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className={`${fontClass} text-base font-bold text-black md:text-lg`}>{d.label}</p>
                      <p className={`${fontClass} shrink-0 text-xs font-semibold tracking-wide text-zinc-500 md:text-sm`}>
                        {d.time}
                      </p>
                    </div>
                    <p className={`${fontClass} mt-1 text-xs leading-relaxed text-zinc-500 md:text-sm`}>{d.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EastLocation;
