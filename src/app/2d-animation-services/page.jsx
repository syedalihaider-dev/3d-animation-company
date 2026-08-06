import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Animation2D/StatsSection";
import ServicesSection from "@/components/Animation2D/ServicesSection";
import WhyPartnerSection from "@/components/Animation2D/WhyPartnerSection";
import WhyInvestSection from "@/components/Animation2D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/Animation2D/CostSection";
import TestimonialsSlider from "@/components/Animation2D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import IndustrySection from "@/components/Animation2D/IndustrySection";
import GreatVideosSection from "@/components/Animation2D/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Animation2D/FaqSection";


export const metadata = {
  title: "Creative 2D Animation Services in the USA | 3D Animation Company.",
  description: "Looking for high-quality 2D animations services for your business? 3D Animation Company offers comprehensive 2D animation production services at a competitive price.",
};

export default function TwoDAnimation() {
  return (
    <main>
      <Banner
        title="Creative 2D Animation Services in the USA | 3D Animation Company"
        description="Looking for high-quality 2D animations services for your business? 3D Animation Company offers comprehensive 2D animation production services at a competitive price."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <WhyPartnerSection />
      <WhyInvestSection />
      <PortfolioShowcase />
      <CostSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
