const FOCUS_DELAY_MS = 350;

/**
 * After closing a booking popup, scroll to the page lead-form block and focus the first field.
 * Focuses the first name field inside the target lead-form section.
 */
export function scrollToLeadFormAfterModal(sectionId: string): void {
  window.setTimeout(() => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const nameField =
      section?.querySelector<HTMLInputElement>('[id$="-fullName"]') ??
      document.getElementById('fullName');
    if (nameField) {
      nameField.focus({ preventScroll: true });
      return;
    }
    const fallback = section?.querySelector<HTMLElement>('input:not([type="hidden"]), select, textarea');
    fallback?.focus({ preventScroll: true });
  }, FOCUS_DELAY_MS);
}
