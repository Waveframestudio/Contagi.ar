import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_BRAND } from '../data/content';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5EFE8] border-t border-[#E6DAD0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E6DAD0]">
          {/* Logo & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                alt={SITE_BRAND.name}
                className="h-10 w-10 object-contain"
                src={SITE_BRAND.logoUrl}
              />
              <span className="font-serif font-bold text-2xl tracking-tight text-[#18181B]">
                Contagi<span className="gradient-text-brand">.ar</span>
              </span>
            </Link>
            <p className="font-serif italic text-xl text-[#10B981] font-bold">
              El cambio positivo se contagia.
            </p>
            <p className="text-xs text-[#52525B] leading-relaxed max-w-sm">
              Organización sin fines de lucro pionera en democratizar el disfrute y consumo cultural y deportivo a través de bonos solidarios y participación colectiva.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/60 text-emerald-900 text-xs font-semibold border border-emerald-200">
                <i className="fa-solid fa-certificate text-[#10B981]"></i>
                {SITE_BRAND.registration}
              </span>
            </div>
          </div>

          {/* Transparencia */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
              Transparencia &amp; Rendición
            </span>
            <ul className="space-y-2 text-xs text-[#52525B]">
              <li><Link to="/impacto" className="hover:text-[#10B981] transition-colors">Informes de Auditoría Social</Link></li>
              <li><Link to="/impacto" className="hover:text-[#10B981] transition-colors">Destino de Fondos de Bonos</Link></li>
              <li><Link to="/impacto" className="hover:text-[#10B981] transition-colors">Estatutos y Memoria Anual</Link></li>
              <li><Link to="/como-funciona" className="hover:text-[#10B981] transition-colors">Consejo Asesor Cultural</Link></li>
              <li><Link to="/sumate" className="hover:text-[#10B981] transition-colors">Código de Ética y Buena Fe</Link></li>
            </ul>
          </div>

          {/* Plataforma */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
              Plataforma
            </span>
            <ul className="space-y-2 text-xs text-[#52525B]">
              <li><Link to="/bonos/conciertos" className="font-bold text-[#10B981] hover:underline">Bono Conciertos (Principal)</Link></li>
              <li><Link to="/bonos/futbol" className="hover:text-[#10B981] transition-colors">Bono Fútbol (Nuevo)</Link></li>
              <li><Link to="/bonos/teatros" className="hover:text-[#10B981] transition-colors">Cartelera de Teatros</Link></li>
              <li><Link to="/bonos/cine" className="hover:text-[#10B981] transition-colors">Cine Independiente</Link></li>
              <li><Link to="/como-funciona" className="hover:text-[#10B981] transition-colors">Red de Salas y Clubes Aliados</Link></li>
            </ul>
          </div>

          {/* Contacto Institucional */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
              Contacto Institucional
            </span>
            <p className="text-xs text-[#52525B] leading-relaxed">
              Sede Central de Difusión Cultural<br />
              contacto@contagi.ar<br />
              alianzas@contagi.ar
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#52525B]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white border border-[#E6DAD0] flex items-center justify-center hover:text-[#10B981] hover:border-[#10B981] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white border border-[#E6DAD0] flex items-center justify-center hover:text-[#10B981] hover:border-[#10B981] transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white border border-[#E6DAD0] flex items-center justify-center hover:text-[#10B981] hover:border-[#10B981] transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://spotify.com" target="_blank" rel="noreferrer" aria-label="Spotify" className="w-8 h-8 rounded-full bg-white border border-[#E6DAD0] flex items-center justify-center hover:text-[#10B981] hover:border-[#10B981] transition-colors">
                <i className="fa-brands fa-spotify"></i>
              </a>
            </div>
            <div className="mt-2 p-2.5 rounded-xl bg-white border border-emerald-200 flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-[#10B981] text-sm"></i>
              <span className="text-[11px] text-stone-600 font-medium leading-snug">
                Sello de Compromiso Social y Acceso Universal a la Cultura y el Deporte
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Contagiar (Contagi.ar). Todos los derechos reservados. Impulsando la cultura accesible.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-stone-900 transition-colors" href="#">Políticas de Privacidad</a>
            <a className="hover:text-stone-900 transition-colors" href="#">Términos de Adhesión</a>
            <a className="hover:text-stone-900 transition-colors" href="#">Canal de Denuncias Éticas</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
