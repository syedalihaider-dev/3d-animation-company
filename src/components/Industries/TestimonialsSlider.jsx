"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TestimonialsSlider.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "EMILY JEFF",
    role: "Chief Visionary Officer, B2B SaaS Platform",
    content: "Our 2D animation portfolio covers explainer videos, whiteboard animations, social media content, cel animation, corporate training series, and promotional campaigns across healthcare, SaaS, finance, education, retail, and more.",
    image: "/testi-client-01.png"
  },
  {
    id: 2,
    name: "CARLOS SAMUEL",
    role: "Project Manager, Financial Services Firm",
    content: "We needed 2D animated training content for a compliance program with a completion rate problem. The whiteboard animation series 3D Animation Company built has an 89% completion rate in our LMS versus 44% for the written equivalent. That number was cited in the board report that approved a full-year animation content budget",
    image: "/testi-client-02.png"
  },
  {
    id: 3,
    name: "EMILY JEFF",
    role: "Chief Marketing Officer, Enterprise SaaS Company",
    content: "Our product takes most salespeople 15 minutes to explain. After the 3D Animation Company 2D animated explainer went live, our sales team used it as a pre-call primer, and our demo-to-close time dropped measurably in the first full quarter. 87 seconds of video changed our sales cycle.",
    image: "/testi-client-03.png"
  },
  {
    id: 4,
    name: "SARAH JENKINS",
    role: "Director of Marketing, EdTech Inc",
    content: "The educational animations provided by 3D Animation Company completely transformed how our students interact with our platform. Engagement has skyrocketed and the visual storytelling is top-notch.",
    image: "/testi-client-01.png"
  },
  {
    id: 5,
    name: "MARK ZIMMERMAN",
    role: "Founder, HealthApp",
    content: "An absolute pleasure to work with. They took our complex medical concepts and turned them into beautifully animated, easy-to-understand videos that our users love.",
    image: "/testi-client-02.png"
  }
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getOffset = (index) => {
    const length = testimonialsData.length;
    let offset = index - activeIndex;
    if (offset < -Math.floor(length / 2)) offset += length;
    if (offset > Math.floor(length / 2)) offset -= length;
    return offset;
  };

  return (
    <section className={styles.section}>
      <motion.div
        className="container-fluid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.mainTitle}>TESTIMONIALS</h2>

        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.cardsContainer}>
            {testimonialsData.map((t, idx) => {
              const offset = getOffset(idx);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={t.id}
                  className={`${styles.card} ${isActive ? styles.activeCard : styles.inactiveCard}`}
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isActive ? 1.05 : 0.95,
                    opacity: isVisible ? 1 : 0,
                    zIndex: isActive ? 10 : isVisible ? 5 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => {
                    if (!isActive && isVisible) {
                      setActiveIndex(idx);
                    }
                  }}
                >
                  <div className={styles.avatarWrapper}>
                    {/* Fallback to simple img if next/image throws error on missing src */}
                    <Image
                      src={t.image}
                      alt={t.name}
                      className={styles.avatar}
                      onError={(e) => e.target.src = '/default-avatar.png'}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                  <p className={styles.content}>{t.content}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Pagination */}
          <div className={styles.pagination}>
            {testimonialsData.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;
