"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Bring Your <span>Ideas</span> to Life with Professional <span>2D Animation Services</span>
    </>
  );

  const text = "Whether you're launching a product, explaining a service, or strengthening your brand, our 2D animation studio creates visually compelling videos tailored to your goals. We combine strategic storytelling, creative design, and smooth animation to deliver content that captures attention and leaves a lasting impression.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
