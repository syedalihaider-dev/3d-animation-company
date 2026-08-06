"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./IndustrySection.module.css";
import CTAButton from "../Common/CTAButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';


const industries = [
  {
    id: 1,
    title: "Retail & E-commerce",
    image: "/industry/01.png",
    text: "Boost sales and engage shoppers with stunning product animations and explainer videos tailored for e-commerce platforms.",
    link: "#"
  },
  {
    id: 2,
    title: "Professional Services",
    image: "/industry/02.png",
    text: "Establish trust and clearly communicate complex value propositions with corporate animations designed for B2B success.",
    link: "#"
  },
  {
    id: 3,
    title: "Software & Tech",
    image: "/industry/03.png",
    text: "Simplify software demos and highlight features effectively with dynamic SaaS animation and UI/UX motion graphics.",
    link: "#"
  },
  {
    id: 4,
    title: "Medical & Biotech",
    image: "/industry/04.png",
    text: "Visualize complex biological processes and medical devices accurately with specialized 3D scientific animations.",
    link: "#"
  },
  {
    id: 5,
    title: "Education",
    image: "/industry/05.png",
    text: "Enhance learning experiences and increase student retention with engaging educational animations and e-learning courses.",
    link: "#"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Showcase properties and architectural designs with immersive 3D walkthroughs and real estate visualization.",
    link: "#"
  }
];

export default function IndustrySection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -345, behavior: "smooth" }); // 320px + 25px gap
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 345, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.topRow}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>
          We’ve delivered results for companies in every industry.
        </h2>
        <div className={styles.arrows}>
          <button className={styles.arrowBtn} onClick={scrollLeft} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className={styles.arrowBtn} onClick={scrollRight} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>

      <motion.div
        className={styles.sliderWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={styles.sliderTrack} ref={sliderRef}>
          {industries.map((industry) => (
            <div key={industry.id} className={styles.slideCard}>
              <Image src={industry.image} alt={industry.title} className={styles.cardImg} width={500} height={500} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <div className={styles.cardContent}>
                  <p className={styles.cardText}>{industry.text}</p>
                  <CTAButton
                    text="Read More"
                    variant="filled"
                    href={industry.link}
                    type="link"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
