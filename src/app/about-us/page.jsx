import Banner from "@/components/Common/Banner/Banner";
import MissionSection from "@/components/About/MissionSection";
import TeamStandoutSection from "@/components/About/TeamStandoutSection";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TrustedClientsSection from "@/components/About/TrustedClientsSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import FaqSection from "@/components/About/FaqSection";


export const metadata = {
  title: "About Us | Inside Our Professional 3D Animation Studio",
  description: "Get to know about the Mission & Vision behind 3D Animation Company. A professional 3D animation studio of animators and directors delivering services in the USA.",
};

export default function AboutUs() {
  return (
    <main>
      <Banner
        title="Turning Ideas Nobody Can Picture Into Frames Nobody Forgets"
        description="3D Animation Company exists for the brief that gives other studios pause. From engineering accurate product films to fully rigged character work, our 3D animation services carry a message from a rough sentence to a finished frame without losing the point along the way."
        video="/videos/home.webm"
        showPlayButton={true}
        primaryCtaText="Start Your Project"
        secondaryCtaText="Let Us Talk"
      />
      <MissionSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
