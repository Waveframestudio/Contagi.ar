import React, { useRef } from 'react';
import { gsap } from '../../utils/gsapSetup';

/**
 * TiltCard Component
 * GSAP-powered subtle 3D tilt and elevation on mouse movement.
 */
export default function TiltCard({
  maxTilt = 8,
  scale = 1.02,
  className = '',
  children,
  ...props
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: scale,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-shadow duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
    </div>
  );
}
