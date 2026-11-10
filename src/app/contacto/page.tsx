import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Agende una cita de cardiología pediátrica en Guayaquil.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Contacto"
        title="Agendar una cita"
        description="Escriba por WhatsApp o complete el formulario. Recepción confirmará disponibilidad, dirección exacta del consultorio y documentos a traer."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <CTAButtons layout="column" />
          <dl className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm">
            <div>
              <dt className="text-slate-500">Teléfono</dt>
              <dd className="font-medium text-slate-900">
                {siteConfig.contact.phoneDisplay}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Correo</dt>
              <dd className="font-medium text-slate-900">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-teal-800 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Ubicación</dt>
              <dd className="font-medium text-slate-900">
                {siteConfig.address.street}
                <br />
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-800 hover:underline"
                >
                  Ver en Google Maps
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          action={`mailto:${siteConfig.contact.email}`}
          method="post"
          encType="text/plain"
        >
          <p className="mb-6 text-sm text-slate-600">
            Formulario básico (abre su cliente de correo). En una fase posterior
            puede conectarse a correos automáticos de confirmación.
          </p>
          <label className="block text-sm font-medium text-slate-800">
            Nombre del padre, madre o tutor
            <input
              name="nombre"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-600 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-800">
            Teléfono / WhatsApp
            <input
              name="telefono"
              type="tel"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-600 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-800">
            Nombre y edad del paciente
            <input
              name="paciente"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-600 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-800">
            Motivo de consulta
            <textarea
              name="motivo"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-600 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-teal-700 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Enviar solicitud por correo
          </button>
        </form>
      </div>
    </div>
  );
}
