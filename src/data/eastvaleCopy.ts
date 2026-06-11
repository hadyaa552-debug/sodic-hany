import { eastvaleAr, type EastvaleCopy } from './eastvale/ar';
import { eastvaleEn } from './eastvale/en';

export type EastvaleLocale = 'ar' | 'en';

export type { EastvaleCopy };

export const eastvaleCopy: Record<EastvaleLocale, EastvaleCopy> = {
  ar: eastvaleAr,
  en: eastvaleEn,
};
