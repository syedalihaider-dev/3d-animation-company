import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/OurWork/StatsSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import TestimonialsSlider from "@/components/OurWork/TestimonialsSlider";
import TrustedClientsSection from "@/components/OurWork/TrustedClientsSection";
import IndustrySection from "@/components/OurWork/IndustrySection";
import GreatVideosSection from "@/components/OurWork/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import PortfolioShowcase from "@/components/OurWork/PortfolioShowcase";
import FaqSection from "@/components/OurWork/FaqSection";


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
    title: "A Trusted Animation Company for 2D & 3D Animation Services That Fit Your Brand & Your Goals",
    description: "Don’t worry, Our team 2D & 3D animation services in the USA always begin with a genuine discovery process. We learn about your product, your audience, your brand voice, your market positioning, and precisely what you want a viewer to think, feel, or do after watching the video."
  }
];

export const metadata = {
  title: "Our Work - 3D Animation Company",
  description: "Welcome to 3D Animation Company Our Work page. We are an award-winning digital agency.",
};

export default function OurWork() {
  return (
    <main>
      <Banner
        slides={bannerSlides}
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
      />
      <StatsSection />
      <PortfolioShowcase />
      <TestimonialSection />
      <GetQuoteSection />
      <TestimonialsSlider />
      <GreatVideosSection />
      <TrustedClientsSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
