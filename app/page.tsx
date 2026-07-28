import AiPoweredFeature from "@/components/AiPoweredFeature";
import FAQs from "@/components/FAQs";
import HealthyJourney from "@/components/HealthyJourney";
import Hero from "@/components/Hero";
import Nutrition from "@/components/Nutrition-Coach";
import Personalized from "@/components/Personalized";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Rating";

export default function Home() {
  return (
    <div>
      <Hero />
      <Nutrition />
      <Personalized />
      <AiPoweredFeature />
      <Pricing />
      <Testimonials />
      <FAQs />
      <HealthyJourney />
    </div>
  );
}
