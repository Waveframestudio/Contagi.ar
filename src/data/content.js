export const SITE_BRAND = {
  name: "Contagi.ar",
  tagline: "El cambio positivo se contagia. La cultura se multiplica.",
  description: "Democratizamos el acceso a las artes vivas en Argentina mediante un modelo solidario de bonos culturales con entradas ilimitadas a conciertos, teatros y cines independientes.",
  logoUrl: "/contagiar_logo.png",
  registration: "ONG Cultural Registrada N° 48921"
};

export const BONOS_DATA = [
  {
    id: "conciertos",
    slug: "conciertos",
    title: "Bono Conciertos",
    subtitle: "Vibración en vivo, música clásica, rock, indie y festivales.",
    description: "Pase solidario con acceso ilimitado a recitales y ciclos musicales aliados durante el período de vigencia sin cupos restrictivos.",
    icon: "fa-headphones-simple",
    categoryBadge: "Ciclos & En Vivo",
    accentColor: "#10B981",
    bgColor: "#D1FAE5",
    tags: ["Acceso Ilimitado", "Salas Independientes & Teatros", "Pase Transferible Familiar"],
    impactNote: "Cada bono financia 2 becas para talleres de iniciación musical comunitaria.",
    impactIcon: "fa-hand-holding-heart",
    featured: false,
    extendedDescription: "El Bono Conciertos te abre la puerta al circuito musical vibrante de tu ciudad. Desde salas íntimas de jazz e indie hasta grandes auditorios de música clásica y festivales emergentes. Diseñado para que la música en vivo sea parte de tu rutina semanal.",
    benefits: [
      "Ingreso a más de 30 salas y escenarios en convenio.",
      "Reserva prioritaria 48hs antes para fechas de alta demanda.",
      "Acceso a pruebas de sonido y encuentros exclusivos con artistas.",
      "Transferible con miembros de tu grupo familiar registrado."
    ],
    sampleEvents: [
      { name: "Festival Emergente de Invierno", venue: "Auditorio Parque Cultural", date: "Viernes 21:00 hs" },
      { name: "Ciclo de Jazz & Jam Session", venue: "Club de Música BeBop", date: "Sábados 22:30 hs" },
      { name: "Orquesta Sinfónica Juvenil", venue: "Teatro Municipal", date: "Domingos 18:00 hs" }
    ],
    faqs: [
      { q: "¿Cuántas veces puedo asistir por mes?", a: "No hay límite de eventos. Puedes asistir a todas las fechas disponibles en la plataforma." },
      { q: "¿Tengo que pagar un extra en la taquilla?", a: "No, tu credencial digital QR habilita la entrada 100% libre y gratuita en el lugar." }
    ]
  },
  {
    id: "teatros",
    slug: "teatros",
    title: "Bono Teatros",
    subtitle: "Dramaturgia contemporánea, circuito alternativo y salas emblemáticas.",
    description: "Entrada ilimitada a obras, unipersonales y performances escénicas sin cupos ocultos, con preservación de butacas de honor solidario.",
    icon: "fa-masks-theater",
    categoryBadge: "Más Demandado en Circuitos",
    accentColor: "#EC4899",
    bgColor: "#FCE7F3",
    tags: ["Acceso Ilimitado", "Butacas preferenciales solidarias", "Encuentros post-función"],
    impactNote: "Apoyo directo y fondo de contingencia a 26 salas teatrales barriales autogestionadas.",
    impactIcon: "fa-sparkles",
    featured: true,
    extendedDescription: "Nuestra modalidad insignia. El Bono Teatros conecta la pasión de los espectadores con la sostenibilidad de los teatros independientes. Descubrí dramaturgia viva, comedia, drama y teatro físico en espacios con mística única.",
    benefits: [
      "Acceso ilimitado a más de 26 salas de la Red Federal.",
      "Reservas directas con 1 clic desde tu smartphone.",
      "Descuentos en talleres dramáticos y buffet del teatro.",
      "Participación en los conversatorios con directores y elenco post-función."
    ],
    sampleEvents: [
      { name: "Los Hijos del Viento (Drama)", venue: "Teatro El Picadero", date: "Jueves a Sábados 20:30 hs" },
      { name: "Monólogos Urbanos (Comedia)", venue: "Espacio TIMBRE 4", date: "Viernes y Domingos" },
      { name: "La Tempestad (Teatro Físico)", venue: "Centro Cultural Recoleta", date: "Sábados 21:30 hs" }
    ],
    faqs: [
      { q: "¿Qué sucede si no puedo asistir a una reserva?", a: "Podés cancelar con hasta 4 horas de anticipación para liberar la butaca a otro miembro de la comunidad." },
      { q: "¿Cubre obras del circuito comercial?", a: "Incluye producciones destacadas del circuito comercial que destinan Butacas de Honor Solidario a Contagi.ar." }
    ]
  },
  {
    id: "cine",
    slug: "cine",
    title: "Bono Cine",
    subtitle: "Cine de autor, estrenos nacionales, documentales y ciclos especiales.",
    description: "Pantallas independientes, cineclubes históricos y retrospectivas con butaca libre todo el mes para fortalecer la memoria audiovisual.",
    icon: "fa-film",
    categoryBadge: "Autor & Festivales",
    accentColor: "#059669",
    bgColor: "#D1FAE5",
    tags: ["Acceso Ilimitado", "Cine debate con realizadores", "Acceso a plataforma digital"],
    impactNote: "Fomento de producciones federales y rescate de archivo cinematográfico.",
    impactIcon: "fa-video",
    featured: false,
    extendedDescription: "El séptimo arte en su dimensión colectiva. Disfrutá de salas de cine independientes, retrospectivas de autor, cineclubes de barrio y festivales de cortometrajes nacionales con tu abono mensual unificado.",
    benefits: [
      "Ingreso libre a cines independientes y salas del circuito de arte.",
      "Pase especial para festivales asociados (BAFICI, Mar del Plata, etc.).",
      "Credencial digital complementaria para el catálogo online de cine independiente.",
      "Invitación preferencial a cine debates con directores y críticas invitadas."
    ],
    sampleEvents: [
      { name: "Retrospectiva Wong Kar-wai", venue: "Cineclub Dynamo", date: "Martes y Miércoles 19:00 hs" },
      { name: "Estreno: Voces del Interior (Doc)", venue: "Gaumont Arte", date: "Todos los días 20:00 hs" },
      { name: "Noche de Cortometrajes Argentinos", venue: "Sala El Búho", date: "Viernes 22:00 hs" }
    ],
    faqs: [
      { q: "¿Incluye cines comerciales de cadena?", a: "Focalizamos en salas independientes, espacios INCAA y cineclubes con encanto y propuesta artística propia." },
      { q: "¿Cómo accedo a la plataforma digital?", a: "Al activar tu bono, recibirás las credenciales de streaming en tu correo." }
    ]
  }
];

