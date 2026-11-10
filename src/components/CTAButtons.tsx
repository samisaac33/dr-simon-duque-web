import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/contact-links";

type Props = {
  layout?: "row" | "column";
  /** Fondo oscuro (hero): el botón de mapa usa texto claro. */
  tone?: "light" | "dark";
  className?: string;
};

export function CTAButtons({
  layout = "row",
  tone = "light",
  className = "",
}: Props) {
  const whatsappUrl = getWhatsAppUrl();

  const flex =
    layout === "row"
      ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      : "flex flex-col gap-3";

  const mapButtonClass =
    tone === "dark"
      ? "inline-flex items-center justify-center rounded-full border border-white/45 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      : "inline-flex items-center justify-center rounded-full border border-teal-700/40 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-700 hover:bg-teal-50/80";

  return (
    <div className={`${flex} ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
      >
        Solicitar cita
      </a>
      {siteConfig.bookingUrl ? (
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={mapButtonClass}
        >
          Agendar en línea
        </a>
      ) : (
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={mapButtonClass}
        >
          Ver ubicación en mapa
        </a>
      )}
    </div>
  );
}
