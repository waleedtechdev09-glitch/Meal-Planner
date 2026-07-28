import AiPoweredFeature from "@/components/AiPoweredFeature";
import Hero from "@/components/Hero";
import Nutrition from "@/components/Nutrition-Coach";
import Personalized from "@/components/Personalized";

export default function Home() {
  return (
    <div>
      <Hero />
      <Nutrition />
      <Personalized />
      <AiPoweredFeature />
    </div>
  );
}
