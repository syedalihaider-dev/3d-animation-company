"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Team Structure',
    content: 'Implementing a predictable operational cadence offers clear benefits to your business. It enforces decision-making stability (removing reliance on emotional crisis management) and establishes a clear system of accountability. It also creates transparent information flows so teams are empowered to act without waiting for leadership direction.'
  },
  {
    id: 2,
    title: '2 Operating Rhythm',
    content: 'Implementing a predictable operational cadence offers clear benefits to your business. It enforces decision-making stability (removing reliance on emotional crisis management) and establishes a clear system of accountability. It also creates transparent information flows so teams are empowered to act without waiting for leadership direction.'
  },
  {
    id: 3,
    title: '3 Standards',
    content: 'We adhere to the highest industry standards for code quality, design fidelity, and operational security to ensure your product is robust and reliable.'
  },
  {
    id: 4,
    title: '4 Modes Of Engagement',
    content: 'Whether you need a dedicated team, team extension, or project-based delivery, we offer flexible engagement models tailored to your specific needs and constraints.'
  },
  {
    id: 5,
    title: '5 Proof',
    content: 'Our portfolio of successful projects and long-term client relationships serves as the best proof of our capability to deliver exceptional results.'
  },
  {
    id: 6,
    title: '6 Fit',
    content: 'We ensure a strong cultural and technical fit before starting any project, ensuring smooth communication and aligned goals throughout the development lifecycle.'
  }
];

const HowWeWorkSection = () => {
  // Start with the second item open to match the design provided
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.howWeWorkSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              className={styles.leftContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className={styles.heading}>How We Work</h2>
              <p className={styles.description}>
                We will always search for the best way to give our clients a great experience. We will continue to learn about every industry, in order to offer innovative, high quality products with premium value.
              </p>
              <div className={styles.buttonsWrapper}>
                <CTAButton type="button" text="Let's Talk" />
                <CTAButton type="link" href="tel:+1-443-487-0213" text="Call Now" variant="outline" />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <div className={styles.accordionList}>
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    className={styles.accordionItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                      <span className={styles.accordionIcon}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={styles.accordionContentWrapper}
                        >
                          <div className={styles.accordionContent}>
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
