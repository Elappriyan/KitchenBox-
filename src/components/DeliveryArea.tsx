"use client";

import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

const landmarks = ["landmarkHospital", "landmarkKks", "landmarkStanley", "landmarkNallur", "landmarkClock", "landmarkKasturiar"] as const;

export function DeliveryArea() {
  const { t } = useLanguage();
  return <section className="delivery-section section-block" id="delivery" aria-labelledby="delivery-title"><div className="content-width delivery-layout"><Reveal className="delivery-copy"><p className="eyebrow">{t.deliveryEyebrow}</p><h2 id="delivery-title">{t.deliveryTitle}</h2><p>{t.deliveryBody}</p><a className="button button-green" href={whatsappUrl(t.whatsappLocation)} target="_blank" rel="noreferrer"><WhatsAppIcon className="button-icon" />{t.confirmLocation}<span aria-hidden="true">↗</span></a></Reveal><Reveal className="landmarks-card"><div className="map-illustration" aria-hidden="true"><span className="map-ring ring-a"/><span className="map-ring ring-b"/><span className="map-cross cross-a">+</span><span className="map-cross cross-b">+</span><span className="map-pin"><span/></span><span className="map-road road-a"/><span className="map-road road-b"/></div><h3>{t.landmarksLabel}</h3><div className="landmark-list">{landmarks.map((key) => <span className="landmark-pill" key={key}><i aria-hidden="true">⌖</i>{t[key]}</span>)}</div></Reveal></div></section>;
}
