import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useEastPage } from '../../contexts/EastLocaleContext';
import LeadForm from '../LeadForm';

type EastLeadFormPlacement = 'primary' | 'closing';

const EastLeadForm = ({ placement = 'primary' }: { placement?: EastLeadFormPlacement }) => {
  const { copy, whatsappEast, fontClass } = useEastPage();
  const l = copy.lead;
  const isClosing = placement === 'closing';
  const outerId = isClosing ? 'east-lead-form-bottom' : 'east-lead-form';
  const innerId = isClosing ? 'east-lead-form-bottom-inner' : 'east-lead-form-inner';

  if (isClosing) {
    return (
      <section id={outerId} className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-xl bg-white p-2 shadow-xl ring-1 ring-zinc-100">
          <LeadForm
            locale={l.leadFormLocale}
            presetProject="East"
            title={l.formTitle}
            subtitle={l.formSubtitle}
            submitLabelOverride={l.submit}
            whatsappMessage={whatsappEast}
            sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
            sectionId={innerId}
          />
        </div>
      </section>
    );
  }

  return (
    <section id={outerId} className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{l.eyebrow}</p>
            <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>{l.title}</h2>
            <p className={`${fontClass} mt-4 max-w-md text-sm leading-relaxed text-zinc-600 md:text-base`}>{l.lead}</p>

            <ul className={`${fontClass} mt-8 space-y-4 text-sm text-zinc-700 md:text-base`}>
              {l.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-black text-white">
                    <ShieldCheck size={14} strokeWidth={1.8} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={`${fontClass} mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500 md:text-sm`}>
              <p>{l.offices}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="bg-white p-2 shadow-xl ring-1 ring-zinc-100"
          >
            <LeadForm
              locale={l.leadFormLocale}
              presetProject="East"
              title={l.formTitle}
              subtitle={l.formSubtitle}
              submitLabelOverride={l.submit}
              whatsappMessage={whatsappEast}
              sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
              sectionId={innerId}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EastLeadForm;
