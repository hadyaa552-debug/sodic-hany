import { ShieldCheck } from 'lucide-react';
import { useOgamiPage } from '../../contexts/OgamiLocaleContext';
import LeadForm from '../LeadForm';

type OgamiLeadFormPlacement = 'primary' | 'closing';

const OgamiLeadForm = ({ placement = 'primary' }: { placement?: OgamiLeadFormPlacement }) => {
  const { copy, whatsappOgami, fontClass } = useOgamiPage();
  const l = copy.lead;
  const isClosing = placement === 'closing';
  const outerId = isClosing ? 'lead-form-bottom' : 'lead-form';
  const innerId = isClosing ? 'lead-form-bottom-inner' : 'lead-form-inner';

  if (isClosing) {
    return (
      <section id={outerId} className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-xl bg-white p-2 shadow-xl ring-1 ring-zinc-100">
          <LeadForm
            locale={l.leadFormLocale}
            presetProject="Ogami"
            title={l.formTitle}
            subtitle={l.formSubtitle}
            submitLabelOverride={l.submit}
            whatsappMessage={whatsappOgami}
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
          <div className="flex flex-col justify-center">
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
          </div>

          <div className="bg-white p-2 shadow-xl ring-1 ring-zinc-100">
            <LeadForm
              locale={l.leadFormLocale}
              presetProject="Ogami"
              title={l.formTitle}
              subtitle={l.formSubtitle}
              submitLabelOverride={l.submit}
              whatsappMessage={whatsappOgami}
              sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
              sectionId={innerId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OgamiLeadForm;
