import React from 'react';
import Section from '../components/Section';
import CardBono from '../components/CardBono';
import CTA from '../components/CTA';
import ScrollReveal from '../components/common/ScrollReveal';
import TiltCard from '../components/common/TiltCard';
import { BONOS_DATA } from '../data/content';

export default function Bonos() {
  return (
    <div className="py-12 space-y-16">
      {/* Header Banner */}
      <ScrollReveal animation="fade-down" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#10B981] font-bold">
          Membresías Culturales &amp; Deportivas Solidarias
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
          Nuestros Bonos Solidarios
        </h1>
        <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Cada bono habilita acceso ilimitado a espectáculos y eventos seleccionados dentro de su categoría (con <strong className="text-[#10B981]">Bono Conciertos</strong> como modalidad principal), destinando directamente recursos al sostenimiento de salas y clubes barriales.
        </p>
      </ScrollReveal>

      {/* Cards List */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="stagger" stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {BONOS_DATA.map((bono) => (
            <TiltCard key={bono.id} className="h-full">
              <CardBono bono={bono} />
            </TiltCard>
          ))}
        </ScrollReveal>
      </div>

      {/* Comparison Grid Section */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up" className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181B]">
              ¿Por qué el pase es ilimitado?
            </h2>
            <p className="text-sm text-[#52525B]">
              Gracias a nuestro algoritmo de Butacas Vacías, optimizamos la capacidad ociosa de salas, teatros y estadios sin costos marginales adicionales.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger" stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard className="p-6 bg-white rounded-2xl border border-emerald-100 space-y-2 shadow-xs">
              <i className="fa-solid fa-infinity text-[#10B981] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Sin límite de reservas</h3>
              <p className="text-xs text-stone-600">Disfrutá de cuantos recitales, partidos, obras o películas desees dentro del mes de vigencia.</p>
            </TiltCard>
            <TiltCard className="p-6 bg-white rounded-2xl border border-emerald-100 space-y-2 shadow-xs">
              <i className="fa-solid fa-qrcode text-[#059669] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Pase Digital QR</h3>
              <p className="text-xs text-stone-600">Presentá tu credencial directamente en el teléfono sin trámites ni impresiones.</p>
            </TiltCard>
            <TiltCard className="p-6 bg-white rounded-2xl border border-emerald-100 space-y-2 shadow-xs">
              <i className="fa-solid fa-hand-holding-heart text-[#047857] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Fondo Solidario</h3>
              <p className="text-xs text-stone-600">El 40% de tu aporte fortalece la infraestructura de salas independientes, clubes de barrio y becas comunitarias.</p>
            </TiltCard>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Bottom */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="zoom-in">
          <CTA
            title="¿No sabés cuál elegir?"
            subtitle="Consultá por nuestro Combo Cuatrilogía para acceder a Conciertos, Fútbol, Teatros y Cine simultáneamente."
            buttonText="Sumate o Consultá"
            buttonLink="/sumate"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
