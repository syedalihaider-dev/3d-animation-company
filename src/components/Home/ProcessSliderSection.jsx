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
    title: "Discovery And Script",
    text: "We interrogate the offer, the audience and the objection. The script is signed off before anything moves."
  },
  {
    id: 2,
    image: "/discover-and-plan.png",
    step: "2",
    title: "Storyboard And Style Frames",
    text: "You see the film as stills, with the exact art direction, camera language and pacing you will get."
  },
  {
    id: 3,
    image: "/discover-and-plan.png",
    step: "3",
    title: "Modelling, Texturing And Rigging",
    text: "Geometry is built to real world scale and surfaced with materials that behave the way physics expects."
  },
  {
    id: 4,
    image: "/discover-and-plan.png",
    step: "4",
    title: "Animation, Lighting And Rendering",
    text: "Cameras, timing and light are set, then the sequence is rendered at full resolution on our render farm."
  },
  {
    id: 5,
    image: "/discover-and-plan.png",
    step: "5",
    title: "Sound, Compositing And Delivery",
    text: "Voice over, score and effects are mixed, the film is graded, and you receive every format your channels need."
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
          How A 3D Animation Gets Built At 3D Animation Company, From Brief To Final Frame
        </motion.h2>
        <p className={styles.description}>From brief to final frame, every stage is agreed before the next one starts.</p>

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
                    <CTAButton text="Connect With Us" variant="filled" />
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
