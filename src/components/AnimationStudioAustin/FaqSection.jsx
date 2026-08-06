"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How do I choose the best 2D animation company?",
    answer: "Look at portfolio range: genuine visual variety shows they adapt to briefs rather than applying one aesthetic to every client. Then, examine the process: do they describe their discovery approach specifically before the quote? Finally, look for verifiable client results with specific outcomes, not just testimonials describing a pleasant experience.",
  },
  {
    question: "What should I avoid when hiring a 2D animation studio?",
    answer: "Avoid studios that quote a price before understanding your project. Any 2D animation agency that gives you a rate before asking detailed questions about your audience and your business objective is pricing a generic production, not your specific one. Avoid studios that cannot show you named clients with verifiable outcomes. Avoid portfolios that show only one visual style regardless of industry.",
  },
  {
    question: "Can you follow my brand guidelines and visual identity?",
    answer: "Yes, and we treat your brand guidelines as the creative starting point. Your color palette, typography, illustration references, and tone of voice are all incorporated into the style frames before any animation begins. We produce branded 2D animated videos that fit your visual ecosystem rather than looking like they came from a different team.",
  },
  {
    question: "How do I choose the right animation style for my audience?",
    answer: "The right style depends on the audience, the objective, and the distribution context. Consumer audiences on social respond to expressive character animation and high visual energy. B2B and technical audiences respond to clean motion graphics and measured pacing. Healthcare audiences need accuracy above all. We work through these variables in discovery rather than leaving the style decision to trend or default.",
  },
  {
    question: "Is 2D animation enough for tech or B2B products, or do I need 3D to look premium?",
    answer: "2D animation is more than sufficient for the vast majority of tech and B2B use cases. What signals premium quality is the clarity of thinking and the craft of execution, neither of which is format-dependent. SaaS companies and enterprise brands producing the most effective animated content predominantly use 2D formats because the format excels at clear, efficient explanation. 3D is right when the product has a physical structure requiring dimensional rendering. Otherwise, a well-produced 2D video outperforms a mediocre 3D production in every metric that matters.",
  },
  {
    question: "How much does it cost for a 60 to 90-second 2D business animation?",
    answer: "A professionally produced 60 to 90-second 2D business animation from a reputable studio in the USA falls between $2,500 and $8,000, depending on creative complexity, number of characters, voiceover requirements, and production timeline. We provide an itemized, transparent quote based on your actual brief within 48 hours of a discovery call.",
  },
  {
    question: "How long does our production cycle typically take?",
    answer: "Most 60 to 90-second 2D animated videos are completed in three to five weeks from a brief sign-off. Discovery and scripting: five to seven days. Storyboard and design: five to seven days. Animation production: seven to ten days. Sound and final review: three to five days. Every project receives a milestone schedule with specific dates at kickoff, not a range with a disclaimer.",
  },
  {
    question: "What about the copyright of my animations once I pay for them?",
    answer: "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, modify, and publish the video in any format, on any platform, for any purpose without restriction. Our standard agreements confirm this in writing at project kickoff. Licensed music and stock sound assets are documented separately, so you have a complete picture of what you own outright and what is covered by a commercial license.",
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
