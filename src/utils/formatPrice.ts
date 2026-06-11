export function formatPrice(amount: number): string {
  return `EGP ${new Intl.NumberFormat('en-EG').format(amount)}`;
}
