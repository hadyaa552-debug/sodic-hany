import { lazy, Suspense, useEffect } from 'react';
import OgamiHero from '../components/ogami/OgamiHero';
import OgamiUnitTypes from '../components/ogami/OgamiUnitTypes';
import OgamiLeadForm from '../components/ogami/OgamiLeadForm';
import SectionPlaceholder from '../components/SectionPlaceholder';
import DeferredBookingPopup from '../components/DeferredBookingPopup';
import { OgamiLocaleProvider, useOgamiPage } from '../contexts/OgamiLocaleContext';
import type { OgamiLocale } from '../data/ogamiCopy';

const OgamiUrgencyStrip = lazy(() => import('../components/ogami/OgamiUrgencyStrip'));
const OgamiLocation = lazy(() => import('../components/ogami/OgamiLocation'));
const OgamiMasterplan = lazy(() => import('../components/ogami/OgamiMasterplan'));
const OgamiAmenities = lazy(() => import('../components/ogami/OgamiAmenities'));
const OgamiGallery = lazy(() => import('../components/ogami/OgamiGallery'));
const OgamiFAQ = lazy(() => import('../components/ogami/OgamiFAQ'));

function OgamiMetaAndAnalytics() {
  const { copy } = useOgamiPage();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = copy.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? null;
    metaDesc?.setAttribute('content', copy.meta.description);

    const track = () => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'ViewContent', {
          content_name: 'Ogami',
          content_category: 'Botanica Town',
          content_type: 'real_estate',
        });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'view_item', {
          item_id: 'ogami',
          item_name: 'Ogami / Botanica Town',
          item_category: 'real_estate',
        });
      }
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(track, { timeout: 10_000 });
    } else {
      globalThis.setTimeout(track, 8_000);
    }

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) metaDesc?.setAttribute('content', prevDesc);
    };
  }, [copy.meta.description, copy.meta.title]);

  return null;
}

function OgamiLandingBody() {
  return (
    <main>
      <OgamiMetaAndAnalytics />
      <OgamiHero />
      <OgamiUnitTypes />
      <OgamiLeadForm />
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[9rem]" />}>
        <OgamiUrgencyStrip />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[52rem]" />}>
        <OgamiLocation />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[48rem]" />}>
        <OgamiMasterplan />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[56rem]" />}>
        <OgamiAmenities />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[50vh]" />}>
        <OgamiGallery />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[30vh]" />}>
        <OgamiFAQ />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[40rem]" />}>
        <OgamiLeadForm placement="closing" />
      </Suspense>
      <DeferredBookingPopup loader={() => import('../components/ogami/OgamiBookingPopup')} />
    </main>
  );
}

const OgamiLanding = ({ locale = 'ar' }: { locale?: OgamiLocale }) => {
  return (
    <OgamiLocaleProvider locale={locale}>
      <OgamiLandingBody />
    </OgamiLocaleProvider>
  );
};

export default OgamiLanding;
