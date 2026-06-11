import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  /** Final value to animate to */
  to: number;
  /** Optional starting value (defaults to 0) */
  from?: number;
  /** Duration in ms (defaults to 1400) */
  duration?: number;
  /** When false the count stays at `from` (useful with InView) */
  start: boolean;
  /** Decimal places to round to (defaults to 0) */
  decimals?: number;
}

/** Lightweight count-up that respects an external `start` trigger (e.g. InView). */
export function useCountUp({ to, from = 0, duration = 1400, start, decimals = 0 }: UseCountUpOptions) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const factor = 10 ** decimals;
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (to - from) * eased;
      setValue(Math.round(next * factor) / factor);
      if (t < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, to, from, duration, decimals]);

  return value;
}
