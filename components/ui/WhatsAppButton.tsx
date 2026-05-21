import { MessageCircle } from "lucide-react";
import { packageEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  packageName?: string;
  label?: string;
  className?: string;
  size?: "sm" | "md";
};

export function WhatsAppButton({
  message,
  packageName,
  label = "Enquire on WhatsApp",
  className = "",
  size = "md",
}: WhatsAppButtonProps) {
  const url = whatsappUrl(
    message ?? (packageName ? packageEnquiryMessage(packageName) : "")
  );

  const sizeClass =
    size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1fb855] transition-all hover:scale-[1.02] ${sizeClass} ${className}`}
    >
      <MessageCircle className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {label}
    </a>
  );
}
