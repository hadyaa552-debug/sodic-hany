import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { trackMarketingContact } from '../../utils/trackMarketing';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { useEastPage } from '../../contexts/EastLocaleContext';

const EastFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { copy, whatsappEast, fontClass } = useEastPage();
  const f = copy.faq;
  const waHref = getWhatsAppLink({ text: whatsappEast });

  return (
    <section id="east-faq" className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{f.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-3xl font-bold leading-tight text-black md:text-5xl`}>{f.title}</h2>
        </motion.div>

        <div className="border-y border-zinc-200">
          {f.items.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={faq.q}
                className={`border-b border-zinc-200 last:border-b-0 ${isOpen ? 'bg-stone-50' : 'bg-white'}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start transition-colors md:py-6"
                >
                  <span className={`${fontClass} text-base font-bold text-black md:text-lg`}>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="grid h-9 w-9 shrink-0 place-items-center border border-zinc-300 bg-white text-zinc-700"
                  >
                    <ChevronDown size={16} strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className={`${fontClass} pb-6 text-sm leading-relaxed text-zinc-700 md:text-base`}>{faq.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mt-10 flex flex-col items-start gap-4 border border-zinc-200 bg-stone-50 p-5 md:flex-row md:items-center md:justify-between md:p-7"
        >
          <p className={`${fontClass} max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base`}>{f.foot}</p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMarketingContact('whatsapp')}
            className={`${fontClass} inline-flex shrink-0 items-center gap-2 bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a]`}
          >
            <MessageCircle size={16} />
            {f.askWa}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EastFAQ;
