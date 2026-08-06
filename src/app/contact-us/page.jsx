import Banner from "@/components/Common/Banner/Banner";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import { Metadata } from "next";

export const metadata = {
  title: "3D Animation Company - Contact Us",
  description: "Connect with 3D Animation Company., a leading animation studio. Reach out to our team for project inquiries, collaborations, or any questions regarding our 2D and 3D animation services. Let’s bring your ideas to life together.",
  keywords: "Contact 3D Animation Company, Best Animation Studio In India, 2D Animation Studio, 3D Animation Studio, Explainer Videos, Whiteboard Animation, Motion Graphics, Character Animation",
}

export default function ContactUsPage() {
  return (
    <main>
      <Banner
        title="Contact 3D Animation Company"
        description="We’ll understand your idea, walk you through the process, and show you exactly how we can bring it to life. No long forms, no back and forth just a quick conversation to get things moving. "
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <ContactFormSection />
      </div>
    </main>
  );
}
