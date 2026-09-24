import React from 'react';

export default function Feature({ icon, iconBg = '#FFDBD2', iconColor = '#EB5E3A', title, description, tag, tagColor = '#EB5E3A' }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-[#E6DAD0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <h3 className="font-bold text-xl text-[#18181B]">{title}</h3>
        <p className="text-sm text-[#52525B] leading-relaxed">{description}</p>
      </div>
      {tag && (
        <div className="pt-6 mt-6 border-t border-stone-100">
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: tagColor }}
          >
            {tag}
          </span>
        </div>
      )}
    </div>
  );
}
