"use client";

import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";

const standards = ["standardSpices", "standardVegetables", "standardOil", "standardAdditives"] as const;
const icons = ["✳", "❋", "◉", "♡"];

export function WeeklySchedule() {
  const { t } = useLanguage();
  return <section className="standards-section section-block" id="standards" aria-labelledby="standards-title"><div className="content-width standards-layout"><Reveal className="standards-intro"><p className="eyebrow eyebrow-light">{t.standardsEyebrow}</p><h2 id="standards-title">{t.standardsTitle}</h2><p>{t.standardsBody}</p><span className="standards-doodle" aria-hidden="true">⌁</span></Reveal><div className="standards-grid">{standards.map((key, i) => <Reveal key={key} delay={i * 70}><div className="standard-item"><span className="standard-icon" aria-hidden="true">{icons[i]}</span><span>{t[key]}</span></div></Reveal>)}</div></div></section>;
}
