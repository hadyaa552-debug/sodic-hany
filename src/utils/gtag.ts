import { config } from '../config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Fires a Google Ads conversion event (submit lead form).
 * Call on the thank-you page only. Requires conversion_id + conversion_label in config when set up in Google Ads.
 */
export function trackConversion(): void {
  const cfg = config as {
    conversion_id?: string;
    conversionId?: string;
    conversion_label?: string;
    conversionLabel?: string;
  };
  const convId = (cfg.conversion_id || cfg.conversionId || '').trim();
  const label = (cfg.conversion_label || cfg.conversionLabel || '').trim();
  if (!convId || !label || typeof window.gtag !== 'function') {
    return;
  }
  window.gtag('event', 'conversion', {
    send_to: `${convId}/${label}`,
    value: 1.0,
    currency: 'EGP',
  });
}
