import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Home/StatsSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import IndustrySection from "@/components/Home/IndustrySection";
import GreatVideosSection from "@/components/OurWork/GreatVideosSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import PortfolioShowcase from "@/components/OurWork/PortfolioShowcase";

const quoteFeatures = [
  { id: 1, icon: "/icons/calender-box.png", title: "Quick Response", text: "A written reply within 24 hours." },
  { id: 2, icon: "/icons/security-box.png", title: "100% Confidential", text: "NDA signed before you share a single file." },
  { id: 3, icon: "/icons/user-box.png", title: "Expert Consultation", text: "You speak to an animation lead, never a call centre." },
];

export const metadata = {
  title: "3D Animation Portfolio - Our 3D Animation Work",
  description: "Browse the 3D animation portfolio of one of the best 3D animation companies. Product, character, architectural and medical 3D animation services on screen.",
};

export default function OurWork() {
  return (
    <main>
      <Banner
        title="Award Winning 3D Animation Studio For Global Brands"
        description="Every film below started as a sentence somebody struggled to explain. Partner with our 3D animation company that has already solved your category, and see what excellence looks like at every step of the journey."
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
        primaryCtaText="Contact Us"
        primaryCtaType="link"
        secondaryCtaText="Let Us Talk"
      />
      <StatsSection />
      <PortfolioShowcase category="3D Animation" showFilters={false} />
      <TestimonialSection />
      <GetQuoteSection features={quoteFeatures} />
      <GreatVideosSection />
      <TrustedClientsSection />
      <IndustrySection />
    </main>
  );
}
