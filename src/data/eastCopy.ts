import { eastAr, type EastCopy } from './east/ar';
import { eastEn } from './east/en';

export type EastLocale = 'ar' | 'en';

export type { EastCopy };

export const eastCopy: Record<EastLocale, EastCopy> = {
  ar: eastAr,
  en: eastEn,
};
