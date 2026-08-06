"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Medical Animation",
    description:
      "Anatomically accurate medical animation explaining conditions, procedures, and treatment mechanisms for patient and provider audiences, verified against clinical source material.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation",
    description:
      "Detailed 3D surgical animations and device visualization built from medical imaging, CAD, or engineering data for precision at every stage of the procedure.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description:
      "Clear explainer videos that introduce a condition, treatment, or device in language patients and non-specialist audiences can follow without a medical background.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Training Videos",
    description:
      "Clinical and sales training video content that gives providers and reps a consistent, accurate way to explain a device or procedure to every patient or prospect.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Healthcare"
      description="What does a complete healthcare animation offering need to cover, from the clinic to the sales floor? These four formats span patient-facing education through internal clinical training, all verified for medical accuracy before delivery."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;