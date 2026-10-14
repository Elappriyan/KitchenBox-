"use client";

import Image from "next/image";
import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

function TikTokIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-5.2 1.74 2.9 2.9 0 0 1 2.31-4.7c.3 0 .6.05.89.14V9.32a6.4 6.4 0 0 0-.89-.06 6.35 6.35 0 1 0 6.35 6.35V8.65a8.16 8.16 0 0 0 4.77 1.53V6.73a4.8 4.8 0 0 1-1.01-.04Z" /></svg>;
}

function FacebookIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.4c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24V7.9h-1.51c-1.49 0-1.96.93-1.96 1.89v2.28h3.34l-.53 3.49h-2.81V24C19.61 23.07 24 18.09 24 12.07Z" /></svg>;
}

export function Footer() {
  const { t } = useLanguage();
  return <>
    <section className="closing-cta"><div className="content-width closing-layout"><div><p className="eyebrow eyebrow-light">{t.heroEyebrow}</p><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="button button-cream" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer"><WhatsAppIcon className="button-icon" />{t.orderWhatsApp}<span aria-hidden="true">↗</span></a></div></section>
    <footer className="site-footer"><div className="content-width footer-grid"><div className="footer-brand"><a href="#home" aria-label={t.brandMarkAlt}><Image src="/logo.png" alt={t.brandMarkAlt} width={160} height={128} loading="lazy" sizes="160px" /></a><p>{t.footerNote}</p></div><div className="footer-details"><h2>KitchenBox.lk</h2><p>{t.footerCoverage}</p><p><a className="footer-phone" href="tel:+94769656552" aria-label={t.phoneLabel}>{t.phone}</a></p><a className="footer-wa" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer"><WhatsAppIcon />{t.openWhatsApp}</a><div className="footer-socials"><a className="footer-social-link" href="https://www.tiktok.com/@kitchenboxlk" target="_blank" rel="noopener noreferrer" aria-label="KitchenBox.lk on TikTok"><TikTokIcon /><span>TikTok</span></a><a className="footer-social-link" href="https://www.facebook.com/profile.php?id=61594250133738" target="_blank" rel="noopener noreferrer" aria-label="KitchenBox.lk on Facebook"><FacebookIcon /><span>Facebook</span></a></div></div></div><div className="content-width footer-bottom"><span>{t.footerCopyright.replace("{year}", String(new Date().getFullYear()))}</span><a href="#home">↑ <span>{t.navHome}</span></a></div></footer>
  </>;
}
