"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  { question: "How much does a 3D animation company charge?", answer: "Most professional 3D animation sits between $2,500 and $5,000 for a sixty second animated explainer with stock character rigs. Custom characters, photoreal product work or medical accuracy push the range to roughly $7,000 per minute. Price follows three things: modelling complexity, animation length and render load. We quote each one separately so you can see exactly what you are paying for." },
  { question: "What types of 3D animation do you produce?", answer: "Product animation, character animation, architectural visualisation, medical animation, explainer films, motion graphics, logo animation, CGI and VFX, game cinematics and training simulations. If it can be modelled, we can move it." },
  { question: "What does your 3D animation process look like?", answer: "Five stages: discovery and script, storyboard and style frames, modelling and rigging, animation and rendering, then sound and delivery. You approve each stage before the next one starts, which is why our projects rarely need a rebuild." },
  { question: "How long does a 3D animation take?", answer: "A sixty second explainer typically runs four to six weeks. Photoreal product films and character driven work run six to ten weeks. Rush schedules are possible when the script is locked early." },
  { question: "Can I hire 3D animators for an ongoing retainer?", answer: "Yes. Many clients start with one film and move to a monthly retainer once the pipeline proves itself. You get a dedicated animation lead, reserved render capacity and a predictable monthly output." },
  { question: "What do you need from me before we start?", answer: "Your brand guidelines, any CAD or product files you hold, your reference films and a clear answer to one question: what should the viewer do after watching?" },
  { question: "Do you only work with large brands?", answer: "No. We work with funded startups, mid market teams and enterprises. The brief matters more than the logo attached to it." },
];

export default function FaqSection() {
  return <GlobalFaqSection heading="Frequently Asked Questions About 3D Animation Services" faqs={faqs} />;
}
