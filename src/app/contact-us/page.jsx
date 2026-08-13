import Banner from "@/components/Common/Banner/Banner";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import { Metadata } from "next";

export const metadata = {
  title: "Contact Us - Get A 3D Animation Quote In 24 Hours",
  description: "Talk to a 3D animation specialist. Send your brief and get a cost quote within 24 hours from a professional 3D animation studio serving clients globally.",
  keywords: "",
  alternates: {
    canonical: "https://www.pixelstudiosinc.com/contact-us",
  },
}

export default function ContactUsPage() {
  return (
    <main>
      <Banner
        title="Let Us Bring Your Idea Into Three Dimensions"
        description="Ready to start? Whether you want a cost quote, a second opinion on a script, or just a straight answer about whether 3D is right for your project, there is an animation lead on the other side of this form."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <ContactFormSection />
      </div>
    </main>
  );
}
