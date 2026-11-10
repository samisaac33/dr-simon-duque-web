const faqs = [
  {
    q: "¿Atiende solo niños?",
    a: "La práctica está orientada a lactantes, niños, niñas y adolescentes con sospecha o diagnóstico de enfermedad cardíaca. Para casos fuera de este rango, el doctor indicará la derivación adecuada.",
  },
  {
    q: "¿Qué debo llevar a la primera cita?",
    a: "Carné de vacunas, lista de medicamentos, informes de hospitalizaciones o cirugías previas, ecocardiogramas u otros estudios cardíacos anteriores (idealmente en PDF o impresos).",
  },
  {
    q: "¿El soplo siempre significa enfermedad?",
    a: "No. Muchos soplos en la infancia son inocentes. La consulta permite clasificar el soplo, explorar otros hallazgos y decidir si se necesitan estudios adicionales.",
  },
  {
    q: "¿Puede mi hijo hacer deporte?",
    a: "Depende del diagnóstico y del riesgo individual. Tras la evaluación, se entregan recomendaciones claras sobre actividad escolar, recreativa o competitiva.",
  },
  {
    q: "¿Cómo agendo?",
    a: "Por WhatsApp, el formulario de contacto de esta web o los canales oficiales del consultorio. Se confirmará fecha, hora y documentos a traer.",
  },
];

export function FAQ() {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="cursor-pointer list-none font-medium text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-red-700 transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
