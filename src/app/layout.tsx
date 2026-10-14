import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { TopBanner } from "@/components/TopBanner";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { SkipLink } from "@/components/SkipLink";

export const metadata: Metadata = {
  metadataBase: new URL("https://kitchenbox.lk"),
  title: "KitchenBox.lk | Home-cooked lunch in Jaffna",
  description: "Fresh Veedu Samayal, home-cooked in Jaffna Town. Pre-order by 9:00 AM on WhatsApp for lunch delivery between 12:00 PM and 2:00 PM.",
  openGraph: {
    title: "KitchenBox.lk | Home Food, Happy You",
    description: "Thoughtful home-cooked lunch delivery in Jaffna Town, Sri Lanka. Veedu Samayal, made fresh for your lunch.",
    url: "https://kitchenbox.lk",
    siteName: "KitchenBox.lk",
    images: [{ url: "/jaffna-banana-leaf-lunch.jpg", width: 1024, height: 1024, alt: "Illustrative Jaffna vegetarian banana-leaf meal" }],
    locale: "en_LK",
    type: "website",
  },
  icons: { icon: "/logo.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body><LanguageProvider><SkipLink/><TopBanner/><div className="header-shell"><Header/></div>{children}<WhatsAppFloat/><MobileOrderBar/></LanguageProvider></body></html>;
}
