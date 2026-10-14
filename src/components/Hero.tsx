"use client";

import Image from "next/image";
import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero-section section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy animate-in">
        <p className="eyebrow"><span className="eyebrow-mark" />{t.heroEyebrow}</p>
        <h1 id="hero-title">{t.heroTitle}</h1>
        <p className="hero-description">{t.heroBody}</p>
        <div className="hero-actions"><a className="button button-green" href={whatsappUrl(t.whatsappOrderInquiry)} target="_blank" rel="noreferrer"><WhatsAppIcon className="button-icon" />{t.orderWhatsApp}<span aria-hidden="true">↗</span></a><a className="button button-outline" href="#meals">{t.exploreMeals}<span aria-hidden="true">↓</span></a></div>
        <div className="hero-proof"><span><i className="proof-check">✓</i>{t.trustFresh}</span><span><i className="proof-check">✓</i>{t.trustHome}</span></div>
      </div>
      <div className="hero-visual animate-in animate-later">
        <div className="hero-image-frame"><Image src="/jaffna-banana-leaf-lunch.jpg" alt={t.heroPhoto} width={1024} height={1024} preload sizes="(max-width: 767px) 100vw, 53vw" className="hero-image" /><div className="hero-photo-label"><span className="photo-label-icon" aria-hidden="true">✳</span><span>{t.heroNote}</span></div></div>
        <span className="hero-spark" aria-hidden="true">✳</span><span className="hero-leaf leaf-one" aria-hidden="true"/><span className="hero-leaf leaf-two" aria-hidden="true"/>
        <span className="illustrative-note">{t.illustrative}</span>
      </div>
    </section>
  );
}
