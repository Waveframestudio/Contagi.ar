import React, { useState } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import CardBono from '../components/CardBono';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import ScrollReveal from '../components/common/ScrollReveal';
import CounterTrigger from '../components/common/CounterTrigger';
import ProgressBarTrigger from '../components/common/ProgressBarTrigger';
import TiltCard from '../components/common/TiltCard';
import ParallaxBox from '../components/common/ParallaxBox';
import { BONOS_DATA, TESIS_PILARS, STEPS_DATA, IMPACT_METRICS } from '../data/content';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* 1. HERO PRINCIPAL */}
      <Hero />

      {/* 2. NUESTRA TESIS SOCIAL */}
      <Section id="que-es-contagiar" bg="surface" className="py-20 md:py-28 relative overflow-hidden">
        <ParallaxBox speed={0.15} className="absolute top-10 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal animation="fade-up" className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#10B981] font-extrabold bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-300">
              Nuestra Tesis Social
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-semibold leading-tight">
              Contagi<span className="gradient-text-brand">.ar</span> es una tesis de transformación colectiva.
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed pt-1">
              Cuando una persona accede al arte, su entusiasmo e impacto conmueven a su entorno familiar, laboral y barrial. Rechazamos el modelo de boletería excluyente: creamos un ecosistema de participación continua que sostiene a las salas y despierta a la ciudadanía.
            </p>
          </ScrollReveal>

          {/* 3 Pilares con GSAP Stagger Reveal */}
          <ScrollReveal animation="stagger" stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESIS_PILARS.map((pilar) => (
              <TiltCard key={pilar.num} className="h-full">
                <Feature
                  title={`${pilar.num}. ${pilar.title}`}
                  description={pilar.desc}
                  tag={pilar.tag}
                  tagColor={pilar.tagColor}
                  icon={pilar.icon}
                  iconBg={pilar.iconBg}
                  iconColor={pilar.iconColor}
                />
              </TiltCard>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* 3. MODALIDADES DE BONOS CULTURALES */}
      <Section id="bonos-culturales" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#10B981] font-extrabold bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-300">
            Membresías Solidarias
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-semibold">
            Cuatro Modalidades de Bonos
          </h2>
          <p className="text-sm sm:text-base text-[#52525B]">
            Diseñadas para democratizar el acceso a espectáculos en vivo, deporte popular, teatro independiente y cine de autor.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="stagger" stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {BONOS_DATA.map((bono) => (
            <TiltCard key={bono.id} className="h-full">
              <CardBono bono={bono} />
            </TiltCard>
          ))}
        </ScrollReveal>
      </Section>

      {/* 4. CÓMO FUNCIONA EL MODELO (Flujo de 4 pasos) */}
      <Section id="como-funciona" bg="surface" className="py-20 md:py-28 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#10B981] font-extrabold bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-300">
              Proceso Transparente
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-semibold">
              Cómo Funciona el Modelo Contagi.ar
            </h2>
            <p className="text-sm sm:text-base text-[#52525B]">
              Simple, digital e inmediato tanto para el público usuario como para la rendición institucional.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS_DATA.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="glass-card p-7 rounded-3xl shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[220px] hover:border-[#10B981]/50 transition-all hover:-translate-y-1"
              >
                <span className="font-serif text-6xl text-emerald-950/10 font-bold absolute top-2 right-4 select-none pointer-events-none">
                  {stepItem.step}
                </span>
                <div className="space-y-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#047857] via-[#10B981] to-[#34D399] text-white flex items-center justify-center font-bold text-base shadow-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#18181B]">{stepItem.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* 5. IMPACTO SOCIAL Y MÉTRICAS */}
      <Section id="impacto-social" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#10B981] font-extrabold bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-300">
                Métricas de Retorno Social
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-semibold leading-tight">
                Impacto que se mide en vidas y butacas llenas.
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                Nuestro panel monitoriza la sustentabilidad financiera, la densificación del tejido barrial y la incorporación de audiencias que antes quedaban al margen.
              </p>
              <Testimonial
                quote={IMPACT_METRICS.testimonial.quote}
                author={IMPACT_METRICS.testimonial.author}
                role={IMPACT_METRICS.testimonial.role}
              />
            </ScrollReveal>

            <ScrollReveal animation="stagger" stagger={0.15} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 rounded-3xl bg-white border border-[#E6DAD0] shadow-sm space-y-4 hover:border-[#10B981]/50 transition-all">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">SROI Estimado</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-4xl font-bold text-[#10B981]">
                      4:1
                    </span>
                    <span className="text-xs text-[#71717A]">por cada $1 invertido</span>
                  </div>
                </div>
                <p className="text-xs text-[#52525B] leading-relaxed">{IMPACT_METRICS.sroiDesc}</p>
                <ProgressBarTrigger targetWidth={75} duration={1.5} containerClassName="w-full bg-emerald-100 h-2 rounded-full overflow-hidden" className="bg-[#10B981] h-full rounded-full" />
              </div>

              <div className="p-7 rounded-3xl bg-white border border-[#E6DAD0] shadow-sm space-y-4 hover:border-[#059669]/50 transition-all">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Ocupación de Butacas</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-4xl font-bold text-[#059669]">
                      <CounterTrigger end={88.4} suffix="%" decimals={1} />
                    </span>
                    <span className="text-xs text-[#71717A]">promedio mensual</span>
                  </div>
                </div>
                <p className="text-xs text-[#52525B] leading-relaxed">{IMPACT_METRICS.occupancyDesc}</p>
                <ProgressBarTrigger targetWidth={88.4} duration={1.6} containerClassName="w-full bg-emerald-100 h-2 rounded-full overflow-hidden" className="bg-[#059669] h-full rounded-full" />
              </div>

              <div className="sm:col-span-2 p-7 rounded-3xl bg-white border border-[#E6DAD0] shadow-sm space-y-4 hover:border-[#047857]/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#047857]">Inclusión de Nuevos Públicos</span>
                    <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#047857] mt-1">
                      <CounterTrigger end={68} suffix="%" />
                    </h3>
                  </div>
                  <div className="max-w-xs">
                    <p className="text-xs sm:text-sm text-[#52525B]">
                      {IMPACT_METRICS.newAudiencesDesc}
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-600">
                    <span>Públicos Novedosos (68%)</span>
                    <span>Públicos Frecuentes (32%)</span>
                  </div>
                  <ProgressBarTrigger targetWidth={68} duration={1.6} containerClassName="w-full flex h-3.5 rounded-full overflow-hidden p-0.5 bg-stone-100 border border-stone-200" className="bg-[#10B981] h-full rounded-l-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* 6. FORMULARIO / SUMATE CTA */}
      <Section id="pitch-formulario" bg="surface" className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="zoom-in" className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100/90 via-[#FDFBF7] to-teal-100/60 p-8 sm:p-12 lg:p-16 border border-emerald-200 shadow-xl" id="alianzas-e-inversion-social">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#10B981] text-xs font-extrabold shadow-xs border border-emerald-200">
                  <i className="fa-solid fa-handshake"></i>
                  <span>Convocatoria Abierta 2025–2026</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18181B] leading-tight">
                  Construyamos juntos el mayor puente cultural de la región.
                </h2>
                <p className="text-base text-[#52525B] leading-relaxed">
                  Buscamos organizaciones, fondos filantrópicos, salas de teatro y personas interesadas para escalar este modelo solidario.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-stone-800 text-sm font-medium">
                    <i className="fa-solid fa-circle-check text-[#10B981] mt-1 text-base shrink-0"></i>
                    <span>Informes trimestrales de gobernanza y trazabilidad de fondos.</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-800 text-sm font-medium">
                    <i className="fa-solid fa-circle-check text-[#10B981] mt-1 text-base shrink-0"></i>
                    <span>Beneficios de desgravación impositiva para mecenazgo e inversión social.</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-800 text-sm font-medium">
                    <i className="fa-solid fa-circle-check text-[#10B981] mt-1 text-base shrink-0"></i>
                    <span>Acceso exclusivo a funciones y red de salas independientes.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white/95 backdrop-blur-md p-7 sm:p-8 rounded-3xl border border-emerald-200 shadow-xl space-y-6">
                  <div>
                    <h3 className="font-bold text-xl text-[#18181B]">Sumate o Agendá una Reunión</h3>
                    <p className="text-xs sm:text-sm text-[#71717A] mt-1">Coordinemos un encuentro o solicitá tu pase cultural.</p>
                  </div>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="entity-name">Nombre completo / Organización</label>
                      <input className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]" id="entity-name" placeholder="Ej: Fundación Horizonte / María López" required type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="alliance-type">Tipo de Interés</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]" id="alliance-type">
                        <option value="espectador">Quiero Adquirir un Bono Cultural</option>
                        <option value="inversion">Inversión Social Semilla / Filantropía</option>
                        <option value="sala">Sala Cultural o Teatro Aliado</option>
                        <option value="auspicio">Auspicio Institucional / RSE</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="investor-email">Correo Electrónico</label>
                      <input className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]" id="investor-email" placeholder="contacto@ejemplo.org" required type="email" />
                    </div>
                    <div className="pt-2">
                      <button className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#047857] hover:to-[#10B981] text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2" type="submit">
                        <span>Enviar Solicitud</span>
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                      </button>
                    </div>
                    {formSubmitted && (
                      <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold text-center animate-in fade-in">
                        ¡Gracias por tu interés! Nuestro equipo se contactará dentro de las próximas 24 horas hábiles.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
