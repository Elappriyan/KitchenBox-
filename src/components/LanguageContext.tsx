"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import en from "@/locales/en.json";
import ta from "@/locales/ta.json";

const storageKey = "kitchenbox-language";
type Language = "en" | "ta";
type Dictionary = typeof en;
const dictionaries: Record<Language, Dictionary> = { en, ta };
const LanguageContext = createContext<{ language: Language; t: Dictionary; setLanguage: (language: Language) => void } | null>(null);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("kitchenbox-language-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("kitchenbox-language-change", callback);
  };
}

function getSnapshot(): Language {
  return window.localStorage.getItem(storageKey) === "ta" ? "ta" : "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLanguage = (next: Language) => {
    window.localStorage.setItem(storageKey, next);
    window.dispatchEvent(new Event("kitchenbox-language-change"));
  };

  useEffect(() => {
    document.documentElement.lang = language === "ta" ? "ta" : "en";
    document.documentElement.classList.toggle("font-tamil", language === "ta");
  }, [language]);

  return <LanguageContext.Provider value={{ language, t: dictionaries[language], setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/94769656552?text=${encodeURIComponent(message)}`;
}

export type { Language };
