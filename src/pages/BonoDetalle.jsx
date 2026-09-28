import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import ScrollReveal from '../components/common/ScrollReveal';
import TiltCard from '../components/common/TiltCard';
import { BONOS_DATA } from '../data/content';

export default function BonoDetalle() {
  const { tipo } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const bono = BONOS_DATA.find(
    (b) => b.slug.toLowerCase() === (tipo || '').toLowerCase()
  );

  if (!bono) {
    return <Navigate to="/bonos" replace />;
  }

  return (
    <div className="py-12 space-y-16">
      {/* Header Detail */}
      <ScrollReveal animation="fade-down" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          to="/bonos"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] hover:underline"
        >
          <i className="fa-solid fa-arrow-left"></i> Volver a todos los bonos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: bono.bgColor, color: bono.accentColor }}
            >
              <i className={`fa-solid ${bono.icon}`}></i> {bono.categoryBadge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
              {bono.title}
            </h1>
            <p className="text-base sm:text-lg font-medium text-stone-700">
              {bono.subtitle}
            </p>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              {bono.extendedDescription}
            </p>
          </div>

          <TiltCard className="lg:col-span-4 bg-white p-6 rounded-3xl border border-[#EADDD3] shadow-md space-y-6">
            <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#F0E6DC] flex items-center gap-3">
              <i className={`fa-solid ${bono.impactIcon} text-2xl`} style={{ color: bono.accentColor }}></i>
              <div>
                <span className="text-xs font-bold text-stone-900 block">Retorno Social</span>
                <span className="text-xs text-stone-600">{bono.impactNote}</span>
              </div>
            </div>

            <Link
              to="/sumate"
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#047857] hover:to-[#10B981] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Adquirir / Solicitar este Bono</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </TiltCard>
        </div>
      </ScrollReveal>

      {/* Benefits list */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181B]">
              Beneficios Exclusivos del {bono.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="stagger" stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bono.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E6DAD0] flex items-start gap-3 shadow-xs hover:border-[#10B981]/50 transition-all"
              >
                <i className="fa-solid fa-circle-check text-[#10B981] mt-1 text-base shrink-0"></i>
                <span className="text-sm text-stone-800 font-medium">{benefit}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* Cartelera Destacada de Ejemplo */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal animation="fade-up" className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
            Cartelera de Muestra
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181B]">
            Ejemplos de Eventos y Obras Incluidos
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="stagger" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bono.sampleEvents.map((ev, idx) => (
            <TiltCard key={idx} className="p-6 rounded-2xl bg-white border border-[#EADDD3] shadow-xs space-y-3">
              <span className="text-xs font-bold text-stone-500 block uppercase tracking-wider">{ev.date}</span>
              <h3 className="font-bold text-lg text-stone-900 leading-tight">{ev.name}</h3>
              <p className="text-xs text-[#10B981] font-semibold">
                <i className="fa-solid fa-location-dot mr-1"></i> {ev.venue}
              </p>
            </TiltCard>
          ))}
        </ScrollReveal>
      </div>

      {/* FAQ Section */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181B]">
              Preguntas Frecuentes sobre el {bono.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="stagger" stagger={0.1} className="space-y-4 max-w-3xl">
            {bono.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E6DAD0] overflow-hidden shadow-xs hover:border-[#10B981]/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-stone-900 flex justify-between items-center text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${openFaq === idx ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs text-[#10B981]`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-3 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Bottom */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="zoom-in">
          <CTA
            title={`Accedé hoy mismo al ${bono.title}`}
            subtitle="Sumate como espectador activo o apoyá a través de la red de mecenazgo social."
            buttonText="Solicitar Bono"
            buttonLink="/sumate"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
