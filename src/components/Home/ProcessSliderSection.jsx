"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProcessSliderSection.module.css";
import CTAButton from "../Common/CTAButton";

const slides = [
  {
    id: 1,
    image: "/discover-and-plan.png",
    step: "1",
    title: "Discover and Plan",
    text: "We begin with a structured discovery session, not a sales call. We ask about your audience, your product, your competitors, your brand voice, your distribution channels, and exactly what you want a viewer to do after watching the video. We gather every brand asset you have, study what is already in your category, and write a creative brief that is specific enough to guide production decisions. Before a single sketch gets made, everyone on both sides of the project has signed off on what we are building and why."
  },
  {
    id: 2,
    image: "/discover-and-plan.png",
    step: "2",
    title: "Script and Design",
    text: "Our scriptwriters develop a draft built around the creative brief, the audience psychology identified in discovery, and a clear call to action embedded in the narrative structure.  Simultaneously, our visual design team begins developing the creative direction: character concepts, background style, color palette, typography, and motion treatment. You review style frames and a full storyboard before any animation begins. Approving the storyboard is the most consequential decision in the production process because changes made here cost almost nothing."
  },
  {
    id: 3,
    image: "/discover-and-plan.png",
    step: "3",
    title: "Animation and Production",
    text: "With script and storyboard approved, the full production team engages. Voiceover recording, character animation, background rendering, motion graphics, and sound design all run in parallel across specialized team members. Your project manager tracks every milestone and provides progress updates at intervals agreed at kickoff. You never have to send a 'checking in' email because the update arrives before you think to ask."
  },
  {
    id: 4,
    image: "/discover-and-plan.png",
    step: "4",
    title: "Refine, Deliver, and Review",
    text: "The first full draft arrives for your structured revision round. Our project manager documents your feedback, confirms the interpretation of each note before any changes are made, and returns a revised version that addresses every point. We do not guess at what 'make it more dynamic' means. We ask, confirm, and act. Final delivery includes the video in every format and resolution your team needs, for every platform the content will live on."
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
          return prev + (100 / (5000 / 50));
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
    <section className={styles.processSliderSection}>
      <div className="container">
        <motion.h2
          className={styles.mainHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How a Video Animation Gets Built at 3D Animation Company, From Brief to Final Frame
        </motion.h2>
        <p className={styles.description}>Every studio describes its process as smooth. Here is ours in detail so you can judge it yourself.</p>

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
                  <p className={`${styles.slideText} scroll_block`}>{slides[activeIndex].text}</p>

                  <div className={styles.btnGroup}>
                    <CTAButton text="Learn More" variant="filled" />
                    <CTAButton text="Let's Talk" variant="outline" className={styles.btn} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            {/* {slides.map((_, index) => (
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
            ))} */}
            <div className={styles.arrowContainer}>
              <button
                className={styles.arrow}
                onClick={() => paginate(-1)}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className={styles.arrow}
                onClick={() => paginate(1)}
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
