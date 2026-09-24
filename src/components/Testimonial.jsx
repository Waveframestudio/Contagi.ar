import React from 'react';

export default function Testimonial({ quote, author, role, icon = "fa-quote-left" }) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6DAD0] shadow-xs space-y-3">
      <i className={`fa-solid ${icon} text-3xl text-[#EB5E3A]/40`}></i>
      <p className="font-serif text-lg sm:text-xl text-[#18181B] italic leading-relaxed">
        {quote}
      </p>
      <div className="pt-2 border-t border-stone-100">
        <span className="font-bold text-stone-900 block text-sm">{author}</span>
        {role && <span className="text-xs text-[#71717A]">{role}</span>}
      </div>
    </div>
  );
}
