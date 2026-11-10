import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type Props = {
  className?: string;
  priority?: boolean;
  variant?: "hero" | "page";
};

/**
 * Coloque la foto profesional en `public/doctor.jpg` (recomendado 800×1000, ratio 4:5).
 */
export function DoctorPortrait({
  className = "",
  priority = false,
  variant = "hero",
}: Props) {
  const hasPhoto = siteConfig.doctorPhotoEnabled;
  const frame =
    variant === "hero"
      ? "border-white/20 bg-red-950/40 shadow-2xl ring-white/10"
      : "border-slate-200 bg-white shadow-md ring-slate-200/80";

  return (
    <div
      className={`relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border ring-1 ${frame} ${className}`}
    >
      {hasPhoto ? (
        <Image
          src="/doctor.jpg"
          alt={`Foto profesional de ${siteConfig.name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 384px"
          priority={priority}
        />
      ) : (
        <div
          className={`flex h-full flex-col items-center justify-center px-6 text-center ${
            variant === "hero"
              ? "bg-gradient-to-b from-red-800/80 to-slate-900/90"
              : "bg-gradient-to-b from-slate-50 to-red-50/80"
          }`}
        >
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed text-2xl font-semibold ${
              variant === "hero"
                ? "border-red-200/50 bg-red-900/50 text-red-100"
                : "border-red-300 bg-white text-red-800"
            }`}
          >
            SD
          </div>
          <p
            className={`mt-4 text-sm font-medium ${variant === "hero" ? "text-red-50" : "text-slate-800"}`}
          >
            Foto profesional
          </p>
          <p
            className={`mt-1 text-xs ${variant === "hero" ? "text-red-100/70" : "text-slate-500"}`}
          >
            Agregue <code className="rounded bg-black/10 px-1">public/doctor.jpg</code>
          </p>
        </div>
      )}
    </div>
  );
}
