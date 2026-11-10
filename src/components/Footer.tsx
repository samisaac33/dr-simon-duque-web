import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = 2026;
  const { address } = siteConfig;
  const fullAddress = `${address.facility}, ${address.office}, ${address.city}`;

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-600">{siteConfig.title}</p>
          <p className="mt-3 text-sm text-slate-600">
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:underline"
            >
              {fullAddress}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Enlaces</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-red-800 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacidad"
                className="text-sm text-red-800 hover:underline"
              >
                Privacidad
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Importante</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Este sitio es informativo. No sustituye una consulta médica. Ante
            emergencias, acuda a un servicio de urgencias pediátricas.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {year} {siteConfig.name}. {siteConfig.region}.
      </div>
    </footer>
  );
}
