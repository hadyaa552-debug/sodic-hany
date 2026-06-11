import { config } from '../config';

/** Builds wa.me URL with optional pre-filled message from config. */
export function getWhatsAppLink(overrides?: { text?: string }): string {
  const base = `https://wa.me/${config.whatsappNumber}`;
  const text = overrides?.text ?? config.whatsappDefaultMessage;
  if (text?.trim()) {
    return `${base}?text=${encodeURIComponent(text.trim())}`;
  }
  return base;
}
