import React from 'react';

export default function Section({ id, className = '', bg = 'default', children }) {
  const bgClasses = {
    default: '',
    surface: 'w-full bg-[#F5EFE8] border-y border-[#E6DAD0]',
    card: 'bg-white border border-[#EADDD3]',
  };

  return (
    <section id={id} className={`${bgClasses[bg] || ''} ${className}`}>
      {children}
    </section>
  );
}
