import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapSetup';

/**
 * ScrollReveal Component
 * Wraps content and applies GSAP ScrollTrigger animations on scroll into view.
 * 
 * Props:
 * - animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip' | 'stagger'
 * - delay: delay in seconds (default 0)
 * - duration: animation duration in seconds (default 0.9)
 * - distance: distance in pixels for movement (default 40)
 * - stagger: stagger duration between children if animation is 'stagger' (default 0.12)
 * - ease: GSAP easing string (default 'power3.out')
 * - threshold: viewport trigger threshold (default 'top 85%')
 * - once: trigger only once or reverse on scroll up (default true)
 * - className: container CSS classes
 * - children: React elements to animate
 */
export default function ScrollReveal({
  animation = 'fade-up',
  delay = 0,
  duration = 0.9,
  distance = 45,
  stagger = 0.12,
  ease = 'power3.out',
  threshold = 'top 85%',
  once = true,
  className = '',
  children,
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Configure animation start values
      let initialVars = { opacity: 0 };
      
      switch (animation) {
        case 'fade-up':
          initialVars.y = distance;
          break;
        case 'fade-down':
          initialVars.y = -distance;
          break;
        case 'fade-left':
          initialVars.x = distance;
          break;
        case 'fade-right':
          initialVars.x = -distance;
          break;
        case 'zoom-in':
          initialVars.scale = 0.88;
          break;
        case 'flip':
          initialVars.rotationX = 45;
          initialVars.transformOrigin = 'center top';
          break;
        case 'stagger':
          initialVars.y = distance;
          break;
        default:
          initialVars.y = distance;
      }

      const scrollTriggerConfig = {
        trigger: el,
        start: threshold,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      };

      if (animation === 'stagger') {
        const targets = el.children.length > 0 ? Array.from(el.children) : [el];
        gsap.fromTo(
          targets,
          initialVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: ease,
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else {
        gsap.fromTo(
          el,
          initialVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: duration,
            delay: delay,
            ease: ease,
            scrollTrigger: scrollTriggerConfig,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [animation, delay, duration, distance, stagger, ease, threshold, once]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}
