import type { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/CTAButtons";
import { SectionHeading } from "@/components/SectionHeading";
import { pediatricCardiologyServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de cardiología pediátrica: soplos, cardiopatías congénitas, ecocardiografía, arritmias, seguimiento postquirúrgico y más.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Servicios"
        title="Cardiología pediátrica integral"
        description="Listado orientativo de áreas de atención habituales en un consultorio de cardiología pediátrica. El plan de estudios y controles se define en consulta según cada paciente."
      />

      <div className="mt-12 space-y-10">
        {pediatricCardiologyServices.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {group.title}
            </h2>
            <p className="mt-2 text-slate-600">{group.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-slate-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-slate-100 p-6 sm:p-8">
        <p className="text-sm text-slate-700">
          Los servicios concretos disponibles en consultorio (por ejemplo,
          ecocardiograma en el mismo lugar) se confirman al agendar.{" "}
          <Link href="/contacto" className="font-semibold text-red-800 hover:underline">
            Contáctenos
          </Link>{" "}
          para orientación.
        </p>
        <CTAButtons className="mt-6" />
      </div>
    </div>
  );
}
