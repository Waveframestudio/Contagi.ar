import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA({ title, subtitle, buttonText, buttonLink = '/sumate', secondaryText, secondaryLink }) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFDBD2]/60 via-[#F5EFE8] to-[#F9D9F7]/40 p-8 sm:p-12 lg:p-16 border border-[#E6DAD0] shadow-lg">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18181B] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to={buttonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#EB5E3A] hover:bg-[#AA300F] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EB5E3A]/25 transition-all hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
          {secondaryText && secondaryLink && (
            <Link
              to={secondaryLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm sm:text-base border border-[#E2D6C9] transition-colors"
            >
              <span>{secondaryText}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
