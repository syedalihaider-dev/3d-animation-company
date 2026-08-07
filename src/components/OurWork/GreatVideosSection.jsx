"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      We make great <span>3D animation videos</span>, just for you.
    </>
  );

  const text = "In a world of remixes and recycled templates, custom built animation is a breath of fresh air. You already know that a film is the future of marketing. What you might not know is that a professional 3D animation studio makes the production process easier than it has ever been. If you have an idea, we can build it.";

  return <GlobalGreatVideosSection title={title} text={text} ctaText="See Our Work" ctaHref="#portfolio" />;
};

export default GreatVideosSection;
