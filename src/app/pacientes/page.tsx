import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Información para pacientes",
  description:
    "Qué llevar a la consulta, preparación para ecocardiograma y cuándo acudir a urgencias.",
};

const bringList = [
  "Documento de identidad del paciente y representante",
  "Carné de vacunas (pediatría)",
  "Lista actual de medicamentos y dosis",
  "Informes de hospitalización, cirugías o cateterismos previos",
  "Ecocardiogramas, ECG u otros estudios cardíacos anteriores",
  "Referencia de pediatra o maternidad, si la tiene",
];

const echoPrep = [
  "Lactantes: puede ser útil acudir con el bebé recién alimentado y pañal seco.",
  "Evite cremas o aceites abundantes en el pecho del niño el día del estudio, si se realizará ecocardiograma.",
  "Traiga estudios previos para comparar, aunque sean de otra ciudad.",
];

export default function PacientesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Pacientes y familias"
        title="Antes de su cita"
        description="Una consulta bien preparada permite aprovechar el tiempo y tomar decisiones informadas."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Qué traer a la consulta
          </h2>
          <ul className="mt-4 space-y-2">
            {bringList.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-700">
                <span className="text-red-700">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Ecocardiograma pediátrico
          </h2>
          <ul className="mt-4 space-y-2">
            {echoPrep.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
        <h2 className="font-semibold text-amber-950">Urgencias</h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-950/90">
          Dificultad respiratoria severa, cianosis marcada, desmayo prolongado,
          dolor torácico intenso o síntomas que empeoran rápidamente requieren
          atención inmediata en emergencias pediátricas. Este sitio no ofrece
          teleconsulta de urgencia.
        </p>
      </div>

      <p className="mt-8 text-sm text-slate-600">
        ¿Listo para agendar?{" "}
        <Link href="/contacto" className="font-semibold text-red-800 hover:underline">
          Vaya a contacto
        </Link>
        .
      </p>
    </div>
  );
}
