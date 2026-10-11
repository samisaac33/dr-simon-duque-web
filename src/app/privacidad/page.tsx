import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Aviso de privacidad y tratamiento de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Aviso de privacidad
      </h1>
      <p className="mt-4 text-sm text-slate-600">
        Última actualización: 28 de marzo de 2026
      </p>

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-sm leading-relaxed text-slate-700">
        <p>
          {siteConfig.name} (en adelante, «el Responsable») trata datos
          personales conforme a la normativa ecuatoriana de protección de datos
          personales (LOPDP) y principios de licitud, finalidad, proporcionalidad
          y seguridad.
        </p>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Datos que puede recopilar
          </h2>
          <p>
            A través de formularios, WhatsApp, correo electrónico o agendamiento,
            puede recopilarse: nombres, documentos de identidad, teléfono,
            correo, edad del paciente, motivo de consulta y, en su caso, datos
            de salud necesarios para coordinar la cita.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Finalidad</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>Agendar y confirmar citas</li>
            <li>Comunicación con padres, madres o tutores</li>
            <li>Cumplimiento de obligaciones legales en materia de salud</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Conservación</h2>
          <p>
            Los datos se conservan el tiempo necesario para las finalidades
            indicadas y según plazos legales aplicables al ejercicio de la
            medicina.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Derechos</h2>
          <p>
            Puede solicitar acceso, rectificación, eliminación u oposición
            escribiendo a{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-teal-800 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Seguridad</h2>
          <p>
            Se adoptan medidas razonables para proteger la información. No
            comparta datos clínicos sensibles por canales no seguros sin
            indicación del consultorio.
          </p>
        </section>
      </div>
    </div>
  );
}
