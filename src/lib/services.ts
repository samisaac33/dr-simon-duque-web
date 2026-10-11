export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
};

export const pediatricCardiologyServices: ServiceGroup[] = [
  {
    title: "Evaluación y diagnóstico",
    description:
      "Estudio clínico especializado orientado a detectar, confirmar y planificar el manejo de enfermedades cardíacas en pediatría.",
    items: [
      "Valoración de soplo cardíaco en lactantes, niños y adolescentes",
      "Diagnóstico y seguimiento de cardiopatías congénitas",
      "Ecocardiograma transtorácico pediátrico (según disponibilidad en consultorio)",
      "Evaluación de dolor torácico, palpitaciones y síncope en pediatría",
      "Estudio de arritmias en niños y coordinación con subespecialistas",
      "Hipertensión arterial en niños y adolescentes",
      "Dislipidemias y factores de riesgo cardiovascular en pediatría",
      "Seguimiento de enfermedad de Kawasaki y otras afectaciones vasculares",
      "Valoración preoperatoria cardíaca y controles postquirúrgicos",
      "Seguimiento de cardiopatía congénita operada o no operada",
      "Insuficiencia cardíaca pediátrica y cardiopatías avanzadas",
      "Seguimiento post-trasplante cardíaco (cuando aplique al paciente)",
      "Orientación sobre hallazgos cardíacos en ecografía fetal (coordinación)",
    ],
  },
  {
    title: "Prevención y vida diaria",
    description:
      "Acompañamiento a familias en decisiones sobre actividad física, medicación y controles periódicos.",
    items: [
      "Check-up cardiológico pediátrico",
      "Aptitud cardíaca para actividad física escolar o deportiva",
      "Educación a padres: signos de alarma y cuidados en casa",
      "Plan de controles según diagnóstico y edad",
    ],
  },
  {
    title: "Motivos frecuentes de consulta",
    description:
      "Si reconoce alguno de estos motivos, puede agendar una valoración. En urgencias, acuda a emergencias pediátricas.",
    items: [
      "«¿El soplo de mi bebé es normal?»",
      "Cansancio anormal al jugar o hacer deporte",
      "Cianosis (tono azulado) o dificultad respiratoria asociada",
      "Antecedente familiar de cardiopatía congénita o muerte súbita",
      "Control después de cirugía cardíaca en la infancia",
    ],
  },
];

export const homeServiceHighlights = [
  "Cardiopatías congénitas",
  "Soplo cardíaco",
  "Ecocardiografía pediátrica",
  "Seguimiento postquirúrgico",
  "Arritmias y síncope",
  "Aptitud deportiva",
];
