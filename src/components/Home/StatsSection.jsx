"use client";
import React from 'react';
import GlobalStatsSection from '../Common/StatsSection';

const statsData = [
  { end: 500, suffix: '+', label: '3D Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On Time\nDelivery' },
];

const StatsSection = () => {
  return (
    <GlobalStatsSection
      heading="A Trusted 3D Animation Company For Studio Grade 3D Animation Services."
      statsData={statsData}
      variant="default"
    />
  );
};

export default StatsSection;
