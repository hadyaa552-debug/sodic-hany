export interface Unit {
  id: string;
  project: string;
  type: string;
  area: string;
  price: number;
  details: string;
  image: string;
  /** عربي — يُعرض على لاندينج /ar */
  projectAr?: string;
  typeAr?: string;
  areaAr?: string;
  detailsAr?: string;
}

export const units: Unit[] = [
  {
    id: 'sodic-east-townhouse',
    project: 'SODIC East',
    type: 'Townhouse',
    area: '234 sqm',
    price: 30000000,
    details: '5% Downpayment - 8 Years Installments',
    image: './sections/units/townhouse.webp',
    projectAr: 'سوديك إيست',
    typeAr: 'تاون هاوس',
    areaAr: '234 م²',
    detailsAr: 'مقدّم 5٪ — تقسيط على 8 سنوات',
  },
  {
    id: 'sodic-east-apartment',
    project: 'SODIC East',
    type: 'Apartment',
    area: '141 sqm',
    price: 13000000,
    details: 'Fully Finished - Delivery 4 Years',
    image: './sections/units/apartment.webp',
    projectAr: 'سوديك إيست',
    typeAr: 'شقة',
    areaAr: '141 م²',
    detailsAr: 'تشطيب كامل — تسليم خلال 4 سنوات',
  },
  {
    id: 'sodic-east-standalone',
    project: 'SODIC East',
    type: 'Standalone',
    area: '392 sqm',
    price: 68000000,
    details: '—',
    image: './sections/units/villa.webp',
    projectAr: 'سوديك إيست',
    typeAr: 'فيلا مستقلة',
    areaAr: '392 م²',
    detailsAr: '—',
  },
  {
    id: 'villette-serviced',
    project: 'Villette',
    type: 'Serviced Apt',
    area: '—',
    price: 36000000,
    details: '2 Bedrooms (Serviced)',
    image: './sections/units/apartment2.webp',
    projectAr: 'فيليت',
    typeAr: 'شقة فندقية',
    areaAr: '—',
    detailsAr: 'غرفتا نوم (خدمات فندقية)',
  },
  {
    id: 'eastvale-apartment',
    project: 'Eastvale',
    type: 'Apartment',
    area: '140 sqm',
    price: 18000000,
    details: 'Fully Finished',
    image: './sections/units/apartment.webp',
    projectAr: 'إيستفيل',
    typeAr: 'شقة',
    areaAr: '140 م²',
    detailsAr: 'تشطيب كامل',
  },
  {
    id: 'vye-karmell-apartment',
    project: 'Vye & Karmell',
    type: 'Apartment',
    area: '—',
    price: 15000000,
    details: '2 Bedrooms',
    image: './sections/units/apartment2.webp',
    projectAr: 'فاي وكارميل',
    typeAr: 'شقة',
    areaAr: '—',
    detailsAr: 'غرفتا نوم',
  },
  {
    id: 'ogami-apartment',
    project: 'Ogami (North Coast)',
    type: 'Chalet',
    area: '120 sqm',
    price: 17000000,
    details: '2 Bedrooms',
    image: './sections/units/ogami-north.webp',
    projectAr: 'أوجامي (الساحل الشمالي)',
    typeAr: 'شاليه',
    areaAr: '120 م²',
    detailsAr: 'غرفتا نوم',
  },
];

/** SODIC East units show the red “Hot offer / immediate delivery” badge */
export function isSodicEastHotOfferUnit(unit: Unit): boolean {
  return unit.project === 'SODIC East';
}

/** Labels for table/cards — Arabic fields when locale is ar */
export function getUnitDisplay(unit: Unit, locale: 'en' | 'ar') {
  if (locale === 'en') {
    return {
      project: unit.project,
      type: unit.type,
      area: unit.area,
      details: unit.details,
    };
  }
  return {
    project: unit.projectAr ?? unit.project,
    type: unit.typeAr ?? unit.type,
    area: unit.areaAr ?? unit.area,
    details: unit.detailsAr ?? unit.details,
  };
}
