"use client";

import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What makes you different from other 3D animation companies?",
    answer: "Two things. We refuse to model before the message is agreed, and we run one accountable director per project rather than passing your brief between departments. It is a slower first week and a much faster final month.",
  },
  {
    question: "Where is your team based?",
    answer: "We operate as a distributed studio with production leadership in the United States and artists across multiple time zones, which is how work continues while you sleep and lands in your inbox by morning.",
  },
  {
    question: "Can I hire 3D animators from your team directly?",
    answer: "Yes. We offer dedicated animators on monthly engagements for teams that need consistent in house capacity without the recruitment cycle.",
  },
  {
    question: "How do you protect confidential product information?",
    answer: "An NDA is signed before a brief is discussed. Files sit in access controlled storage, and nothing enters a public reel without written approval.",
  },
  {
    question: "Do you work with agencies as a white label partner?",
    answer: "Regularly. We can stay entirely invisible, deliver under your brand and join client calls as your animation department when that helps you win the pitch.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Our 3D Animation Company"
      faqs={faqs}
    />
  );
}
