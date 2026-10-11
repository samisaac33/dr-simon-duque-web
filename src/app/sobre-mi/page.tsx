import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { DoctorPortrait } from "@/components/DoctorPortrait";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: `Conozca al ${siteConfig.name}, ${siteConfig.specialty} en ${siteConfig.city}.`,
};

export default function SobreMiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Sobre mí"
        title={siteConfig.name}
        description="Espacio para su trayectoria profesional. Sustituya este texto por su biografía verificada (formación, subespecialidad, hospitales, sociedades médicas)."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="order-2 space-y-6 text-base leading-relaxed text-slate-700 lg:order-1">
          <p>
            Médico especialista en cardiología con enfoque en la atención del
            paciente pediátrico y su familia. Su práctica combina evaluación
            clínica rigurosa, estudios cardíacos cuando están indicados y
            seguimiento a largo plazo en cardiopatías congénitas y adquiridas.
          </p>
          <p>
            Según información pública en directorios médicos, cuenta con
            consultorio en Guayaquil y experiencia en cardiología general,
            check-up cardiológico, insuficiencia cardíaca, valoración cardíaca
            y seguimiento de pacientes post-trasplante cardíaco. Confirme y
            amplíe estos datos con el doctor antes de publicar.
          </p>
          <h2 className="text-lg font-semibold text-slate-900">
            Formación y membresías
          </h2>
          <ul className="list-inside list-disc space-y-2 text-slate-700">
            <li>Título de medicina — [Universidad, año]</li>
            <li>Residencia / especialización en cardiología — [Institución]</li>
            <li>Subespecialización en cardiología pediátrica — [Si aplica]</li>
            <li>Miembro de — [Sociedad Ecuatoriana de Cardiología, etc.]</li>
          </ul>
        </div>
        <aside className="order-1 lg:order-2">
          <DoctorPortrait variant="page" className="mx-auto" />
        </aside>
        <aside className="order-3 h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 lg:col-start-1">
          <p className="text-sm font-semibold text-slate-900">Datos rápidos</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Especialidad</dt>
              <dd className="font-medium text-slate-800">
                {siteConfig.specialty}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Ciudad</dt>
              <dd className="font-medium text-slate-800">{siteConfig.city}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Idiomas</dt>
              <dd className="font-medium text-slate-800">Español</dd>
            </div>
          </dl>
          <CTAButtons layout="column" className="mt-6" />
        </aside>
      </div>
    </div>
  );
}
