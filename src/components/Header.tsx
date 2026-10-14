"use client";

import Image from "next/image";
import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={t.brandMarkAlt}>
        <Image src="/logo.png" alt={t.brandMarkAlt} width={440} height={350} preload sizes="(max-width: 639px) 150px, 96px" className="brand-logo" />
        <span className="brand-copy"><span className="brand-name">KitchenBox</span><span className="brand-tagline">{t.brandTagline}</span></span>
      </a>
      <span className="delivery-badge"><span className="pin-dot" aria-hidden="true" />{t.deliveryBadge}</span>
      <nav aria-label={t.navLabel} className="main-nav">
        <a href="#home">{t.navHome}</a><a href="#meals">{t.navMeals}</a><a href="#standards">{t.navStory}</a><a href="#delivery">{t.navDelivery}</a>
      </nav>
      <div className="header-actions">
        <div className="language-toggle" aria-label={t.languageLabel}>
          <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button><span aria-hidden="true">|</span><button type="button" onClick={() => setLanguage("ta")} aria-pressed={language === "ta"}>தமிழ்</button>
        </div>
        <a className="button button-small button-green header-order" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer"><WhatsAppIcon className="button-icon" />{t.orderWhatsApp}</a>
      </div>
    </header>
  );
}
