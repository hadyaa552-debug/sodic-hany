import { ogamiAr, type OgamiCopy } from './ogami/ar';
import { ogamiEn } from './ogami/en';

export type OgamiLocale = 'ar' | 'en';

export type { OgamiCopy };

export const ogamiCopy: Record<OgamiLocale, OgamiCopy> = {
  ar: ogamiAr,
  en: ogamiEn,
};
