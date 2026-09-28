import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapSetup';

/**
 * CounterTrigger Component
 * Uses GSAP ScrollTrigger to count up numbers when scrolled into view.
 */
export default function CounterTrigger({
  start = 0,
  end = 100,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  threshold = 'top 85%',
  className = '',
}) {
  const [displayValue, setDisplayValue] = useState(start);
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const counterObj = { val: start };

    const ctx = gsap.context(() => {
      gsap.to(counterObj, {
        val: end,
        duration: duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: threshold,
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          setDisplayValue(counterObj.val);
        },
      });
    }, elRef);

    return () => ctx.revert();
  }, [start, end, duration, threshold]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue);

  return (
    <span ref={elRef} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
