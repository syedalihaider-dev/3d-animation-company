"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  { id: 1, icon: "/chess.png", title: "We Think Before We Animate", text: "Every project opens with a message audit. We agree on the single idea the film must land, and only then does a single frame get modelled. It is why our storyboards get approved fast and our renders rarely get rebuilt.", rotate: -6, yOffset: 0 },
  { id: 2, icon: "/wall.png", title: "Depth Of Experience Across Industries", text: "Medical devices, SaaS, property, manufacturing, consumer goods and gaming. Our artists have shipped in all of them, so you spend your time reviewing work instead of explaining your category.", rotate: -2, yOffset: 20 },
  { id: 3, icon: "/calender.png", title: "Timelines We Put In Writing", text: "Scope, milestones and delivery dates are agreed before kickoff. If a date is at risk you hear it from us first, with a plan attached.", rotate: 3, yOffset: 10 },
  { id: 4, icon: "/ruling-conversion.png", title: "A Collaborative Revision Process", text: "Feedback is gathered at fixed checkpoints, timestamped and consolidated. No stray comments, no version confusion, no surprise invoices for changes you already asked for.", rotate: 7, yOffset: 30 },
];

export default function WhyPartnerSection() {
  return <GlobalWhyPartnerSection heading="Why Clients Choose Our 3D Animation Studio And Then Stay" cardsData={cardsData} variant="default" />;
}
