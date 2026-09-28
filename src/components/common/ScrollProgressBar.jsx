import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapSetup';

export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const ctx = gsap.context(() => {
      gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-stone-200/30">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#047857] via-[#10B981] to-[#34D399] origin-left scale-x-0 shadow-sm"
      />
    </div>
  );
}
