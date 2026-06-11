import { createContext, useContext, type ReactNode } from 'react';
import { config } from '../config';
import { eastCopy, type EastLocale } from '../data/eastCopy';

const EastLocaleContext = createContext<EastLocale>('ar');

export function EastLocaleProvider({
  locale,
  children,
}: {
  locale: EastLocale;
  children: ReactNode;
}) {
  return <EastLocaleContext.Provider value={locale}>{children}</EastLocaleContext.Provider>;
}

export function useEastLocale(): EastLocale {
  return useContext(EastLocaleContext);
}

/** Copy, WhatsApp East funnel text for current locale, and typography helper */
export function useEastPage() {
  const locale = useEastLocale();
  const copy = eastCopy[locale];
  const whatsappEast =
    locale === 'ar' ? config.whatsappEastMessageAr : config.whatsappEastMessageEn;
  const fontClass = locale === 'ar' ? 'font-arabic' : 'font-heading';

  return { locale, copy, whatsappEast, fontClass };
}

export type { EastLocale };
