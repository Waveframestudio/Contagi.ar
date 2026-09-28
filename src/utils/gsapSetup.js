import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Helper to refresh all ScrollTriggers (useful on route navigation)
 */
export function refreshScrollTriggers() {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

/**
 * Configure global GSAP defaults
 */
gsap.config({
  autoSleep: 60,
  force3D: true,
});
