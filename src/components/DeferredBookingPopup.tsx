import { lazy, Suspense, useEffect, useState, type ComponentType } from 'react';

type DeferredBookingPopupProps = {
  loadDelayMs?: number;
  loader: () => Promise<{ default: ComponentType }>;
};

const DeferredBookingPopup = ({ loadDelayMs = 25_000, loader }: DeferredBookingPopupProps) => {
  const [ready, setReady] = useState(false);
  const Popup = lazy(loader);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), loadDelayMs);
    return () => window.clearTimeout(timer);
  }, [loadDelayMs]);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <Popup />
    </Suspense>
  );
};

export default DeferredBookingPopup;
