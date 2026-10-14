"use client";

import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";

const standards = [
  {
    title: "standardSpices",
    body: "standardSpicesBody",
    icon: <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15h22l-2.2 11H7.2L5 15Z"/><path d="M7 15c.8-4.5 4.2-7.2 9-7.2s8.2 2.7 9 7.2"/><path d="m14 8 7-5 2 3-7 5"/><path d="M11 18h10"/></svg>,
  },
  {
    title: "standardVegetables",
    body: "standardVegetablesBody",
    icon: <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M26 5C15 5 7 8.8 7 17a8 8 0 0 0 8 8c8.2 0 11-9 11-20Z"/><path d="M5 27c4-7 9-11 17-16"/><path d="M13 19c-.2-2.3-.9-4.4-2.3-6.1M18 15c2 .1 3.8.7 5.2 1.8"/></svg>,
  },
  {
    title: "standardOil",
    body: "standardOilBody",
    icon: <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3s9 10 9 17a9 9 0 0 1-18 0c0-7 9-17 9-17Z"/><path d="M12 22a5 5 0 0 0 5 3"/><path d="M13 8.5c.9 1 1.7 2 2.4 3"/></svg>,
  },
  {
    title: "standardAdditives",
    body: "standardAdditivesBody",
    icon: <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3 26 7v7c0 7-4.5 12-10 15C10.5 26 6 21 6 14V7l10-4Z"/><path d="m11.5 15.5 3 3 6-6"/></svg>,
  },
] as const;

export function WeeklySchedule() {
  const { t } = useLanguage();
  return <section className="standards-section section-block" id="standards" aria-labelledby="standards-title"><div className="content-width standards-layout"><Reveal className="standards-intro"><p className="eyebrow eyebrow-light">{t.standardsEyebrow}</p><h2 id="standards-title">{t.standardsTitle}</h2><p>{t.standardsBody}</p></Reveal><div className="standards-grid">{standards.map(({ title, body, icon }, i) => <Reveal key={title} delay={i * 70}><article className="standard-item"><span className="standard-icon" aria-hidden="true">{icon}</span><div className="standard-copy"><h3>{t[title]}</h3><p>{t[body]}</p></div></article></Reveal>)}</div></div></section>;
}
