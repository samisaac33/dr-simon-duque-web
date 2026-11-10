/** Datos del consultorio — actualizar con información confirmada por el doctor. */
export const siteConfig = {
  name: "Dr. Simón Duque Solórzano",
  title: "Cardiología pediátrica",
  specialty: "Cardiólogo pediatra",
  city: "Guayaquil",
  region: "Guayas, Ecuador",
  description:
    "Atención especializada del corazón en lactantes, niños, niñas y adolescentes. Evaluación de soplos, cardiopatías congénitas, ecocardiografía y seguimiento a largo plazo.",
  address: {
    street: "Omni Hospital, Av. Juan Tanca Marengo y Calle 13E NE",
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
    /** Reemplazar con número real, formato internacional sin + para wa.me */
    phoneDisplay: "+593 XX XXX XXXX",
    whatsappNumber: "593XXXXXXXXX",
    email: "contacto@ejemplo.ec",
  },
  hours: [
    { days: "Lunes a viernes", time: "Por confirmar" },
    { days: "Sábados", time: "Por confirmar" },
  ],
  parking: "Consultar disponibilidad de estacionamiento en recepción.",
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
