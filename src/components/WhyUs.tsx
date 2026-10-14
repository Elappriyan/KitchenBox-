"use client";

import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";

const reasons = [
  ["whyAuthenticTitle", "whyAuthenticBody", "✿"],
  ["whyCareTitle", "whyCareBody", "♡"],
  ["whyHygieneTitle", "whyHygieneBody", "✧"],
] as const;

export function WhyUs() {
  const { t } = useLanguage();
  return <section className="why-section section-block"><div className="content-width"><Reveal className="section-heading centered"><p className="eyebrow">{t.whyEyebrow}</p><h2>{t.whyTitle}</h2><p>{t.whyBody}</p></Reveal><div className="why-grid">{reasons.map(([title, body, icon], i) => <Reveal key={title} delay={i * 80}><article className="why-card"><span className="why-icon" aria-hidden="true">{icon}</span><h3>{t[title]}</h3><p>{t[body]}</p></article></Reveal>)}</div></div></section>;
}
