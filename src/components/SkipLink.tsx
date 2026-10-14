"use client";

import { useLanguage } from "./LanguageContext";

export function SkipLink() {
  const { t } = useLanguage();
  return <a className="skip-link" href="#main-content">{t.skipToContent}</a>;
}