export const TESIS_PILARS = [
  {
    num: "1",
    title: "Propagación Comunitaria",
    desc: "Una red viva e interactiva entre creadores, salas independientes y espectadores. Cada espectador activo recomienda, acompaña e involucra a tres personas más en su circuito local.",
    tag: "Efecto multiplicador 1:3.4",
    tagColor: "#10B981",
    icon: "fa-network-wired",
    iconBg: "#D1FAE5",
    iconColor: "#047857"
  },
  {
    num: "2",
    title: "Acceso Ilimitado & Justo",
    desc: "Eliminamos el cálculo transaccional del ticket individual. Con una membresía solidaria de bajo costo, la persona asiste cuantas veces quiera, revalorizando cada butaca vacía.",
    tag: "Cero Barreras Económicas",
    tagColor: "#EC4899",
    icon: "fa-infinity",
    iconBg: "#FCE7F3",
    iconColor: "#EC4899"
  },
  {
    num: "3",
    title: "Ecosistema Sostenible",
    desc: "Financiamiento ético y transparente. El fondo mutual de bonos redistribuye ingresos predecibles para la programación de salas independientes y proyectos de artistas emergentes.",
    tag: "Previsibilidad para Artistas",
    tagColor: "#059669",
    icon: "fa-scale-balanced",
    iconBg: "#D1FAE5",
    iconColor: "#047857"
  }
];

export const STEPS_DATA = [
  {
    step: "01",
    title: "Eliges tu Bono Solidario",
    desc: "Seleccionas Conciertos, Teatros o Cine, o el Combo Integral Trilogía según tu afinidad cultural mensual o anual."
  },
  {
    step: "02",
    title: "Acreditación Digital Inmediata",
    desc: "Obtienes tu credencial unificada con QR encriptado en tu teléfono móvil, compatible con Apple Wallet y Android."
  },
  {
    step: "03",
    title: "Disfrutas sin Límites",
    desc: "Reservas tu butaca en 1 clic en la cartelera digital o te presentas directamente en la taquilla de las salas aliadas."
  },
  {
    step: "04",
    title: "Retroalimentas la Red",
    desc: "Un porcentaje automático se transfiere a fondos de emergencia y formación para nuevos artistas autogestionados."
  }
];

export const IMPACT_METRICS = {
  sroi: "$3.80",
  sroiDesc: "Retorno social de la inversión evaluado por la metodología internacional de impacto comunitario.",
  occupancy: "+35%",
  occupancyDesc: "Reducción drástica del costo fijo ocioso para salas teatrales y auditorios de conciertos.",
  newAudiences: "68%",
  newAudiencesDesc: "De las personas afiliadas asistieron por primera vez al circuito teatral o de música independiente en su propio distrito.",
  testimonial: {
    quote: "“Contagi.ar demostró que el arte no debe ser un privilegio ocasional, sino un hábito colectivo constante.”",
    author: "Dra. Mariana Rossi",
    role: "Red Federal de Espacios Escénicos"
  }
};
