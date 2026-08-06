"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./IndustrySection.module.css";
import CTAButton from "./CTAButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

export default function IndustrySection({
  heading = "The Industries We Serve and the Standards Each One Demands",
  description = "A healthcare animated explainer, a SaaS onboarding video, and a legal demonstrative animation are not the same project with different subject matter. We have built genuine expertise across the industries listed here, which means we understand those differences from the first discovery call.",
  industries = [],
  variant = "default"
}) {
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
    <section className={`${styles.industrySection} ${variant === 'gradient' ? styles.gradientBg : ''}`}>
      <div className="container">
        <motion.div
          className={styles.topRow}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="row">
            <h2 className={styles.heading}>{heading}</h2>
            {description && (
              <p className={styles.description}>
                {description}
              </p>
            )}
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrowBtn} onClick={scrollLeft} aria-label="Previous slide">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.arrowBtn} onClick={scrollRight} aria-label="Next slide">
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>

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
                  <p className={`${styles.cardText} scroll_block`}>{industry.text}</p>
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
