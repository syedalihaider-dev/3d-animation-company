import Banner from "@/components/Common/Banner/Banner";
import MissionSection from "@/components/About/MissionSection";
import TeamStandoutSection from "@/components/About/TeamStandoutSection";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TrustedClientsSection from "@/components/About/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/About/FaqSection";


export const metadata = {
  title: "About Us - 3D Animation Company",
  description: "Welcome to 3D Animation Company About Us page. We are an award-winning digital agency.",
};

export default function AboutUs() {
  return (
    <main>
      <Banner
        title="About 3D Animation Company"
        description="3D Animation Company is a creative video animation company dedicated to bringing ideas to life through powerful visual storytelling. We specialize in crafting high-quality animations that help brands communicate complex concepts with clarity, creativity, and impact."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <MissionSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <TrustedClientsSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
