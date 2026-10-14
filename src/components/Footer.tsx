"use client";

import Image from "next/image";
import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const { t } = useLanguage();
  return <>
    <section className="closing-cta"><div className="content-width closing-layout"><div><p className="eyebrow eyebrow-light">{t.heroEyebrow}</p><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="button button-cream" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer"><WhatsAppIcon className="button-icon" />{t.orderWhatsApp}<span aria-hidden="true">↗</span></a></div></section>
    <footer className="site-footer"><div className="content-width footer-grid"><div className="footer-brand"><a href="#home" aria-label={t.brandMarkAlt}><Image src="/logo.png" alt={t.brandMarkAlt} width={160} height={128} loading="lazy" sizes="160px" /></a><p>{t.footerNote}</p></div><div className="footer-details"><h2>KitchenBox.lk</h2><p>{t.footerCoverage}</p><p><a className="footer-phone" href="tel:+94769656552" aria-label={t.phoneLabel}>{t.phone}</a></p><a className="footer-wa" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer"><WhatsAppIcon />{t.openWhatsApp}</a></div></div><div className="content-width footer-bottom"><span>{t.footerCopyright.replace("{year}", String(new Date().getFullYear()))}</span><a href="#home">↑ <span>{t.navHome}</span></a></div></footer>
  </>;
}
