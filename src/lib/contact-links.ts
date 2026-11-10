import { siteConfig } from "@/lib/site-config";

const defaultWhatsAppMessage =
  "Hola, deseo solicitar una cita de cardiología.";

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
