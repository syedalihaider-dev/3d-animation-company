"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import styles from "./LocationAccordionSection.module.css";

const LocationAccordionSection = ({
  sectionTitle = "OUR ANIMATION & DEVELOPMENT SERVICES",
  items = []
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleCTAClick = (e, text, href) => {
    // If it's a popup action, dispatch global event (similar to CTAButton logic)
    const isPopupTrigger = text && (
      text.toLowerCase().includes('get started') ||
      text.toLowerCase().includes('learn more') ||
      text.toLowerCase().includes('get a quote') ||
      text.toLowerCase().includes('book a meeting') ||
      text.toLowerCase().includes('get quote') ||
      text.toLowerCase().includes('proposal')
    );

    if (isPopupTrigger) {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-global-popup'));
      }
    }
  };

  return (
    <section className={styles.locationSection}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* {sectionTitle && (
          <motion.h2 className={styles.sectionHeading} variants={itemVariants}>
            {sectionTitle}
          </motion.h2>
        )} */}

        <div className={styles.accordionContainer}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}
                variants={itemVariants}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className={styles.accordionTitle}>{item.title}</h3>
                  <motion.div
                    className={styles.iconContainer}
                    initial={false}
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isActive ? (
                      <Minus className={styles.icon} />
                    ) : (
                      <Plus className={styles.icon} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className={styles.bodyWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className={styles.accordionBody}>
                        {item.subItems && item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className={styles.subItemRow}>
                            <div className={styles.imageCol}>
                              <div className={styles.imageContainer}>
                                <Image
                                  src={subItem.image}
                                  alt={subItem.title}
                                  width={subItem.imageWidth || 600}
                                  height={subItem.imageHeight || 400}
                                  className={styles.subItemImage}
                                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                              </div>
                            </div>
                            <div className={styles.contentCol}>
                              <h4 className={styles.subItemHeading}>{subItem.title}</h4>
                              <div className={styles.subItemDescription}>
                                {subItem.description}
                              </div>
                              {subItem.buttonText && (
                                <Link
                                  href={subItem.buttonLink || "/contact-us"}
                                  className={styles.ctaButton}
                                  onClick={(e) => handleCTAClick(e, subItem.buttonText, subItem.buttonLink)}
                                >
                                  {subItem.buttonText}
                                  <svg
                                    className={styles.btnArrow}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                  </svg>
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default LocationAccordionSection;
