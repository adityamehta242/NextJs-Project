import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import ScrollingCards from "@/components/scrollingCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <HeroSection />
        <FeatureCourses />
        <WhyChooseUs />
        <ScrollingCards />
    </main>
  );
}