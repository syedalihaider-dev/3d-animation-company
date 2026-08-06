"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  {
    id: 1,
    icon: "/chess.png",
    title: "Top-Tier Collaborative Success",
    text: "Genuine collaboration with a 2D animation studio looks like a first script draft that sounds like your brand. Storyboards that reflect your brief rather than the team's default aesthetic. Revision rounds where your specific notes produce the specific changes you asked for. Our best 2D animation studio has maintained long-term retainer relationships across multiple industries because the working experience is as consistent as the creative output. We bring clients into the process at every stage that shapes the outcome: storyboard review before animation, voiceover direction before audio is locked, and structured revision rounds with every note documented before it is acted on.",
    rotate: -6,
    yOffset: 0
  },
  {
    id: 2,
    icon: "/wall.png",
    title: "Quick Deliveries",
    text: "Most standard 60 to 90-second 2D animated videos ship within three to four weeks of kickoff. Rush production is available. We achieve these timelines by compressing the dead time between production stages rather than the stages themselves. Scripting is not rushed. Storyboard approval is not skipped to save a day. What gets eliminated is the approval lag and handoff friction that most 2D animation agencies handle informally and therefore slowly. Every project has a milestone schedule with specific dates and a project manager who flags risks before they affect delivery.",
    rotate: -2,
    yOffset: 20
  },
  {
    id: 3,
    icon: "/calender.png",
    title: "Boundless Innovation",
    text: "The brands winning with 2D animated videos have content with a visual identity that their audience has not seen applied to that subject before. Our creative 2D animation agency does not maintain a single visual template applied across clients. We draw on a wide range of illustration styles, motion design approaches, and narrative structures to find what is genuinely right for each brief. When clients describe the videos we produced for them as the best content their company has ever published.",
    rotate: 3,
    yOffset: 10
  },
  // {
  //   id: 4,
  //   icon: "/ruling-conversion.png",
  //   title: "A Collaborative Revision Process",
  //   text: "Revision rounds at bad agencies feel like battles. You submit notes, and the next draft comes back looking almost identical to the first version.",
  //   rotate: 7,
  //   yOffset: 30
  // }
];

export default function WhyPartnerSection() {
  return (
    <GlobalWhyPartnerSection
      heading="Why Choose 3D Animation Company as Your 2D Animation Service Provider?"
      description="Choosing a 2D animation company is a trust decision. You are handing over your brief, your budget, and a deadline with downstream consequences. Here is what makes 3D Animation Company the right choice."
      cardsData={cardsData}
      variant="gradient"
    />
  );
}
