"use client";
import React from "react";
import GlobalTestimonialSection from "../Common/TestimonialSection";

const testimonials = [
  {
    id: 1,
    name: "Amele",
    role: "SVP, Head of Marketing",
    image: "/client-men-01.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    name: "Sarah",
    role: "Director of Operations",
    image: "/client-women-01.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    name: "Michael",
    role: "CEO & Founder",
    image: "/client-men-02.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 4,
    name: "David",
    role: "Product Manager",
    image: "/client-men-01.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

export default function TestimonialSection() {
  return (
    <GlobalTestimonialSection
      heading="Request a Free Consultation"
      subText="30 minutes. No obligation. A detailed proposal with scope, timeline, and investment within 48 hours of the call."
      testimonials={testimonials}
      variant="gradient"
    />
  );
}
