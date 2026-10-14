"use client";

import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileOrderBar() {
  const { t } = useLanguage();

  return (
    <aside className="mobile-order-bar" aria-label={t.askTodayMenu}>
      <p className="mobile-order-deadline">{t.mobileBarDeadline}</p>
      <a
        className="mobile-order-button"
        href={whatsappUrl(t.whatsappTodayMenu)}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        <span>{t.askTodayMenu}</span>
      </a>
    </aside>
  );
}
