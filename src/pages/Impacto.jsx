import React from 'react';
import Section from '../components/Section';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import { IMPACT_METRICS } from '../data/content';

export default function Impacto() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#EB5E3A] font-bold">
          Medición y Transformación Social
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
          Nuestro Impacto Social &amp; Cultural
        </h1>
        <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Métricas de retorno social de la inversión (SROI), ocupación de salas y la creación de nuevos públicos culturales en Argentina.
        </p>
      </div>

      {/* Main Metrics Display */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-[#EADDD3] shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C05400]">SROI Estimado</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-[#C05400]">{IMPACT_METRICS.sroi}</span>
              <span className="text-xs text-[#71717A]">por cada $1 invertido</span>
            </div>
            <p className="text-xs text-[#52525B] leading-relaxed">{IMPACT_METRICS.sroiDesc}</p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-[#EADDD3] shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EB5E3A]">Ocupación de Butacas</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-[#EB5E3A]">{IMPACT_METRICS.occupancy}</span>
              <span className="text-xs text-[#71717A]">promedio mensual</span>
            </div>
            <p className="text-xs text-[#52525B] leading-relaxed">{IMPACT_METRICS.occupancyDesc}</p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-[#EADDD3] shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6F5670]">Nuevos Públicos</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-[#6F5670]">{IMPACT_METRICS.newAudiences}</span>
              <span className="text-xs text-[#71717A]">primera experiencia</span>
            </div>
            <p className="text-xs text-[#52525B] leading-relaxed">{IMPACT_METRICS.newAudiencesDesc}</p>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#18181B]">
              Voces del Ecosistema
            </h2>
            <p className="text-sm text-[#52525B]">
              Qué dicen los referentes culturales y los espectadores activos sobre Contagi.ar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              quote="“Contagi.ar demostró que el arte no debe ser un privilegio ocasional, sino un hábito colectivo constante.”"
              author="Dra. Mariana Rossi"
              role="Red Federal de Espacios Escénicos"
            />
            <Testimonial
              quote="“Logramos llenar Butacas que antes quedaban vacías los días de semana. El público de Contagiar es entusiasta y multiplicador.”"
              author="Carlos M. Santander"
              role="Director del Teatro El Picadero"
            />
          </div>
        </div>
      </Section>

      {/* CTA Bottom */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <CTA
          title="Sé parte del informe de impacto 2025–2026"
          subtitle="Sumate como empresa o institución aliada para desgravar impuestos e impulsar la cultura."
          buttonText="Agendar Reunión"
          buttonLink="/sumate"
        />
      </div>
    </div>
  );
}
