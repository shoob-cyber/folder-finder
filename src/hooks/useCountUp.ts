import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface UseCountUpOptions {
  endValue: number;
  duration?: number;
  startWhenVisible?: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function useCountUp({
  endValue,
  duration = 2,
  startWhenVisible = true,
  prefix = "",
  suffix = "",
  decimals = 0,
}: UseCountUpOptions) {
  const [displayValue, setDisplayValue] = useState<string>(`${prefix}0${suffix}`);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startWhenVisible || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const counterObj = { val: 0 };

          gsap.to(counterObj, {
            val: endValue,
            duration: duration,
            ease: "power2.out",
            onUpdate: () => {
              const formattedNumber = decimals > 0 
                ? counterObj.val.toFixed(decimals) 
                : Math.floor(counterObj.val).toLocaleString();
              setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
            },
            onComplete: () => {
              const finalFormatted = decimals > 0 
                ? endValue.toFixed(decimals) 
                : endValue.toLocaleString();
              setDisplayValue(`${prefix}${finalFormatted}${suffix}`);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [endValue, duration, startWhenVisible, prefix, suffix, decimals, hasAnimated]);

  return { displayValue, elementRef };
}
