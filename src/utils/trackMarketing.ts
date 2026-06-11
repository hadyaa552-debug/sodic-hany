declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fires Meta Pixel Contact + GA4-style event for phone / WhatsApp taps. */
export function trackMarketingContact(method: 'phone' | 'whatsapp'): void {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { contact_method: method });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'contact_click', { contact_method: method });
  }
}

/** Meta Pixel Lead + GA4 generate_lead — call on thank-you after successful form submit. */
export function trackLeadSuccessEvents(): void {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead');
  }
}
