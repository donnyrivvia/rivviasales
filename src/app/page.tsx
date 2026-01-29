import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ImageBreak from "@/components/ImageBreak";
import StatsSection from "@/components/StatsSection";
import WhoSection from "@/components/WhoSection";
import HowItWorks from "@/components/HowItWorks";
import MarketsSection from "@/components/MarketsSection";
import CultureSection from "@/components/CultureSection";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WhySection />
      <ImageBreak 
        imagePath="/groupPhoto.jpg"
        alt="Rivvia Team"
        height="70vh"
      />
      <StatsSection />
      <WhoSection />
      <HowItWorks />
      <MarketsSection />
      <CultureSection />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </main>
  );
}
