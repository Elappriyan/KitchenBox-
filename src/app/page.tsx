import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MenuSection } from "@/components/MenuSection";
import { WeeklySchedule } from "@/components/WeeklySchedule";
import { DeliveryArea } from "@/components/DeliveryArea";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return <main id="main-content"><Hero/><HowItWorks/><MenuSection/><WeeklySchedule/><DeliveryArea/><WhyUs/><Footer/></main>;
}
