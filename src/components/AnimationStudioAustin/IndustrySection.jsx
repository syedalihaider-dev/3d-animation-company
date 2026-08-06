"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "From product explainers and onboarding videos to feature demonstrations and software tutorials, our 2D animations help SaaS companies simplify complex platforms and improve user adoption. We create content that shortens the learning curve, increases engagement, and supports customer acquisition and retention.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "We produce 2D animations that communicate complex medical information with clarity and accuracy. Whether it's patient education, healthcare awareness, medical device demonstrations, or clinical training, our animations help organizations educate audiences while maintaining trust and professionalism.",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Learning becomes more engaging through visual storytelling. We develop educational 2D animations for schools, universities, online learning platforms, and corporate training programs that improve knowledge retention, simplify difficult concepts, and keep learners engaged from start to finish.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & FinTech",
    image: "/industry/04.png",
    text: "Financial services often involve concepts that can overwhelm customers. Our 2D animations simplify banking products, investment strategies, insurance plans, payment solutions, and financial processes, making them easier to understand while building confidence and credibility.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: "From property showcases and development presentations to investment explainers and buyer education videos, our 2D animations help real estate agencies, developers, and proptech companies present opportunities in a clear, engaging, and visually compelling way.",
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce",
    image: "/industry/06.png",
    text: "We help eCommerce brands showcase products, explain unique features, and build customer confidence through engaging 2D animations. Whether launching a new product or improving the buying experience, our videos help increase conversions and reduce customer uncertainty.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: "Whether you're introducing an innovative product, pitching investors, training employees, or communicating organizational changes, our 2D animation services provide scalable visual content that grows alongside your business and supports every stage of your journey.",
    link: "#"
  },
  {
    id: 8,
    title: "Gaming",
    image: "/industry/06.png",
    text: "We partner with game developers, publishers, and studios to create 2D animations for game trailers, character showcases, feature explainers, promotional campaigns, and community engagement. Our animations help generate excitement before launch and keep players engaged long after release.",
    link: "#"
  },
  {
    id: 9,
    title: "Manufacturing & Industrial",
    image: "/industry/06.png",
    text: "Industrial products and manufacturing processes can be difficult to explain through traditional media. Our 2D animations simplify production workflows, equipment functionality, safety procedures, and technical concepts, making communication more effective for customers, employees, and stakeholders.",
    link: "#"
  },
  {
    id: 10,
    title: "Logistics & Supply Chain",
    image: "/industry/06.png",
    text: "We create 2D animations that simplify logistics operations, warehouse processes, shipping workflows, and supply chain solutions. Whether educating customers or training internal teams, our animations turn complex operations into easy-to-understand visual stories.",
    link: "#"
  },
  {
    id: 11,
    title: "Architecture & Construction",
    image: "/industry/06.png",
    text: "Architects, developers, and construction firms use our 2D animations to visualize concepts, explain construction processes, present development projects, and communicate design ideas to clients and investors with greater clarity and impact.",
    link: "#"
  },
  {
    id: 12,
    title: "Marketing & Advertising",
    image: "/industry/06.png",
    text: "Creative campaigns deserve equally compelling visuals. We produce 2D animated advertisements, social media content, promotional videos, and brand storytelling animations that help businesses capture attention, increase engagement, and strengthen brand recognition across digital platforms.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Ready to Get Started with Professional 2D Animation Services?"
      description="Most brands already know they need better animated content. What they do not have is a 2D animation studio that built the strategy before it started drawing. Book a discovery call, and we will show you exactly what is possible for your product, your audience, and your timeline."
      industries={industries}
      variant="gradient"
    />
  );
}
