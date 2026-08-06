"use client";
import React from "react";
import GlobalTestimonialSection from "../Common/TestimonialSection";

const testimonials = [
  {
    id: 1,
    name: "Sarah",
    role: "Founder of Trendscape",
    image: "https://img.youtube.com/vi/h5GIeQy4NNs/hqdefault.jpg",
    video: "https://www.youtube.com/embed/h5GIeQy4NNs?autoplay=1"
  },
  {
    id: 2,
    name: "Frank Mooney",
    role: "CEO of Exogen Matrix",
    image: "https://img.youtube.com/vi/JArjcxkPDzI/hqdefault.jpg",
    video: "https://www.youtube.com/embed/JArjcxkPDzI?autoplay=1"
  },
  {
    id: 3,
    name: "Wilson Pope",
    role: "Producer at Stargaze Productions",
    image: "https://img.youtube.com/vi/kbctprXL7FQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/kbctprXL7FQ?autoplay=1"
  },
  {
    id: 4,
    name: "Emily",
    role: "Director of Bright Minds Academy",
    image: "https://img.youtube.com/vi/beFbdiO-rnk/hqdefault.jpg",
    video: "https://www.youtube.com/embed/beFbdiO-rnk?autoplay=1"
  },
  {
    id: 5,
    name: "Dr Bradley Hickman",
    role: "Healthcare Specialist",
    image: "https://img.youtube.com/vi/oRmQqf1_Wjo/hqdefault.jpg",
    video: "https://www.youtube.com/embed/oRmQqf1_Wjo?autoplay=1"
  }
];

export default function TestimonialSection() {
  return (
    <GlobalTestimonialSection
      heading="Let’s Hear What Our Clients Are Saying"
      subText="Our clients include some of the world’s most renowned brands, entrusting us with their animation needs to elevate their messages."
      testimonials={testimonials}
      variant="default"
    />
  );
}
