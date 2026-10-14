"use client";

import { useLanguage } from "./LanguageContext";

export function TopBanner() {
  const { t } = useLanguage();
  return <div className="top-banner" role="note"><span className="banner-dot" aria-hidden="true" />{t.banner}</div>;
}
