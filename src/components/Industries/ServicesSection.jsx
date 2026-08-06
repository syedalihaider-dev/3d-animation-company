"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServicesSection.module.css';
import CTAButton from '../Common/CTAButton';

const sliderItems = [
  {
    id: 1,
    title: "2D Animated Explainer Videos",
    description: "How long does it take your sales team to explain what your product does in a first call? A well-built 2D explainer video animation solves that permanently. We write scripts around the viewer's decision-making process, not your product feature list.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Commercials",
    description: "Capture attention and drive conversions with high-quality 2D animated commercials tailored for TV, social media, and web campaigns. We blend compelling storytelling with vibrant visuals.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 3,
    title: "Educational 2D Animation",
    description: "Simplify complex concepts into easy-to-understand educational videos. Perfect for e-learning platforms, training modules, and classroom materials that keep learners engaged.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 4,
    title: "2D Character Animation",
    description: "Bring unique characters to life with our expert 2D character animation services. From mascots to narrative-driven protagonists, we ensure smooth and expressive movements.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 5,
    title: "2D Motion Graphics",
    description: "Enhance your digital presence with sleek 2D motion graphics. Ideal for corporate presentations, UI/UX animations, and visually striking promotional content.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ServicesSection = () => {
  const [page, setPage] = useState([0, 0]); // [activeIndex, direction]
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = page[0];
  const direction = page[1];

  const paginate = (newDirection) => {
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = sliderItems.length - 1;
    if (nextIndex >= sliderItems.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

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

  return (
    <section className={styles.servicesSection}>
      <div className="container-fluid px-md-5">

        {/* Top Header Row */}
        <motion.div
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className={styles.subtitle}>OUR SERVICES</h6>
          <h2 className={styles.title}>
            WHAT WE ARE OFFERING IN 2D ANIMATION SERVICES?
          </h2>
          <p className={styles.description}>
            Our 2D animation company covers every production format a brand or marketing team needs. All work is produced entirely in-house by our dedicated animators, scriptwriters, character designers, and sound specialists.
          </p>
        </motion.div>

        {/* Content Row */}
        <div className={`row ${styles.contentRow}`}>
          {/* Left Side: Vertical Slider */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div
              className={styles.sliderContainer}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Vertical Pagination Dots */}
              <div className={styles.paginationWrapper}>
                {sliderItems.map((_, idx) => (
                  <div
                    key={idx}
                    className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                    onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                  />
                ))}
              </div>

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
                    <p className={styles.slideDesc}>{sliderItems[activeIndex].description}</p>

                    <div className={styles.btnWrapper}>
                      <CTAButton text="Learn More" href="#" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Video */}
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
                  {/* Dynamic Video based on active index */}
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

      </div>
    </section>
  );
};

export default ServicesSection;
