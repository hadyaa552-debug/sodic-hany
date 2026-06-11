import LeadForm, { type LeadFormLocale, type LeadFormProps } from './LeadForm';

type LeadFormClosingProps = Omit<LeadFormProps, 'sectionId' | 'sectionClassName'> & {
  locale?: LeadFormLocale;
};

/** Closing lead form — same fields/styling, unique ids for duplicate forms on one page. */
const LeadFormClosing = ({ locale = 'en', ...leadFormProps }: LeadFormClosingProps) => {
  return (
    <section id="lead-form-bottom" className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-xl bg-white p-2 shadow-xl ring-1 ring-zinc-100">
        <LeadForm
          locale={locale}
          sectionId="lead-form-bottom-inner"
          sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
          {...leadFormProps}
        />
      </div>
    </section>
  );
};

export default LeadFormClosing;
