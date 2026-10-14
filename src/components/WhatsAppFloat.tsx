"use client";

import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  const { t } = useLanguage();
  return <a className="whatsapp-float" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer" aria-label={t.openWhatsApp}><WhatsAppIcon /><span>{t.orderWhatsApp}</span></a>;
}
