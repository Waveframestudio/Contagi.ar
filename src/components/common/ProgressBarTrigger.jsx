import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapSetup';

/**
 * ProgressBarTrigger Component
 * Animates a progress bar fill from 0% to target % with GSAP ScrollTrigger.
 */
export default function ProgressBarTrigger({
  targetWidth = 88.4,
  duration = 1.6,
  delay = 0.2,
  threshold = 'top 90%',
  className = 'h-full rounded-full bg-gradient-to-r from-[#047857] via-[#10B981] to-[#34D399] shadow-sm',
  containerClassName = 'w-full bg-stone-100 h-3 rounded-full overflow-hidden p-0.5 border border-stone-200',
}) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { width: '0%' },
        {
          width: `${targetWidth}%`,
          duration: duration,
          delay: delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: threshold,
            toggleActions: 'play none none none',
          },
        }
      );
    }, barRef);

    return () => ctx.revert();
  }, [targetWidth, duration, delay, threshold]);

  return (
    <div className={containerClassName}>
      <div ref={barRef} className={className} style={{ width: '0%' }} />
    </div>
  );
}
