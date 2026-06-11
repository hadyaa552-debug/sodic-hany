/** Cross-page destinations for mobile hamburger menu (switch language via sibling route). */

export const sitePagesEn = [
  { to: '/', label: 'Home' },
  { to: '/east', label: 'SODIC East' },
  { to: '/eastvale', label: 'Eastvale' },
  { to: '/ogami', label: 'Ogami' },
] as const;

export const sitePagesAr = [
  { to: '/ar', label: 'الرئيسية' },
  { to: '/ar/east', label: 'SODIC East' },
  { to: '/ar/eastvale', label: 'Eastvale · سوديك المستقبل' },
  { to: '/ar/ogami', label: 'Ogami · أوجامي' },
] as const;
