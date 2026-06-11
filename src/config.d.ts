export const config: {
  formspreeFormId: string;
  whatsappNumber: string;
  /** Pre-filled WhatsApp message for wa.me ?text= */
  whatsappDefaultMessage: string;
  /** Arabic WhatsApp pre-fill for /ar landing */
  whatsappDefaultMessageAr: string;
  /** Arabic WhatsApp text for promo banner CTA */
  whatsappPromoMessageAr: string;
  /** Arabic WhatsApp pre-fill for /ar/ogami */
  whatsappOgamiMessageAr: string;
  /** English WhatsApp pre-fill for /ogami */
  whatsappOgamiMessageEn: string;
  /** Arabic WhatsApp pre-fill for /ar/east */
  whatsappEastMessageAr: string;
  /** English WhatsApp pre-fill for /east */
  whatsappEastMessageEn: string;
  /** Arabic WhatsApp pre-fill for /ar/eastvale */
  whatsappEastvaleMessageAr: string;
  /** English WhatsApp pre-fill for /eastvale */
  whatsappEastvaleMessageEn: string;
  phoneNumber: string;
  phoneDisplay: string;
  /** Egyptian mobile grouping for visible labels */
  phoneDisplayLocal: string;
  /** Google Ads conversion id for ThankYou page (optional) */
  conversion_id?: string;
  /** Google Ads conversion label for ThankYou page (optional) */
  conversion_label?: string;
  /** Optional legacy external URLs */
  heroVideoUrl: string;
  heroPosterUrl: string;
  mapVideoUrl: string;
};
