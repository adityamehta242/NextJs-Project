import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import ScrollingCards from "@/components/scrollingCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-dot-white/[0.2]">
        <HeroSection />
        <FeatureCourses />
        <WhyChooseUs />
        <ScrollingCards />
        <UpcomingWebinar />
    </main>
  );
}