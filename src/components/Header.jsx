import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_BRAND } from '../data/content';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Qué es Contagiar', href: isHome ? '#que-es-contagiar' : '/#que-es-contagiar' },
    { label: 'Modalidades de Bonos', href: '/bonos' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Impacto Social', href: '/impacto' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#FDFBF7]/85 backdrop-blur-xl border-b border-emerald-900/10 transition-all duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo Isotipo + Tipografía Oficial Contagi.ar */}
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
          <img
            alt={SITE_BRAND.name}
            className="h-10 md:h-11 w-10 md:w-11 object-contain filter drop-shadow-sm"
            src={SITE_BRAND.logoUrl}
          />
          <span className="font-serif font-bold text-2xl tracking-tight text-[#18181B]">
            Contagi<span className="gradient-text-brand">.ar</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              {link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  to={link.href}
                  className="relative py-1 hover:text-[#10B981] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#10B981] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="relative py-1 hover:text-[#10B981] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#10B981] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            to="/bonos"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-emerald-950 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-[#10B981] transition-all shadow-xs"
          >
            Explorar Bonos
          </Link>
          <Link
            to="/sumate"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#047857] via-[#10B981] to-[#34D399] hover:opacity-95 text-white text-xs md:text-sm font-bold gradient-glow transition-all hover:-translate-y-0.5"
          >
            <span>Sumate</span>
            <i className="fa-solid fa-arrow-right text-xs ml-2"></i>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-emerald-100 text-stone-700 hover:bg-emerald-50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7]/95 backdrop-blur-2xl border-b border-emerald-100 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-stone-700">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#10B981] py-2 border-b border-stone-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <i className="fa-solid fa-chevron-right text-xs text-stone-400"></i>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#10B981] py-2 border-b border-stone-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <i className="fa-solid fa-chevron-right text-xs text-stone-400"></i>
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              to="/bonos"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-emerald-50 border border-emerald-200 font-bold text-emerald-950 text-sm shadow-xs"
            >
              Explorar Bonos Culturales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
