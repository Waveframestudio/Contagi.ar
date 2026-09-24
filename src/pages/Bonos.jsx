import React from 'react';
import Section from '../components/Section';
import CardBono from '../components/CardBono';
import CTA from '../components/CTA';
import { BONOS_DATA } from '../data/content';

export default function Bonos() {
  return (
    <div className="py-12 space-y-16">
      {/* Header Banner */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#EB5E3A] font-bold">
          Membresías Culturales Solidarias
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
          Nuestros Bonos Culturales
        </h1>
        <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Cada bono habilita acceso ilimitado a espectáculos y salas seleccionadas dentro de su categoría, además de destinar directamente recursos al sostenimiento de salas independientes.
        </p>
      </div>

      {/* Cards List */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BONOS_DATA.map((bono) => (
            <CardBono key={bono.id} bono={bono} />
          ))}
        </div>
      </div>

      {/* Comparison Grid Section */}
      <Section bg="surface" className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181B]">
              ¿Por qué el pase es ilimitado?
            </h2>
            <p className="text-sm text-[#52525B]">
              Gracias a nuestro algoritmo de Butacas Vacías, optimizamos la capacidad ociosa de salas y teatros sin costos marginales adicionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#EADDD3] space-y-2">
              <i className="fa-solid fa-infinity text-[#EB5E3A] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Sin límite de reservas</h3>
              <p className="text-xs text-stone-600">Disfrutá de cuantas obras, recitales o películas desees dentro del mes de vigencia.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#EADDD3] space-y-2">
              <i className="fa-solid fa-[#C05400] fa-qrcode text-[#C05400] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Pase Digital QR</h3>
              <p className="text-xs text-stone-600">Presentá tu credencial directamente en el teléfono sin trámites ni impresiones.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#EADDD3] space-y-2">
              <i className="fa-solid fa-hand-holding-heart text-[#6F5670] text-2xl"></i>
              <h3 className="font-bold text-stone-900">Fondo Solidario</h3>
              <p className="text-xs text-stone-600">El 40% de tu aporte fortalece la infraestructura de salas independientes y becas comunitarias.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Bottom */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <CTA
          title="¿No sabés cuál elegir?"
          subtitle="Consultá por nuestro Combo Integral Trilogía para acceder a Conciertos, Teatros y Cine simultáneamente."
          buttonText="Sumate o Consultá"
          buttonLink="/sumate"
        />
      </div>
    </div>
  );
}
