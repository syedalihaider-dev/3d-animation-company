import Banner from "@/components/Common/Banner/Banner";
import TrustedClientsSection from "@/components/CaseStudy/TrustedClientsSection";
import IndustrySection from "@/components/CaseStudy/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FeaturedProjects from "@/components/CaseStudy/FeaturedProjects";
import { Metadata } from "next";

export const metadata = {
  title: "3D Animation Company - Case Study",
  description: "We at 3D Animation Company. take immense pride in our comprehensive case studies that highlight our successful projects across diverse industries. Each case study is a testament to our team’s creativity, technical expertise, and dedication to delivering exceptional results for our clients.",
  keywords: "Best Animation Studio In India, 2D Animation Studio, 3D Animation Studio, Explainer Videos, Whiteboard Animation, Motion Graphics, Character Animation",
  alternates: {
    canonical: "https://www.pixelstudiosinc.com/case-study",
  },
}

export default function CaseStudyPage() {
  return (
    <main>
      <Banner
        title="Professional 2D Animation Services in the USA"
        description="Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness."
        showPlayButton={true}
      />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <FeaturedProjects />
        <TestimonialSection />
      </div>
      <TrustedClientsSection />
      <IndustrySection />
    </main>
  );
}
