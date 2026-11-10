import { siteConfig } from "@/lib/site-config";

type Props = {
  className?: string;
  /** Altura del iframe. */
  heightClass?: string;
};

export function MapsEmbed({
  className = "",
  heightClass = "h-[min(280px,50vh)] sm:h-[min(360px,55vh)]",
}: Props) {
  const mapsEmbed = `https://www.google.com/maps?q=${siteConfig.address.mapsQuery}&output=embed`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm ${className}`}
    >
      <iframe
        title="Mapa del consultorio en Google Maps"
        src={mapsEmbed}
        className={`w-full border-0 ${heightClass}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
