"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "Can you help with custom animations for my specific business?",
    answer: "Yes. We strictly create custom animations tailored to your business. We avoid pre-built templates entirely, ensuring every video is genuinely specific to your brand, audience, and unique goals.",
  },
  {
    question: "What makes your animation company different from the hundreds of others?",
    answer: "We act as a strategic creative partner, not just a production house. We prioritize real business results, ensuring your video actually drives growth and hits your specific goals.",
  },
  {
    question: "Do you offer complete end-to-end video animation services?",
    answer: "Yes. We handle the entire pipeline under one roof—from scriptwriting and storyboarding to animation, sound design, and final delivery—giving you a single, dedicated point of contact.",
  },
  {
    question: "Can you handle animation projects that involve high volume or multiple videos?",
    answer: "We easily scale our production capacity for high-volume campaigns. We utilize structured calendars, dedicated account management, and reusable style systems to efficiently deliver multi-video projects at scale.",
  },
  {
    question: "How long does it take to create a professional animated video?",
    answer: "A standard 60 to 90-second animated video typically takes three to five weeks from brief sign-off to delivery. Complex 3D or VFX projects will require additional time.",
  },
  {
    question: "How many revision rounds are included?",
    answer: "Our standard packages include two full revision rounds built into the production schedule. Additional rounds are available and transparently priced, ensuring clear expectations before production begins.",
  },
  {
    question: "How can animation specifically help grow my business?",
    answer: "Professional video animation services drive growth by increasing engagement with the audience and delivers a clear message to the prospects. Specially when the Video animation team takes a deep dive into understanding about the idea of the product/service and bring the stunning visuals that focused on converting your prospects.",
  },
  {
    question: "Can animated videos genuinely increase conversion rates?",
    answer: "Yes. Well-produced explainer videos significantly boost conversion rates by reducing cognitive friction, keeping visitors engaged, and answering core questions before prospects leave for a competitor.",
  },
  {
    question: "What makes animated video so effective as a marketing format?",
    answer: "Animation visualizes impossible-to-photograph concepts, combines audio and motion for faster brain processing, and gives you total, precise control over every single on-brand visual element.",
  },
  {
    question: "How does animation simplify complex products and services?",
    answer: "It clearly visualizes software workflows, internal device mechanics, or abstract concepts. Animation bridges the gap between your complex product and your audience’s immediate understanding.",
  },
  {
    question: "What is the process for starting a project with 3D Animation Company?",
    answer: "Simply book a free 30-minute discovery call to discuss your goals. Within 48 hours, we will provide a detailed, no-obligation proposal outlining the scope, timeline, and investment.",
  },
  {
    question: "Which is more effective for product demos: 2D or 3D animation?",
    answer: "2D is perfect for software interfaces and abstract services, while 3D excels at showcasing physical products from multiple angles. We will help you choose based on your specific brief.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions"
      faqs={faqs}
    />
  );
}
