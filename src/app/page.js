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

/*
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
*/

export const metadata = {
  title: "3D Animation Company | Professional 3D Animation Services",
  description: "3D Animation Company is a professional 3D animation studio delivering product, character, medical and architectural 3D animation services for global brands. Get a free quote.",
  alternates: {
    canonical: "https://www.3danimationcompany.com",
  },
};

export default function Home() {
  return (
    <main>
      <Banner
        /* Slider preserved for future use:
        slides={bannerSlides}
        */
        title="3D Animation Company That Is Trusted By Top Brands"
        description="We are a professional 3D animation studio built around one belief: a great frame is engineering as much as it is art. From product films and character animation to medical visualisation and architectural walkthroughs, our 3D animation services turn complicated ideas into footage your audience actually finishes watching."
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
      />
      <StatsSection />
      <MissionSection />
      <ServicesSection />
      <WhyInvestSection />
      <PortfolioShowcase
        heading="3D Animation Portfolio"
        description="Stories rendered frame by frame for founders, product leads and agencies who needed the work to hold up on a fifty inch screen."
        showFilters={false}
        category="3D Animation"
      />
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
