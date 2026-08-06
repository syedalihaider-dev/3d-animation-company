"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  {
    id: 1,
    icon: "/chess.png",
    title: "We Think Before We Animate",
    text: "The biggest source of wasted animation budget is starting production before the strategy is solid. Our creative team invests real time in understanding your brand, your market, and your audience before the storyboard exists. That means first drafts that are already close to the mark, revision rounds that refine rather than rebuild, and final videos that do not need to be explained to their own audience",
    rotate: -6,
    yOffset: 0
  },
  {
    id: 2,
    icon: "/wall.png",
    title: "Deep Experience Across Industries",
    text: "General-purpose animation studios produce general-purpose videos. Our team has accumulated specific production experience in healthcare video animation services, SaaS product walkthroughs, legal demonstrative animation, financial services explainers, e-learning content, and more. When you work with us, you are not teaching us your industry. You are briefing a team that already understands its standards, its audience, and its communication norms.",
    rotate: -2,
    yOffset: 20
  },
  {
    id: 3,
    icon: "/calender.png",
    title: "Timelines We Put in Writing",
    text: "Project timeline discussions at most agencies are aspirational. Ours are contractual. Your launch window matters, and missed deadlines have real downstream consequences for campaigns, sales meetings, and product launches. Our production schedules are built backward from your deadline, and our project managers flag risks before they become problems, not after.",
    rotate: 3,
    yOffset: 10
  },
  {
    id: 4,
    icon: "/ruling-conversion.png",
    title: "A Collaborative Revision Process",
    text: "Revision rounds at bad agencies feel like battles. You submit notes, and the next draft comes back looking almost identical to the first version. At 3D Animation Company, every revision round is structured: we document your feedback, confirm our interpretation of each note before acting on it, and return a draft that addresses every point. Our clients have told us more than once that our revision process alone was worth the switch from their previous agency.",
    rotate: 7,
    yOffset: 30
  }
];

export default function WhyPartnerSection() {
  return (
    <GlobalWhyPartnerSection
      heading="Why 3D Animation Company Is the Animation Partner Brands Come Back to Year After Year"
      description="Don’t worry, Our team 2D & 3D animation services in the USA always begin with a genuine discovery process. We learn about your product, your audience, your brand voice, your market positioning, and precisely what you want a viewer to think, feel, or do after watching the video."
      cardsData={cardsData}
      variant="default"
    />
  );
}
