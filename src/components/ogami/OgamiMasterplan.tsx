import { motion } from 'framer-motion';
import { useOgamiPage } from '../../contexts/OgamiLocaleContext';
import { ogamiMasterplanIcon } from './ogamiIconMap';

const OVERVIEW = '/sections/ogami/ogami-overview.webp';
const BOTANICA = '/sections/ogami/botanica-launch.webp';

const OgamiMasterplan = () => {
  const { copy, fontClass } = useOgamiPage();
  const m = copy.masterplan;
  const zones = m.zones.map((z, i) => ({
    ...z,
    icon: ogamiMasterplanIcon[m.zoneIcons[i] as keyof typeof ogamiMasterplanIcon],
  }));

  return (
    <section id="ogami-masterplan" className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{m.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>{m.title}</h2>
          <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{m.lead}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden bg-stone-50 shadow-sm"
        >
          <img
            src={OVERVIEW}
            alt={m.overviewAlt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4">
          {zones.map((zone, index) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.04 * index }}
                className="group flex flex-col gap-3 border border-zinc-200 bg-white p-5 transition-colors hover:border-black"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center bg-black text-white">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className={`${fontClass} text-2xl font-bold text-zinc-200 transition-colors group-hover:text-black`}>
                    {zone.num}
                  </span>
                </div>
                <h3 className={`${fontClass} text-base font-bold leading-snug text-black md:text-lg`}>{zone.name}</h3>
                <p className={`${fontClass} text-xs leading-relaxed text-zinc-600 md:text-sm`}>{zone.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-1 items-stretch gap-6 md:mt-20 md:grid-cols-2"
        >
          <div className="relative overflow-hidden bg-stone-100">
            <img
              src={BOTANICA}
              alt={m.launchImgAlt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{m.launchEyebrow}</p>
            <h3 className={`${fontClass} mt-3 text-2xl font-bold leading-tight text-black md:text-4xl`}>{m.launchTitle}</h3>
            <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{m.launchLead}</p>
            <ul className={`${fontClass} mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-700`}>
              {m.launchBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-black" /> {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OgamiMasterplan;
