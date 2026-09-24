import React from 'react';
import { Link } from 'react-router-dom';

export default function CardBono({ bono }) {
  const isFeatured = bono.featured;

  return (
    <div
      className={`bg-white rounded-3xl p-8 border flex flex-col justify-between space-y-8 transition-all duration-300 ${
        isFeatured
          ? 'border-2 border-[#EB5E3A] shadow-2xl shadow-[#EB5E3A]/15 lg:-translate-y-3 relative'
          : 'border-[#EADDD3] shadow-sm hover:shadow-xl'
      }`}
    >
      <div className="space-y-4">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <span
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
            style={{ backgroundColor: bono.bgColor, color: bono.accentColor }}
          >
            <i className={`fa-solid ${bono.icon}`}></i>
          </span>
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
              isFeatured
                ? 'bg-[#EB5E3A] text-white'
                : 'text-stone-500 bg-[#F3ECE4]'
            }`}
          >
            {bono.categoryBadge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#18181B]">{bono.title}</h3>
          <p className="text-xs font-semibold mt-1" style={{ color: bono.accentColor }}>
            {bono.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-[#52525B] leading-relaxed">
          {bono.description}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {bono.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isFeatured
                  ? 'bg-[#FFDBD2] text-[#AA300F] font-bold'
                  : 'bg-[#F3ECE4] text-[#18181B]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer & Impact */}
      <div className="space-y-4 pt-4 border-t border-stone-100">
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
            isFeatured ? 'bg-[#FFF5F2] border-[#FFDBD2]' : 'bg-[#FDFBF7] border-[#F0E6DC]'
          }`}
        >
          <i
            className={`fa-solid ${bono.impactIcon} mt-0.5 text-base shrink-0`}
            style={{ color: bono.accentColor }}
          ></i>
          <p className="text-xs text-stone-600">
            <strong className="text-stone-900">Impacto social:</strong> {bono.impactNote}
          </p>
        </div>

        <Link
          to={`/bonos/${bono.slug}`}
          className={`w-full py-3.5 px-4 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 ${
            isFeatured
              ? 'bg-[#EB5E3A] hover:bg-[#AA300F] text-white shadow-md shadow-[#EB5E3A]/30'
              : 'bg-[#F3ECE4] hover:bg-[#EAE1D7] text-stone-900'
          }`}
        >
          <span>Ver Detalle y Cartelera</span>
          <i className={`fa-solid ${isFeatured ? 'fa-arrow-right' : 'fa-arrow-up-right-from-square'} text-xs`}></i>
        </Link>
      </div>
    </div>
  );
}
