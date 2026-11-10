import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";
import { MapsEmbed } from "@/components/MapsEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultorio",
  description: `Ubicación, horarios y cómo llegar al consultorio del ${siteConfig.name} en Guayaquil.`,
};

export default function ConsultorioPage() {
  const { address, hours, parking } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Consultorio"
        title="Atención en Guayaquil"
        description={`Consultorio en ${address.facility}, ${address.building}, ${address.office}.`}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Dirección</h2>
            <p className="mt-2 text-slate-700">
              {address.facility}
              <br />
              {address.building}, {address.floor}
              <br />
              {address.office}
              <br />
              {address.street}
              <br />
              {address.city}, {address.postalCode}
              <br />
              {address.province}, {address.country}
            </p>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-red-800 hover:underline"
            >
              Abrir en Google Maps →
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Horarios</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              {hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 text-sm">
                  <span>{h.days}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Estacionamiento</h2>
            <p className="mt-2 text-sm text-slate-700">{parking}</p>
          </div>
          <CTAButtons />
        </div>
        <MapsEmbed heightClass="h-[min(420px,70vh)]" />
      </div>
    </div>
  );
}
