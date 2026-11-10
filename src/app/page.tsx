import Link from "next/link";
import { CTAButtons } from "@/components/CTAButtons";
import { DoctorPortrait } from "@/components/DoctorPortrait";
import { FAQ } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { homeServiceHighlights } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-slate-950 text-white">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-teal-200/90">
              {siteConfig.city}, {siteConfig.region}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {siteConfig.title}
            </h1>
            <p className="mt-2 text-xl text-teal-50/95">{siteConfig.name}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-teal-50/90">
              {siteConfig.description}
            </p>
            <CTAButtons className="mt-10" tone="dark" />
          </div>
          <DoctorPortrait className="mx-auto lg:mx-0" priority />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Enfoque clínico"
          title="Cuidado del corazón en cada etapa de la infancia"
          description="Desde la valoración de un soplo en el recién nacido hasta el seguimiento de cardiopatías congénitas en la adolescencia, con explicaciones claras para las familias."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeServiceHighlights.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/servicios"
            className="text-sm font-semibold text-teal-800 hover:underline"
          >
            Ver todos los servicios →
          </Link>
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Próximos pasos del proyecto"
              title="Su consultorio, más accesible"
              description="Este sitio es la primera fase: presencia profesional y contacto directo. Las siguientes fases pueden incluir agenda en línea sincronizada, recordatorios por correo y archivo digital de pacientes, siempre con su autorización."
            />
          </div>
          <div className="mt-8 md:mt-0">
            <CTAButtons layout="column" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Información para padres y madres"
        />
        <div className="mt-10">
          <FAQ />
        </div>
      </section>
    </>
  );
}
