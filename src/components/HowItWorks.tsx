"use client";

import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";

const stepIcons = ["◷", "↗", "⌂"];

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = [[t.stepOneTitle, t.stepOneBody], [t.stepTwoTitle, t.stepTwoBody], [t.stepThreeTitle, t.stepThreeBody]];
  return <section className="section-soft section-block" aria-labelledby="how-title"><div className="content-width"><Reveal className="section-heading centered"><p className="eyebrow">{t.howEyebrow}</p><h2 id="how-title">{t.howTitle}</h2><p>{t.howBody}</p></Reveal><div className="steps-grid">{steps.map(([title, body], i) => <Reveal key={title} delay={i * 90}><article className="step-card"><span className="step-number">0{i + 1}</span><span className="step-icon" aria-hidden="true">{stepIcons[i]}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div></div></section>;
}
