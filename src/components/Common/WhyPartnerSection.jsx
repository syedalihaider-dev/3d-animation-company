"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./WhyPartnerSection.module.css";
import Image from "next/image";

export default function WhyPartnerSection({
  heading,
  description,
  cardsData,
  variant = "default"
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 150,
      scale: 0.8,
      rotate: 0
    },
    visible: (custom) => ({
      opacity: 1,
      y: isMobile ? 0 : custom.yOffset,
      scale: 1,
      rotate: isMobile ? 0 : custom.rotate,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    })
  };

  return (
    <section className={`${styles.whyPartnerSection} ${variant === 'gradient' ? styles.gradientBg : ''}`}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {heading}
        </motion.h2>
        
        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}

        <motion.div
          className={styles.cardsWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cardsData.map((card) => (
            <motion.div
              key={card.id}
              className={styles.card}
              custom={card}
              variants={cardVariants}
              whileHover={isMobile ? {} : {
                scale: 1.05,
                rotate: 0,
                y: -10,
                zIndex: 10,
                boxShadow: "0px 20px 40px rgba(203, 9, 164, 0.4)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className={styles.iconWrapper}>
                <Image 
                  src={card.icon} 
                  alt={card.title} 
                  className={styles.iconImage} 
                  width={61} 
                  height={61} 
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={`${styles.cardText} scroll_block`}>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
