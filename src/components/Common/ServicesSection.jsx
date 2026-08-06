"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServicesSection.module.css';
import CTAButton from './CTAButton';

import { ArrowLeft, ArrowRight } from 'lucide-react';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ServicesSection = ({
  title,
  description,
  sliderItems = []
}) => {
  const [page, setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = page[0];
  const direction = page[1];

  const paginate = (newDirection) => {
    if (sliderItems.length === 0) return;
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = sliderItems.length - 1;
    if (nextIndex >= sliderItems.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  useEffect(() => {
    if (isHovered || sliderItems.length === 0) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered, sliderItems.length]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const videoVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  };

  if (sliderItems.length === 0) return null;

  return (
    <section className={styles.servicesSection}>
      <div className="container">

        <motion.div
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="subtitle">OUR SERVICES</h6>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </motion.div>

        <div className={`row ${styles.contentRow}`}>
          <div className="col-lg-6 col-md-12">
            <div
              className={styles.sliderContainer}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Pagination Commented Out */}
              {/* 
              <div className={styles.paginationWrapper}>
                {sliderItems.map((_, idx) => (
                  <div
                    key={idx}
                    className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                    onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                  />
                ))}
              </div>
              */}

              <div className={styles.slideContentWrapper}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.y, velocity.y);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className={styles.slideContent}
                  >
                    <h3 className={styles.slideTitle}>{sliderItems[activeIndex].title}</h3>
                    <p className={`${styles.slideDesc} scroll_block`}>{sliderItems[activeIndex].description}</p>

                    <div className={styles.btnWrapper}>
                      <CTAButton text="Learn More" href="#" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className={styles.videoWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={videoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  className={styles.videoInner}
                >
                  <iframe
                    src={sliderItems[activeIndex].videoSrc}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                  ></iframe>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className={styles.bottomControls}>
          <button
            className={styles.arrowBtn}
            onClick={() => paginate(-1)}
            aria-label="Previous service"
          >
            <ArrowLeft size={22} />
          </button>
          <button
            className={styles.arrowBtn}
            onClick={() => paginate(1)}
            aria-label="Next service"
          >
            <ArrowRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
