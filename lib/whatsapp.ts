import { SITE } from "./data/site";

export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp}?text=${encoded}`;
}

export function packageEnquiryMessage(packageName: string): string {
  return `Hi ${SITE.name}! I'm interested in the *${packageName}* package. Please share details and the best price for my travel dates.`;
}

export function generalEnquiryMessage(context?: string): string {
  const base = `Hi ${SITE.name}! I'd like to plan a trip to the Andaman Islands.`;
  return context ? `${base}\n\nI'm browsing: ${context}` : base;
}

export function destinationEnquiryMessage(destination: string): string {
  return `Hi ${SITE.name}! I'm interested in packages for *${destination}*. Please share available options and pricing.`;
}
