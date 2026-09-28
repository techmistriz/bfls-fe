import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  duration?: number;
  threshold?: number;
}

export function useCountUp(
  targets: number[],
  { duration = 1800, threshold = 0.35 }: UseCountUpOptions = {},
) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<number[]>(targets.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [started, threshold]);

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

  return { sectionRef, counts };
}
