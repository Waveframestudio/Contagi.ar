import React, { useState } from 'react';

export default function Sumate() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    allianceType: 'inversion',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#EB5E3A] font-bold">
          Convocatoria Abierta
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#18181B]">
          Sumate a la Red Contagi.ar
        </h1>
        <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto leading-relaxed">
          Buscamos alianzas institucionales, fondos filantrópicos, salas culturales y espectadores comprometidos para democratizar el acceso al arte.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Left/Top */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EADDD3] shadow-md space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#18181B]">Formulario de Adhesión / Alianzas</h2>
              <p className="text-xs sm:text-sm text-[#71717A] mt-1">Completá tus datos y te responderemos en 24 horas hábiles.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="name">
                  Nombre completo / Entidad u Organización
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB5E3A]"
                  id="name"
                  placeholder="Ej: Fundación Horizonte / Ana Gómez"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="email">
                  Correo Electrónico de Contacto
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB5E3A]"
                  id="email"
                  placeholder="contacto@organizacion.org"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="allianceType">
                  Tipo de Participación / Interés
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB5E3A]"
                  id="allianceType"
                  value={formData.allianceType}
                  onChange={handleChange}
                >
                  <option value="inversion">Inversión Social Semilla / Filantropía</option>
                  <option value="sala">Sala Cultural o Teatro Aliado</option>
                  <option value="auspicio">Auspicio Institucional / Programa RSE</option>
                  <option value="espectador">Espectador Interesado en Adquirir Bonos</option>
                  <option value="voluntario">Voluntariado / Red Cultural</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="message">
                  Mensaje o Consulta (Opcional)
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E2D6C9] text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB5E3A] h-28"
                  id="message"
                  placeholder="Escribí brevemente cómo te gustaría colaborar o recibir más información..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  className="w-full py-4 px-6 rounded-full bg-[#EB5E3A] hover:bg-[#AA300F] text-white font-bold text-sm shadow-md shadow-[#EB5E3A]/30 transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Enviar Solicitud</span>
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#FFDBD2] text-[#AA300F] text-xs font-bold text-center animate-in fade-in">
                  ¡Gracias por tu mensaje, {formData.name || 'amigo/a'}! Nos pondremos en contacto muy pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Details Right */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#F5EFE8] border border-[#E6DAD0] space-y-4">
              <h3 className="font-bold text-xl text-[#18181B]">Canales Directos</h3>
              <div className="space-y-3 text-sm text-stone-700">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-[#EB5E3A] text-lg"></i>
                  <span>contacto@contagi.ar</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-handshake text-[#C05400] text-lg"></i>
                  <span>alianzas@contagi.ar</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-location-dot text-[#6F5670] text-lg"></i>
                  <span>Sede Central de Difusión Cultural · Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#EADDD3] shadow-xs space-y-4">
              <h3 className="font-bold text-lg text-stone-900">Seguinos en Redes Social</h3>
              <p className="text-xs text-stone-600">Enterate de convocatorias, funciones especiales y nuevos teatros aliados en tiempo real.</p>
              <div className="flex items-center gap-3 text-[#52525B]">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6DAD0] hover:border-[#EB5E3A] hover:text-[#EB5E3A] text-xs font-bold transition-colors">
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6DAD0] hover:border-[#EB5E3A] hover:text-[#EB5E3A] text-xs font-bold transition-colors">
                  <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
