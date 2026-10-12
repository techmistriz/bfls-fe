import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  duration?: number;
  threshold?: number;
  // How long the element must stay in view before counting starts, so
  // scrolling past it (e.g. a nav link jumping further down) doesn't trigger it.
  delay?: number;
}

export function useCountUp(
  targets: number[],
  { duration = 1800, threshold = 0.6, delay = 200 }: UseCountUpOptions = {},
) {
  // Attach to the element holding the numbers, not the whole section, so the
  // count starts when the numbers themselves are on screen.
  const ref = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState<number[]>(targets.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || started) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);

        if (entry.isIntersecting) {
          timer = setTimeout(() => setStarted(true), delay);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [started, threshold, delay]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((target) => Math.floor(target * easedProgress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, duration]);

  return { ref, counts };
}
