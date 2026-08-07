"use client";
import React from "react";
import GlobalTestimonialSection from "../Common/TestimonialSection";

const testimonials = [
  { id: 1, name: "Amelie", role: "VP Marketing", image: "https://img.youtube.com/vi/h5GIeQy4NNs/hqdefault.jpg", video: "https://www.youtube.com/embed/h5GIeQy4NNs?autoplay=1" },
  { id: 2, name: "Sarah", role: "Director of Operations", image: "https://img.youtube.com/vi/JArjcxkPDzI/hqdefault.jpg", video: "https://www.youtube.com/embed/JArjcxkPDzI?autoplay=1" },
  { id: 3, name: "Michael", role: "CEO and Founder", image: "https://img.youtube.com/vi/kbctprXL7FQ/hqdefault.jpg", video: "https://www.youtube.com/embed/kbctprXL7FQ?autoplay=1" },
];

export default function TestimonialSection() {
  return (
    <GlobalTestimonialSection
      heading="Let Us Hear What Our Clients Are Saying"
      subText="A few of the teams who handed us a difficult brief and a nervous deadline."
      testimonials={testimonials}
      variant="default"
    />
  );
}
