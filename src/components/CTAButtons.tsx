import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Props = {
  layout?: "row" | "column";
  className?: string;
};

export function CTAButtons({ layout = "row", className = "" }: Props) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hola, deseo agendar una cita de cardiología pediátrica."
  )}`;

  const flex =
    layout === "row"
      ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      : "flex flex-col gap-3";

  return (
    <div className={`${flex} ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
      >
        WhatsApp
      </a>
      {siteConfig.bookingUrl ? (
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-teal-700 px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
        >
          Agendar en línea
        </a>
      ) : (
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full border border-teal-700 px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
        >
          Solicitar cita
        </Link>
      )}
      <a
        href={siteConfig.doctorAnytimeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        Perfil Doctoranytime
      </a>
    </div>
  );
}
