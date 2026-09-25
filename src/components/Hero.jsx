import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-28">
      {/* Background Hero Image overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/cultural_hero_bg.png"
          alt="Atmósfera Cultural en Vivo"
          className="w-full h-full object-cover object-center opacity-15 filter brightness-90 contrast-125 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/95 to-[#FDFBF7]"></div>
      </div>

      {/* Background Lighting & Glow Spheres Multi-Tone Green */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#A7F3D0]/50 via-[#10B981]/25 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-96 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6EE7B7]/40 via-[#34D399]/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50/90 backdrop-blur-md text-emerald-800 text-xs uppercase tracking-wider font-extrabold border border-emerald-200 shadow-xs">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span>ONG Contagi.ar · Dirección Cultural: Natalia &amp; Melina</span>
            </div>

            {/* Title with Gradient Text */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#18181B] leading-[1.12] tracking-tight">
              El cambio positivo{' '}
              <span className="italic font-medium underline decoration-[#10B981]/40 underline-offset-8 gradient-text-brand">
                se contagia
              </span>
              . <br className="hidden sm:inline" />
              La cultura se multiplica.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-2xl font-normal">
              Democratizamos el acceso a la cultura y el deporte en Argentina. Un modelo solidario impulsado por Natalia y Melina con pase principal a <strong className="font-semibold text-[#10B981]">Conciertos en vivo</strong>, además de Fútbol barrial, Teatros y Cine independiente.
            </p>

            {/* Metrics Bar with Glassmorphism */}
            <div className="w-full grid grid-cols-3 gap-3 sm:gap-4 py-2">
              <div className="p-4 rounded-2xl glass-card shadow-xs flex flex-col hover:border-[#10B981]/50 transition-all hover:scale-[1.02]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#10B981] font-bold">100%</span>
                <span className="text-xs sm:text-sm text-[#71717A] mt-1 font-semibold leading-snug">Solidario &amp; Autosustentable</span>
              </div>
              <div className="p-4 rounded-2xl glass-card shadow-xs flex flex-col hover:border-[#34D399]/50 transition-all hover:scale-[1.02]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#059669] font-bold">Ilimitado</span>
                <span className="text-xs sm:text-sm text-[#71717A] mt-1 font-semibold leading-snug">Eventos por bono</span>
              </div>
              <div className="p-4 rounded-2xl glass-card shadow-xs flex flex-col hover:border-[#047857]/50 transition-all hover:scale-[1.02]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#047857] font-bold">+55</span>
                <span className="text-xs sm:text-sm text-[#71717A] mt-1 font-semibold leading-snug">Salas, Escenarios &amp; Clubes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2">
              <Link
                to="/bonos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#047857] via-[#10B981] to-[#34D399] text-white font-bold text-sm sm:text-base gradient-glow hover:gradient-glow-lg hover:-translate-y-1 transition-all text-center"
              >
                <span>Conocer los 4 Bonos Culturales</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
              <Link
                to="/sumate"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/90 backdrop-blur-md text-[#18181B] font-bold text-sm sm:text-base hover:bg-white hover:border-[#10B981]/40 transition-all text-center border border-emerald-200 shadow-xs"
              >
                <span>Sumate como Inversora / Aliada</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Card - Persona Founders Spotlight */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Interactive Animated Wave Background Multi-Tone Green */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none scale-125 opacity-50">
              <div className="w-72 h-72 rounded-full border border-dashed border-[#10B981] animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="w-96 h-96 rounded-full border border-[#34D399]/40 absolute"></div>
            </div>

            {/* Glassmorphism Floating Card with Natalia and Melina */}
            <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl shadow-emerald-950/10 border border-emerald-100 flex flex-col gap-6 animate-float">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                  Dirección &amp; Liderazgo ONG
                </span>
                <span className="text-xs font-bold text-emerald-700 font-mono tracking-wider">2025–2026</span>
              </div>

              {/* Persona Spotlight: Natalia & Melina */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-teal-50/50 border border-emerald-100 shadow-xs">
                <img
                  alt="Natalia y Melina - Dirección General de Contagi.ar"
                  className="w-16 h-16 rounded-full object-cover shadow-md ring-2 ring-[#10B981] shrink-0"
                  src="/natalia_melina.png"
                />
                <div>
                  <h4 className="font-bold text-stone-900 text-base leading-tight">Natalia &amp; Melina</h4>
                  <p className="text-xs font-bold text-[#10B981]">Dirección &amp; Coordinación Cultural</p>
                  <p className="text-xs text-stone-600 italic mt-0.5 leading-snug">“El arte y el deporte abren puertas que la economía a menudo cierra.”</p>
                </div>
              </div>

              {/* Capacity Gauge */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-stone-600">
                  <span>Capacidad de salas &amp; estadios optimizada</span>
                  <span className="text-sm font-bold text-[#10B981]">88.4%</span>
                </div>
                <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden p-0.5 border border-stone-200">
                  <div className="bg-gradient-to-r from-[#047857] via-[#10B981] to-[#34D399] h-full rounded-full w-[88.4%] transition-all duration-1000 shadow-sm"></div>
                </div>
              </div>

              {/* Category Pills Preview */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <Link to="/bonos/conciertos" className="p-2.5 sm:p-3 rounded-2xl bg-emerald-50 border-2 border-[#10B981] text-xs font-bold text-emerald-950 flex flex-col items-center shadow-sm relative overflow-hidden">
                  <span className="absolute -top-1 -right-1 bg-[#10B981] text-white text-[9px] px-1.5 py-0.5 rounded-bl font-extrabold">★</span>
                  <i className="fa-solid fa-headphones-simple text-[#10B981] text-lg mb-1"></i>
                  <span className="text-[11px]">Conciertos</span>
                </Link>
                <Link to="/bonos/futbol" className="p-2.5 sm:p-3 rounded-2xl bg-white border border-emerald-100 text-xs font-bold text-stone-800 flex flex-col items-center hover:border-[#059669] hover:bg-emerald-50/50 hover:shadow-md transition-all">
                  <i className="fa-solid fa-futbol text-[#059669] text-lg mb-1"></i>
                  <span className="text-[11px]">Fútbol</span>
                </Link>
                <Link to="/bonos/teatros" className="p-2.5 sm:p-3 rounded-2xl bg-white border border-emerald-100 text-xs font-bold text-stone-800 flex flex-col items-center hover:border-[#047857] hover:bg-emerald-50/30 hover:shadow-md transition-all">
                  <i className="fa-solid fa-masks-theater text-[#047857] text-lg mb-1"></i>
                  <span className="text-[11px]">Teatros</span>
                </Link>
                <Link to="/bonos/cine" className="p-2.5 sm:p-3 rounded-2xl bg-white border border-emerald-100 text-xs font-bold text-stone-800 flex flex-col items-center hover:border-[#34D399] hover:bg-emerald-50/30 hover:shadow-md transition-all">
                  <i className="fa-solid fa-film text-[#10B981] text-lg mb-1"></i>
                  <span className="text-[11px]">Cine</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
