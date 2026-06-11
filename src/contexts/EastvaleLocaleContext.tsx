import { createContext, useContext, type ReactNode } from 'react';
import { config } from '../config';
import { eastvaleCopy, type EastvaleLocale } from '../data/eastvaleCopy';

const EastvaleLocaleContext = createContext<EastvaleLocale>('ar');

export function EastvaleLocaleProvider({
  locale,
  children,
}: {
  locale: EastvaleLocale;
  children: ReactNode;
}) {
  return <EastvaleLocaleContext.Provider value={locale}>{children}</EastvaleLocaleContext.Provider>;
}

export function useEastvaleLocale(): EastvaleLocale {
  return useContext(EastvaleLocaleContext);
}

export function useEastvalePage() {
  const locale = useEastvaleLocale();
  const copy = eastvaleCopy[locale];
  const whatsappEastvale =
    locale === 'ar' ? config.whatsappEastvaleMessageAr : config.whatsappEastvaleMessageEn;
  const fontClass = locale === 'ar' ? 'font-arabic' : 'font-heading';

  return { locale, copy, whatsappEastvale, fontClass };
}

export type { EastvaleLocale };
