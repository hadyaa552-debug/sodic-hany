import { FileText, Phone } from 'lucide-react';
import { config } from '../config';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884M8.207 4.628c-.252 0-.505.045-.747.15-.741.317-1.256 1.062-1.32 1.95-.064.888.334 1.69 1.008 2.248.134.11.347.347.347.521 0 .173-.097.346-.173.52-.075.173-.272.52-.371.693-.099.173-.198.347-.297.52-.099.173-.248.433-.099.693.149.26.694 1.265 1.474 2.109.98 1.074 1.905 1.627 2.173 1.774.073.041.156.059.241.059.13 0 .259-.051.355-.149.09-.092.166-.199.225-.313.212-.393.482-.909.675-1.205.193-.295.258-.347.433-.347.173 0 .297.099.446.173.149.074 1.05.496 1.229.595.18.099.297.149.446.248.149.099.248.198.371.297.124.099.198.248.297.396.099.149.149.297.248.446.099.149.052.297-.025.446-.075.149-.694 1.538-.954 2.105-.262.57-.527.496-.748.496-.223 0-.447.026-.671-.026-.223-.05-1.421-.379-1.422-.379-.223-.05-.371-.074-.519-.223-.149-.149-.322-.446-.322-.446-.149-.198-.248-.371-.149-.519.099-.149.149-.248.297-.396.149-.149.198-.297.347-.446.149-.149.099-.248.049-.347-.05-.099-.223-.595-.322-.793-.099-.198-.198-.248-.347-.396-.149-.149-.297-.074-.446-.025-.149.049-.971.481-1.118.555-.149.074-.248.124-.347.223-.099.099-.198.198-.297.347-.099.15-.347.446-.446.595-.099.149-.198.248-.347.248h-.099c-.099 0-.198-.026-.297-.099-.099-.074-.594-.293-.594-.293z" />
    </svg>
  );
}

interface MobileBottomBarProps {
  whatsappMessage?: string;
  labels?: { call: string; whatsapp: string; register: string };
  /** DOM id of the lead form section (default lead-form) */
  leadFormSectionId?: string;
}

const MobileBottomBar = ({
  whatsappMessage,
  labels,
  leadFormSectionId = 'lead-form',
}: MobileBottomBarProps) => {
  const scrollToLeadForm = () => {
    document.getElementById(leadFormSectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const waHref = whatsappMessage ? getWhatsAppLink({ text: whatsappMessage }) : getWhatsAppLink();
  const L = labels ?? { call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-zinc-200 bg-white/95 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${config.phoneNumber}`}
        title={L.call}
        onClick={() => trackMarketingContact('phone')}
        className="flex flex-1 flex-col items-center gap-1 py-1 text-[10px] font-semibold tracking-wide text-zinc-800"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
          <Phone size={18} />
        </span>
        <span className="flex flex-col items-center gap-0.5 leading-tight">
          <span>{L.call}</span>
        </span>
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackMarketingContact('whatsapp')}
        className="flex flex-1 flex-col items-center gap-1 py-1 text-[10px] font-semibold tracking-wide text-zinc-800"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon size={20} />
        </span>
        {L.whatsapp}
      </a>
      <button
        type="button"
        onClick={scrollToLeadForm}
        className="flex flex-1 flex-col items-center gap-1 py-1 text-[10px] font-semibold tracking-wide text-zinc-800"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black">
          <FileText size={18} />
        </span>
        {L.register}
      </button>
    </nav>
  );
};

export default MobileBottomBar;
