/**
 * Site-wide configuration values.
 * Edit values here only.
 */

/** Arabic sales funnel — جون وأوجامي on /ar + /ar/ogami + forms. */
const WHATSAPP_AR_OGAMI =
  'مرحباً، مهتم بمشاريع جون وأوجامي من سوديك في الساحل الشمالي. ممكن تفاصيل الأسعار والتوفر؟';

export const config = {
  // Formspree form ID — submissions go to the email registered at formspree.io
  formspreeFormId: 'mqegddew',

  // WhatsApp number (without + or spaces for wa.me) — same tel: + whatsapp.site-wide
  whatsappNumber: '201273444483',

  // Pre-filled message for wa.me links (Hero, FAB, footer, etc.)
  whatsappDefaultMessage: 'Hello, I would like to know more about SODIC properties.',

  // Arabic landing (/ar) — same contact funnel as Ogami
  whatsappDefaultMessageAr: WHATSAPP_AR_OGAMI,

  // Promo strip on /ar — WhatsApp message mentioning immediate delivery & 5% offer
  whatsappPromoMessageAr:
    'مرحباً، أود الاستفسار عن عرض الإستلام الفوري بمقدّم 5٪ على الوحدات المتاحة.',

  // /ar/ogami + /ogami — WhatsApp pre-fill (Arabic)
  whatsappOgamiMessageAr: WHATSAPP_AR_OGAMI,

  // /ogami — English Ogami landing
  whatsappOgamiMessageEn:
    'Hello, I am interested in Ogami / Botanica Town on the North Coast by SODIC. Please share pricing and payment plans.',

  // /ar/east + /east — SODIC East (ready 5% + Oak)
  whatsappEastMessageAr:
    'مرحباً، أود الاستفسار عن عرض الاستلام الفوري بمقدّم ٥٪ في سوديك إيست، أو عن Oak والتوفر والأسعار.',

  whatsappEastMessageEn:
    'Hello, I would like details on immediate move-in with 5% down at SODIC East, or Oak availability and pricing.',

  // /ar/eastvale + /eastvale — Eastvale (Mada City)
  whatsappEastvaleMessageAr:
    'مرحباً، أود الاستفسار عن Eastvale / سوديك المستقبل في مدينة مستقبل الجمال — الأسعار والتوفر وخطط السداد.',

  whatsappEastvaleMessageEn:
    'Hello, I am interested in Eastvale at Mada City — pricing, availability, and payment plans.',

  // Phone for tel: links (with country code)
  phoneNumber: '+201273444483',

  // Display (+20…) for footer / accessibility
  phoneDisplay: '+201273444483',

  /** Local Egyptian format — use where you surface the number in UI */
  phoneDisplayLocal: '01273444483',
  // Optional: add conversion_id + conversion_label from Google Ads for thank-you page trackConversion()
  // Google tag AW-17012763903 is loaded in index.html (gtag.js).

  /** Legacy: optional external media URLs (hero/map). Leave empty when using /public/assets only. */
  heroVideoUrl: '',
  heroPosterUrl: '',
  mapVideoUrl: '',
};
