import React from 'react';
import Section from '../components/Section';
import CTA from '../components/CTA';
import ScrollReveal from '../components/common/ScrollReveal';
import TiltCard from '../components/common/TiltCard';
import { STEPS_DATA } from '../data/content';

export default function ComoFunciona() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <ScrollReveal animation="fade-down" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#10B981] font-bold">
          Transparencia y Tecnología
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
          Cómo Funciona el Ecosistema Contagi.ar
        </h1>
        <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Explicación paso a paso de cómo conectamos al público, las salas de espectáculos independientes y los fondos de mecenazgo en un círculo virtuoso.
        </p>
      </ScrollReveal>

      {/* Steps detailed */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="stagger" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEPS_DATA.map((stepItem, idx) => (
            <TiltCard
              key={stepItem.step}
              className="p-8 rounded-3xl bg-white border border-[#EADDD3] shadow-sm relative overflow-hidden flex flex-col justify-between space-y-6"
            >
              <span className="font-serif text-7xl text-stone-100 font-bold absolute top-2 right-6 select-none pointer-events-none">
                {stepItem.step}
              </span>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#18181B]">
                  {stepItem.title}
                </h2>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </ScrollReveal>
      </div>

      {/* Tech & Transparency Section */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal animation="fade-up" className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#047857]">
              Seguridad &amp; Trazabilidad
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#18181B]">
              Garantías del Modelo ONG
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="stagger" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E6DAD0] space-y-3 shadow-xs hover:border-[#10B981]/50 transition-all">
              <i className="fa-solid fa-qrcode text-[#10B981] text-2xl"></i>
              <h3 className="font-bold text-stone-900">QR Encriptado Dinámico</h3>
              <p className="text-xs text-stone-600">Evita la reventa y garantiza el uso personal y responsable del bono.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DAD0] space-y-3 shadow-xs hover:border-[#059669]/50 transition-all">
              <i className="fa-solid fa-chart-pie text-[#059669] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Redistribución Automatizada</h3>
              <p className="text-xs text-stone-600">Fondos acreditados semanalmente a salas aliadas por butaca ocupada real.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DAD0] space-y-3 shadow-xs hover:border-[#047857]/50 transition-all">
              <i className="fa-solid fa-file-contract text-[#047857] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Auditoría Social Abierta</h3>
              <p className="text-xs text-stone-600">Reportes de métricas disponibles para aliadas e inversoras de impacto.</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Bottom */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="zoom-in">
          <CTA
            title="¿Listo para formar parte del cambio?"
            subtitle="Comenzá a disfrutar de eventos culturales ilimitados apoyando a los creadores locales."
            buttonText="Explorar Bonos"
            buttonLink="/bonos"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
