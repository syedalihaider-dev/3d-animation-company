"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./ProcessSliderSection.module.css";
import CTAButton from "../Common/CTAButton";

const slides = [
  {
    id: 1,
    image: "/discover-and-plan.png",
    step: "1",
    title: "Discover and Plan",
    text: "With script and storyboard approved, the full production team engages. Voiceover recording, character animation, background rendering"
  },
  {
    id: 2,
    image: "/discover-and-plan.png",
    step: "2",
    title: "Scripting & Storyboarding",
    text: "We craft a compelling narrative and visualize it frame by frame to ensure the message hits the right notes before moving to animation."
  },
  {
    id: 3,
    image: "/discover-and-plan.png",
    step: "3",
    title: "Voiceover & Animation",
    text: "Our professional voice actors bring the script to life while our animators create fluid, engaging visuals that capture attention."
  },
  {
    id: 4,
    image: "/discover-and-plan.png",
    step: "4",
    title: "Review & Final Delivery",
    text: "We collaborate with you for final revisions and deliver the polished animation in your required formats, ready for launch."
  }
];

export default function ProcessSliderSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = Math.abs(page % slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    setProgress(0);
  };

  const handleDotClick = (index) => {
    const newDirection = index > activeIndex ? 1 : -1;
    setPage([page + (index - activeIndex), newDirection]);
    setProgress(0);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            paginate(1);
            return 0;
          }
          return prev + (100 / (5000 / 50)); // 5 seconds duration
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHovered, page]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.mainHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How a Video Animation Gets Built at 3D Animation Company, From Brief to Final Frame
        </motion.h2>

        <div className={styles.sliderContainer} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.slideWrapper}
              >
                <div className={styles.leftCol}>
                  <Image
                    width={760}
                    height={533}
                    src={slides[activeIndex].image}
                    alt={slides[activeIndex].title}
                    className={styles.slideImg}
                  />
                </div>
                <div className={styles.rightCol}>
                  <div className={styles.stepCircle}>{slides[activeIndex].step}</div>
                  <h3 className={styles.slideTitle}>{slides[activeIndex].title}</h3>
                  <p className={styles.slideText}>{slides[activeIndex].text}</p>

                  <div className={styles.btnGroup}>
                    <CTAButton text="Learn More" variant="filled" />
                    <CTAButton text="Let's Talk" variant="outline" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={styles.dotContainer}
                onClick={() => handleDotClick(index)}
              >
                <div
                  className={styles.dotProgress}
                  style={{
                    width: index === activeIndex ? `${progress}%` : (index < activeIndex ? '100%' : '0%'),
                    transition: index === activeIndex ? 'none' : 'width 0.3s ease'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
