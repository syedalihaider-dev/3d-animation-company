"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Healthcare Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your clinical content, your audience, and your accuracy requirements, and we will build the healthcare animation that helps patients, providers, and sales teams understand exactly what your medicine or device actually does, verified at every step of production.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;