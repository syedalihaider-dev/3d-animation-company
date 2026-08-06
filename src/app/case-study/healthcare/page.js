import React from 'react';
import HealthcareBanner from '@/components/CaseStudy/Healthcare/HealthcareBanner';
import HealthcareDetails from '@/components/CaseStudy/Healthcare/HealthcareDetails';
import HealthcareHighlight from '@/components/CaseStudy/Healthcare/HealthcareHighlight';
import HealthcareDealing from '@/components/CaseStudy/Healthcare/HealthcareDealing';
import HealthcareProductExplainer from '@/components/CaseStudy/Healthcare/HealthcareProductExplainer';
import HealthcareCluttered from '@/components/CaseStudy/Healthcare/HealthcareCluttered';
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import FaqSection from '@/components/CaseStudy/Healthcare/FaqSection';

export const metadata = {
  title: 'Healthcare Case Study - 3D Animation Company',
  description: 'Case study for Prolific Studio | N-Seam Saver',
};

export default function HealthcarePage() {
  return ( <
    main style = {
      {
        backgroundColor: '#19042D',
        minHeight: '100vh',
        overflow: 'hidden'
      }
    } >
    <
    HealthcareBanner / >
    <
    HealthcareDetails / >
    <
    HealthcareHighlight / >
    <
    HealthcareDealing / >
    <
    HealthcareProductExplainer / >
    <
    HealthcareCluttered / >
    <
    GetQuoteSection / >
    <
    FaqSection / >
    <
    /main>
  );
}