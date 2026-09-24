import React from 'react';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { STEPS_DATA } from '../data/content';

export default function ComoFunciona() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#EB5E3A] font-bold">
          Transparencia y Tecnología
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
          Cómo Funciona el Ecosistema Contagi.ar
        </h1>
        <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Explicación paso a paso de cómo conectamos al público, las salas de espectáculos independientes y los fondos de mecenazgo en un círculo virtuoso.
        </p>
      </div>

      {/* Steps detailed */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEPS_DATA.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="p-8 rounded-3xl bg-white border border-[#EADDD3] shadow-sm relative overflow-hidden flex flex-col justify-between space-y-6"
            >
              <span className="font-serif text-7xl text-stone-100 font-bold absolute top-2 right-6 select-none pointer-events-none">
                {stepItem.step}
              </span>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#EB5E3A]/10 text-[#EB5E3A] flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#18181B]">
                  {stepItem.title}
                </h2>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech & Transparency Section */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6F5670]">
              Seguridad &amp; Trazabilidad
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#18181B]">
              Garantías del Modelo ONG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E6DAD0] space-y-3">
              <i className="fa-solid fa-qrcode text-[#EB5E3A] text-2xl"></i>
              <h3 className="font-bold text-stone-900">QR Encriptado Dinámico</h3>
              <p className="text-xs text-stone-600">Evita la reventa y garantiza el uso personal y responsable del bono.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DAD0] space-y-3">
              <i className="fa-solid fa-chart-pie text-[#C05400] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Redistribución Automatizada</h3>
              <p className="text-xs text-stone-600">Fondos acreditados semanalmente a salas aliadas por butaca ocupada real.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DAD0] space-y-3">
              <i className="fa-solid fa-file-contract text-[#6F5670] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Auditoría Social Abierta</h3>
              <p className="text-xs text-stone-600">Reportes de métricas disponibles para aliadas e inversoras de impacto.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Bottom */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <CTA
          title="¿Listo para formar parte del cambio?"
          subtitle="Comenzá a disfrutar de eventos culturales ilimitados apoyando a los creadores locales."
          buttonText="Explorar Bonos"
          buttonLink="/bonos"
        />
      </div>
    </div>
  );
}
