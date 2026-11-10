/** Datos del consultorio — actualizar con información confirmada por el doctor. */
export const siteConfig = {
  name: "Dr. Simón Duque Solórzano",
  title: "Cardiología adultos y pediátrica",
  specialty: "Cardiólogo (adultos y niños)",
  city: "Guayaquil",
  region: "Guayas, Ecuador",
  description:
    "Atención cardiológica en adultos, niños y adolescentes. Evaluación de soplos, cardiopatías congénitas, ecocardiografía, intervencionismo endovascular y seguimiento a largo plazo.",
  subspecialties: [
    "Intervencionismo endovascular",
    "Diagnóstico y terapéutica en cardiopatía congénita",
  ],
  credentials: {
    msp: "MSP Libro 6 Folio 994 No. 3061",
    registration: "Reg. 1006-R-09-189/03217609",
  },
  address: {
    facility: "Omni Hospital",
    building: "Torre Médica I",
    floor: "Piso 3",
    office: "Consultorio 315",
    street: "Av. Abel Romeo Castillo y Av. Juan Tanca Marengo",
    city: "Guayaquil",
    postalCode: "090513",
    province: "Guayas",
    country: "Ecuador",
    /** Consulta para el mapa embebido (misma ubicación que mapsUrl). */
    mapsQuery:
      "Omni+Hospital,+Av.+Juan+Tanca+Marengo+y+Calle+13E+NE,+090513+Guayaquil",
    mapsUrl: "https://maps.app.goo.gl/mHp4eZGctTyJw6Be8",
  },
  contact: {
    mobileDisplay: "0997 195780",
    phoneDisplay: "0997 195780",
    whatsappNumber: "593997195780",
    landlines: [
      { display: "(04) 2109071", tel: "+59342109071" },
      { display: "(04) 2109152", tel: "+59342109152" },
    ],
    email: "simdu@hotmail.com",
  },
  hours: [
    { days: "Lunes a viernes", time: "Por confirmar" },
    { days: "Sábados", time: "Por confirmar" },
  ],
  parking:
    "Estacionamiento en Omni Hospital; confirme accesos y tarifas en recepción.",
  doctorAnytimeUrl:
    "https://www.doctoranytime.ec/d/cardiologo/simon-duque-solorzano",
  /** URL de agendamiento online (Cal.com, Google Calendar, etc.) */
  bookingUrl: "",
  /** Poner true cuando exista public/doctor.jpg */
  doctorPhotoEnabled: false,
  theme: {
    primary: "#0f766e",
    primaryDark: "#115e59",
    accent: "#2dd4bf",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/consultorio", label: "Consultorio" },
  { href: "/pacientes", label: "Pacientes" },
  { href: "/contacto", label: "Contacto" },
] as const;
