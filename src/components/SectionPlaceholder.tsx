/** Reserved height while lazy sections load — reduces CLS. */
const SectionPlaceholder = ({ minHeight = 'min-h-[40vh]' }: { minHeight?: string }) => (
  <div className={`${minHeight} bg-white`} aria-hidden />
);

export default SectionPlaceholder;
