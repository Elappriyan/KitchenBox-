"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLanguage, whatsappUrl } from "./LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

type Category = "veg" | "rice" | "curry";
const meals: { id: string; title: keyof typeof import("@/locales/en.json"); body: keyof typeof import("@/locales/en.json"); alt: keyof typeof import("@/locales/en.json"); category: Category; image: string }[] = [
  { id: "veg", title: "menuVegTitle", body: "menuVegBody", alt: "mealPhotoVeg", category: "veg", image: "/jaffna-veg-meals.jpg" },
  { id: "biryani", title: "menuBiryaniTitle", body: "menuBiryaniBody", alt: "mealPhotoBiryani", category: "rice", image: "/homestyle-dum-biryani.jpg" },
  { id: "rice", title: "menuRiceTitle", body: "menuRiceBody", alt: "mealPhotoRice", category: "rice", image: "/variety-rice.jpg" },
  { id: "curry", title: "menuCurryTitle", body: "menuCurryBody", alt: "mealPhotoCurry", category: "curry", image: "/traditional-curries.jpg" },
];

export function MenuSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | Category>("all");
  const visibleMeals = useMemo(() => meals.filter((meal) => filter === "all" || meal.category === filter), [filter]);
  const filters: ["all" | Category, string][] = [["all", t.filterAll], ["veg", t.filterVeg], ["rice", t.filterRice], ["curry", t.filterCurries]];

  return <section className="section-block menu-section" id="meals" aria-labelledby="menu-title"><div className="content-width"><Reveal className="menu-heading-row"><div className="section-heading"><p className="eyebrow">{t.menuEyebrow}</p><h2 id="menu-title">{t.menuTitle}</h2><p>{t.menuBody}</p></div><div className="filter-list" aria-label={t.menuTitle} role="group">{filters.map(([key, label]) => <button type="button" key={key} onClick={() => setFilter(key)} aria-pressed={filter === key} className={`filter-chip ${filter === key ? "active" : ""}`}>{label}</button>)}</div></Reveal><div className="menu-grid" aria-live="polite">{visibleMeals.map((meal, i) => <Reveal key={meal.id} delay={i * 60}><article className="meal-card"><div className="meal-image-wrap"><Image className="meal-image" src={meal.image} alt={t[meal.alt]} width={627} height={627} loading="lazy" sizes="(max-width: 639px) 90vw, (max-width: 899px) 42vw, 24vw"/><span className="meal-number">0{meals.indexOf(meal) + 1}</span></div><div className="meal-copy"><h3>{t[meal.title]}</h3><p>{t[meal.body]}</p><a className="text-link" href={whatsappUrl(t.whatsappInquire.replace("{meal}", t[meal.title]))} target="_blank" rel="noreferrer">{t.askAboutMeal}<span aria-hidden="true">↗</span><WhatsAppIcon className="link-whatsapp" /></a></div></article></Reveal>)}</div><p className="illustrative-footnote">✳ {t.illustrative}</p></div></section>;
}
