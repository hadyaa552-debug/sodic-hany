import { createContext, useContext, type ReactNode } from 'react';
import { config } from '../config';
import { ogamiCopy, type OgamiLocale } from '../data/ogamiCopy';

const OgamiLocaleContext = createContext<OgamiLocale>('ar');

export function OgamiLocaleProvider({
  locale,
  children,
}: {
  locale: OgamiLocale;
  children: ReactNode;
}) {
  return (
    <OgamiLocaleContext.Provider value={locale}>{children}</OgamiLocaleContext.Provider>
  );
}

export function useOgamiLocale(): OgamiLocale {
  return useContext(OgamiLocaleContext);
}

/** Copy, WhatsApp Ogami funnel text for current locale, and typography helper */
export function useOgamiPage() {
  const locale = useOgamiLocale();
  const copy = ogamiCopy[locale];
  const whatsappOgami =
    locale === 'ar' ? config.whatsappOgamiMessageAr : config.whatsappOgamiMessageEn;
  const fontClass = locale === 'ar' ? 'font-arabic' : 'font-heading';

  return { locale, copy, whatsappOgami, fontClass };
}

export type { OgamiLocale };
