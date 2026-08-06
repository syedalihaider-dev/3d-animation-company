import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Home/StatsSection";
import MissionSection from "@/components/Home/MissionSection";
import ServicesSection from "@/components/Home/ServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import WhyInvestSection from "@/components/Home/WhyInvestSection";
import WhyPartnerSection from "@/components/Home/WhyPartnerSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import ProcessSliderSection from "@/components/Home/ProcessSliderSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Home/FaqSection";

const bannerSlides = [
  {
    title: "Professional Video Animation Company - High Impact Animation Services",
    description: "Why do so many brands invest in animation and see almost no return? Because most animation studios are hired to make something that looks good, and looking good is not a business outcome. Your competitors have slick videos too. The ones winning with video are the ones whose content was built around what their audience actually needed to understand to take the next step. That is the gap 3D Animation Company. was built to close. Our premium animation services include 2D explainers, 3D immersive visualizations, whiteboard animations, and motion graphics designed to convert attention into action."
  },
  {
    title: "Your Go-To Animation Studio for Animation Services",
    description: "At 3D Animation Company., we operate differently. We ask what the video is supposed to accomplish before we touch the timeline. We build around your funnel, your audience's psychology, and the specific moment in the customer journey where the video will live. Our animation services run the full creative and production spectrum. Concept development, scriptwriting, character design, storyboarding, full animation, voiceover direction, sound design, and final delivery."
  },
  {
    title: "Animation Services That Fit Your Brand & Your Goals",
    description: "Don’t worry, Our team 2D & 3D animation services in the USA always begin with a genuine discovery process. We learn about your product, your audience, your brand voice, your market positioning, and precisely what you want a viewer to think, feel, or do after watching the video."
  }
];

export const metadata = {
  title: "Award-Winning Professional Video Animation Company",
  description: "Need video animation services that convert browsers into buyers? 3D Animation Company builds custom 2D & 3D animation for brands across the USA. Get a free quote",
};

export default function Home() {
  return (
    <main>
      <Banner
        slides={bannerSlides}
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
      />
      <StatsSection />
      <MissionSection />
      <ServicesSection />
      <WhyInvestSection />
      <PortfolioShowcase />
      <WhyPartnerSection />
      <GetQuoteSection />
      <ProcessSliderSection />
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
