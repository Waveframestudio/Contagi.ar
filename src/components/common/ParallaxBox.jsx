import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapSetup';

/**
 * ParallaxBox Component
 * Smoothly translates children on Y axis based on scroll position (scrub effect).
 */
export default function ParallaxBox({
  speed = 0.2, // speed factor: positive moves down faster, negative moves up
  direction = 'y',
  className = '',
  children,
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const yMove = speed * 100;
      
      gsap.to(el, {
        y: yMove,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}
