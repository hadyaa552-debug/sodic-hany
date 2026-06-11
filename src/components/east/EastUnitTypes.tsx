import { motion } from 'framer-motion';
import { BedDouble, Maximize2, Trees } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEastPage } from '../../contexts/EastLocaleContext';
import UnitCardActions from '../UnitCardActions';
import { getWhatsAppLink } from '../../utils/whatsapp';

const highlightIcons: LucideIcon[] = [Maximize2, BedDouble, Trees];

const EastUnitTypes = () => {
  const { copy, fontClass, locale } = useEastPage();
  const u = copy.units;
  const priceGridRtl = copy.units.priceGridDir === 'rtl';
  const scrollToLeadForm = () => {
    document.getElementById('east-lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const sideLines = u.sideNote.split('\n');

  return (
    <section id="east-units" className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{u.eyebrow}</p>
            <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>{u.title}</h2>
            <p className={`${fontClass} mt-4 text-sm leading-relaxed text-zinc-600 md:text-base`}>{u.lead}</p>
          </div>
          <p
            className={`${fontClass} text-sm text-zinc-500 md:max-w-xs md:text-base ${locale === 'ar' ? 'md:text-end' : ''}`}
          >
            {sideLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < sideLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {u.items.map((unit, index) => (
            <motion.article
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.06 * index }}
              className="group flex flex-col overflow-hidden border border-zinc-200 bg-white transition-all hover:border-black hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden bg-stone-100 md:h-64">
                <img
                  src={unit.image}
                  alt={unit.title}
                  width={640}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 inline-flex items-center bg-black px-3 py-1 text-[10px] font-bold tracking-wide text-white md:text-xs ${
                    locale === 'ar' ? 'right-4' : 'left-4'
                  }`}
                >
                  {unit.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-semibold tracking-wider text-zinc-600">{unit.subtitle}</p>
                <h3 className={`${fontClass} mt-2 text-2xl font-bold leading-tight text-black md:text-3xl`}>{unit.title}</h3>

                <div className="mt-4 border border-zinc-200 bg-stone-50">
                  <div
                    className={`grid grid-cols-2 ${
                      priceGridRtl ? '[direction:rtl] divide-x divide-x-reverse divide-zinc-200' : 'divide-x divide-zinc-200'
                    }`}
                  >
                    <div className="px-4 py-4">
                      <p className={`${fontClass} text-[11px] font-semibold tracking-wide text-zinc-500`}>{unit.dpLabel}</p>
                      <p className={`${fontClass} mt-1 text-xl font-extrabold leading-tight text-black md:text-2xl`}>{unit.dpValue}</p>
                    </div>
                    <div className="px-4 py-4">
                      <p className={`${fontClass} text-[11px] font-semibold tracking-wide text-zinc-500`}>{unit.priceLabel}</p>
                      <p className={`${fontClass} mt-1 text-xl font-extrabold leading-tight text-black md:text-2xl`}>{unit.priceValue}</p>
                    </div>
                  </div>
                  <p className={`${fontClass} border-t border-zinc-200 px-4 py-2 text-center text-[11px] font-semibold text-zinc-600`}>
                    {u.paymentNote}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {unit.highlights.map((label, hi) => {
                    const Icon = highlightIcons[hi] ?? Maximize2;
                    return (
                      <li key={label} className={`${fontClass} flex items-center gap-3 text-sm text-zinc-700`}>
                        <Icon size={16} strokeWidth={1.6} className="shrink-0 text-zinc-500" />
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>

                <ul className={`${fontClass} mt-4 grid grid-cols-2 gap-x-3 gap-y-1 border-t border-zinc-100 pt-4 text-xs text-zinc-600`}>
                  {unit.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-black" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <UnitCardActions
                  onFormClick={scrollToLeadForm}
                  waHref={getWhatsAppLink({ text: unit.waPrefill })}
                  formLabel={u.book}
                  callLabel={copy.urgency.call}
                  whatsappLabel={u.inquire}
                  locale={locale}
                  fontClass={fontClass}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <p className={`${fontClass} mt-8 text-center text-xs text-zinc-500 md:text-sm`}>{u.disclaimer}</p>
      </div>
    </section>
  );
};

export default EastUnitTypes;
