"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "2D Animated Explainer Videos",
    description: "How long does it take your sales team to explain what your product does in a first call? A well-built 2D explainer video animation solves that permanently. We write scripts around the viewer's decision-making process, not your product feature list. Our animated explainer videos hold attention from the first frame to the call to action because every visual beat was designed with that goal in mind. Clients report improved landing page conversion rates and faster sales cycles after a custom 2D animated video goes live.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Whiteboard Animations",
    description: "Whiteboard animation has outlasted every video marketing trend for one reason: clarity never goes out of style. The format removes visual noise and puts the viewer's full attention on the concept being explained. Our whiteboard animation productions combine professional voiceover, clean illustration, and carefully paced narration built for training, compliance communication, and sales enablement content that has to work without a facilitator present.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "2D Logo Animations",
    description: "A static logo on a video intro signals that the production was not quite finished. An animated logo intro signals the opposite and builds brand recall across every video your company publishes. We produce 2D logo animations in multiple output formats for video intros, website headers, presentation slides, and digital advertising, from short stings for social media to longer branded sequences for company films.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "2D Cel Animation",
    description: "Frame-by-frame character movement, expressive gesture, and a handcrafted quality that no fully digital style can replicate. Our cel animation team works across visual styles from clean commercial-grade character animation to more art-forward approaches for brands whose identity demands something genuinely distinct from the polished digital aesthetic dominating the category.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "2D Social Media Animations",
    description: "Social media is a different communication problem from every other format. The first frame must earn the second. Our social media animation team builds short-form content from the ground up for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts: vertical formats, on-screen text that works without audio, and visual hooks built to interrupt scroll behavior in the opening frame.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Promotional 2D Animated Videos",
    description: "A promotional video that produces no response is an expensive placeholder. Every promotional 2D animated video we produce has a conversion objective embedded in the creative from the first script draft. Urgency that feels earned, specific value communication, and a call to action that follows naturally from the argument the video just made.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Explainer Videos for Complex Products",
    description: "Some products are genuinely hard to explain, and the difficulty is not a marketing problem. Animation solves it better than any other format. We have built animated explainer videos for SaaS platforms, medical devices, financial instruments, and industrial equipment: making the invisible visible and the complex understandable without talking down to the viewer or skipping the technical substance that makes the product credible.",
    videoSrc: "https://player.vimeo.com/video/1064481971?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="WHAT WE ARE OFFERING IN 2D ANIMATION SERVICES?"
      description="Our 2D animation company covers every production format a brand or marketing team needs. All work is produced entirely in-house by our dedicated animators, scriptwriters, character designers, and sound specialists."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
