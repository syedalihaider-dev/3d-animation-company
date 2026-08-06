"use client";
import React, { useState } from 'react';
import styles from './WhyInvestSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const accordionData = [
  {
    id: 1,
    icon: '/discovery.png', // Using existing icon name or place holder
    title: 'Discovery and Conceptualization',
    content: 'We establish the audience, the objective, the brand voice, the competitive context, and the distribution channels before any creative work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png', // Using existing icon name or place holder
    title: 'Storyboarding and Design',
    content: 'Our team crafts a comprehensive storyboard and custom style frames to visualize the narrative and ensure it aligns with your brand identity before animation starts.',
  },
  {
    id: 3,
    icon: '/animation.png', // Using existing icon name or place holder
    title: 'Animation Development',
    content: 'We bring the designs to life using advanced 2D animation techniques, adding motion, sound design, and effects to create a compelling final product.',
  }
];

const WhyInvestSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column - Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h6 className={styles.subtitle}>HOW WE WORK</h6>
              <h2 className={styles.mainTitle}>Our Proven 2D<br />Animation Workflow</h2>
              <p className={styles.subText}>
                Our 2D animation production follows a structured, milestone-driven process. Here is exactly what happens between the brief and the final file.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Accordion */}
          <div className="col-lg-6">
            <motion.div
              className={styles.accordionList}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() => setActiveId(item.id === activeId ? null : item.id)} // Toggle off if clicked again
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.iconCircle}>
                        {/* Assuming the icons are in public/ folder. Update paths if needed */}
                        <Image src={item.icon} alt={item.title} width={108} height={108} className={styles.accIcon} />
                      </div>
                      <h3 className={styles.accTitle}>{item.title}</h3>
                    </div>

                    <div className={styles.chevronWrapper}>
                      {activeId === item.id ? (
                        <ChevronUp size={24} className={styles.chevron} />
                      ) : (
                        <ChevronDown size={24} className={styles.chevron} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={styles.accordionBodyWrapper}
                      >
                        <div className={styles.accordionBody}>
                          <p className={styles.accContent}>{item.content}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
