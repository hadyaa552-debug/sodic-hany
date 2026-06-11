import { lazy, Suspense, useEffect } from 'react';
import EastHero from '../components/eastvale/EastHero';
import EastUnitTypes from '../components/eastvale/EastUnitTypes';
import EastLeadForm from '../components/eastvale/EastLeadForm';
import SectionPlaceholder from '../components/SectionPlaceholder';
import DeferredBookingPopup from '../components/DeferredBookingPopup';
import { EastvaleLocaleProvider, useEastvalePage } from '../contexts/EastvaleLocaleContext';
import type { EastvaleLocale } from '../data/eastvaleCopy';

const EastUrgencyStrip = lazy(() => import('../components/eastvale/EastUrgencyStrip'));
const EastLocation = lazy(() => import('../components/eastvale/EastLocation'));
const EastMasterplan = lazy(() => import('../components/eastvale/EastMasterplan'));
const EastAmenities = lazy(() => import('../components/eastvale/EastAmenities'));
const EastFAQ = lazy(() => import('../components/eastvale/EastFAQ'));

function EastvaleMetaAndAnalytics() {
  const { copy } = useEastvalePage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = copy.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', copy.meta.description);

    const track = () => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'ViewContent', {
          content_name: 'Eastvale',
          content_category: 'East Cairo',
          content_type: 'real_estate',
        });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'view_item', {
          item_id: 'eastvale',
          item_name: 'Eastvale',
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

function EastvaleLandingBody() {
  return (
    <main>
      <EastvaleMetaAndAnalytics />
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
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[30vh]" />}>
        <EastFAQ />
      </Suspense>
      <EastLeadForm placement="closing" />
      <DeferredBookingPopup loader={() => import('../components/eastvale/EastBookingPopup')} />
    </main>
  );
}

const EastvaleLanding = ({ locale = 'ar' }: { locale?: EastvaleLocale }) => {
  return (
    <EastvaleLocaleProvider locale={locale}>
      <EastvaleLandingBody />
    </EastvaleLocaleProvider>
  );
};

export default EastvaleLanding;
