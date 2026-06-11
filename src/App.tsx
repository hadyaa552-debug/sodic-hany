import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FloatingActionBar from './components/FloatingActionBar';
import MobileBottomBar from './components/MobileBottomBar';
import HeaderShortAr from './components/HeaderShortAr';
import FooterShortAr from './components/FooterShortAr';
import OgamiLanding from './pages/OgamiLanding';
import { config } from './config';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Landing = lazy(() => import('./pages/Landing'));
const LandingShortAr = lazy(() => import('./pages/LandingShortAr'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const EastLanding = lazy(() => import('./pages/EastLanding'));
const EastvaleLanding = lazy(() => import('./pages/EastvaleLanding'));

function PageFallback() {
  return <div className="min-h-[40vh] bg-white" aria-hidden />;
}

function App() {
  const arWa = config.whatsappDefaultMessageAr;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0">
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <Suspense fallback={<PageFallback />}>
                <Landing />
              </Suspense>
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
              <FloatingActionBar />
              <MobileBottomBar labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }} />
            </div>
          }
        />
        <Route
          path="/ar"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <Suspense fallback={<PageFallback />}>
                <LandingShortAr />
              </Suspense>
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={arWa} />
              <MobileBottomBar
                whatsappMessage={arWa}
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/ar/ogami"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <OgamiLanding locale="ar" />
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={config.whatsappOgamiMessageAr} />
              <MobileBottomBar
                whatsappMessage={config.whatsappOgamiMessageAr}
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/ogami"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0" dir="ltr" lang="en">
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <OgamiLanding locale="en" />
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
              <FloatingActionBar whatsappMessage={config.whatsappOgamiMessageEn} />
              <MobileBottomBar
                whatsappMessage={config.whatsappOgamiMessageEn}
                labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }}
              />
            </div>
          }
        />
        <Route
          path="/ar/east"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <Suspense fallback={null}>
                <EastLanding locale="ar" />
              </Suspense>
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={config.whatsappEastMessageAr} />
              <MobileBottomBar
                whatsappMessage={config.whatsappEastMessageAr}
                leadFormSectionId="east-lead-form"
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/east"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0" dir="ltr" lang="en">
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <Suspense fallback={null}>
                <EastLanding locale="en" />
              </Suspense>
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
              <FloatingActionBar whatsappMessage={config.whatsappEastMessageEn} />
              <MobileBottomBar
                whatsappMessage={config.whatsappEastMessageEn}
                leadFormSectionId="east-lead-form"
                labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }}
              />
            </div>
          }
        />
        <Route
          path="/ar/eastvale"
          element={
            <div className="min-h-screen bg-white pb-24 font-arabic md:pb-0" dir="rtl" lang="ar">
              <HeaderShortAr />
              <Suspense fallback={null}>
                <EastvaleLanding locale="ar" />
              </Suspense>
              <FooterShortAr />
              <FloatingActionBar rtl whatsappMessage={config.whatsappEastvaleMessageAr} />
              <MobileBottomBar
                whatsappMessage={config.whatsappEastvaleMessageAr}
                leadFormSectionId="eastvale-lead-form"
                labels={{ call: 'اتصل بنا', whatsapp: 'واتساب', register: 'تسجيل' }}
              />
            </div>
          }
        />
        <Route
          path="/eastvale"
          element={
            <div className="min-h-screen bg-white pb-24 md:pb-0" dir="ltr" lang="en">
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <Suspense fallback={null}>
                <EastvaleLanding locale="en" />
              </Suspense>
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
              <FloatingActionBar whatsappMessage={config.whatsappEastvaleMessageEn} />
              <MobileBottomBar
                whatsappMessage={config.whatsappEastvaleMessageEn}
                leadFormSectionId="eastvale-lead-form"
                labels={{ call: 'Call us', whatsapp: 'WhatsApp', register: 'Register' }}
              />
            </div>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={null}>
              <ThankYou />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
