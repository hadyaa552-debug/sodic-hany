import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { config } from '../config';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

const FooterShortAr = () => {
  const waHref = getWhatsAppLink({ text: config.whatsappDefaultMessageAr });

  return (
    <footer className="bg-black px-6 py-12 text-gray-300 md:px-16" dir="rtl">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src="/sections/hero/logo.svg"
              alt="سوديك"
              width={120}
              height={24}
              decoding="async"
              className="h-6 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              مشاريع عقارية متكاملة في مواقع استراتيجية. تواصل معنا للاستفسار أو حجز موعد.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-white">تواصل</p>
            <a
              href={`tel:${config.phoneNumber}`}
              title="اتصل بنا"
              onClick={() => trackMarketingContact('phone')}
              className="flex items-center gap-2 text-sm hover:text-white"
            >
              <Phone size={15} />
              <span>اتصل بنا</span>
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMarketingContact('whatsapp')}
              className="flex items-center gap-2 text-sm hover:text-white"
            >
              <MessageCircle size={15} />
              واتساب
            </a>
          </div>
          <div>
            <Link to="/" className="text-sm text-gray-400 underline-offset-4 hover:text-white hover:underline">
              الموقع بالإنجليزية
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} سوديك. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default FooterShortAr;
