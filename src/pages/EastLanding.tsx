import { lazy, Suspense, useEffect } from 'react';
import EastHero from '../components/east/EastHero';
import EastUnitTypes from '../components/east/EastUnitTypes';
import EastLeadForm from '../components/east/EastLeadForm';
import SectionPlaceholder from '../components/SectionPlaceholder';
import DeferredBookingPopup from '../components/DeferredBookingPopup';
import { EastLocaleProvider, useEastPage } from '../contexts/EastLocaleContext';
import type { EastLocale } from '../data/eastCopy';

const EastUrgencyStrip = lazy(() => import('../components/east/EastUrgencyStrip'));
const EastLocation = lazy(() => import('../components/east/EastLocation'));
const EastMasterplan = lazy(() => import('../components/east/EastMasterplan'));
const EastAmenities = lazy(() => import('../components/east/EastAmenities'));
const EastGallery = lazy(() => import('../components/east/EastGallery'));
const EastFAQ = lazy(() => import('../components/east/EastFAQ'));

function EastMetaAndAnalytics() {
  const { copy } = useEastPage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = copy.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', copy.meta.description);

    const track = () => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'ViewContent', {
          content_name: 'East',
          content_category: 'East Cairo',
          content_type: 'real_estate',
        });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'view_item', {
          item_id: 'east',
          item_name: 'SODIC East',
          item_category: 'real_estate',
        });
      }
    };
    if (typeof window.gtag === 'function') track();
    else window.setTimeout(track, 2000);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) metaDesc?.setAttribute('content', prevDesc);
    };
  }, [copy.meta.description, copy.meta.title]);

  return null;
}

function EastLandingBody() {
  return (
    <main>
      <EastMetaAndAnalytics />
      <EastHero />
      <EastUnitTypes />
      <EastLeadForm />
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[12rem]" />}>
        <EastUrgencyStrip />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <EastLocation />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <EastMasterplan />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <EastAmenities />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[50vh]" />}>
        <EastGallery />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[30vh]" />}>
        <EastFAQ />
      </Suspense>
      <EastLeadForm placement="closing" />
      <DeferredBookingPopup loader={() => import('../components/east/EastBookingPopup')} />
    </main>
  );
}

const EastLanding = ({ locale = 'ar' }: { locale?: EastLocale }) => {
  return (
    <EastLocaleProvider locale={locale}>
      <EastLandingBody />
    </EastLocaleProvider>
  );
};

export default EastLanding;
