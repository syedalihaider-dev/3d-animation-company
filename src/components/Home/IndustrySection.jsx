"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  { id: 1, title: "Retail And Ecommerce", image: "/industry/e-commerce.png" },
  { id: 2, title: "Professional Services", image: "/industry/services-icon-01.png" },
  { id: 3, title: "Software And Tech", image: "/industry/software-and-tech.png" },
  { id: 4, title: "Medical And Biotech", image: "/industry/healthcare.png" },
  { id: 5, title: "Real Estate And Construction", image: "/industry/real-estate.png" },
  { id: 6, title: "Manufacturing And Industrial", image: "/industry/services-icon-02.png" },
  { id: 7, title: "Gaming And Entertainment", image: "/industry/anime-style-animation.png" },
  { id: 8, title: "Education And Training", image: "/industry/education.png" },
];

export default function IndustrySection() {
  return <GlobalIndustrySection heading="We Deliver Results For Companies In Every Industry." industries={industries} hideDetails />;
}
