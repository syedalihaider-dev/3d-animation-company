"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./WhyPartnerSection.module.css";
import Image from "next/image";

const cardsData = [
  {
    id: 1,
    icon: "/chess.png",
    title: "We Think Before We Animate",
    text: "The biggest source of wasted animation budget is starting production before the strategy is solid.",
    rotate: -6,
    yOffset: 0
  },
  {
    id: 2,
    icon: "/wall.png",
    title: "Deep Experience Across Industries",
    text: "General-purpose animation studios produce general-purpose videos. Our team has accumulated specific production experience in healthcare video animation services.",
    rotate: -2,
    yOffset: 20
  },
  {
    id: 3,
    icon: "/calender.png",
    title: "Timelines We Put in Writing",
    text: "Project timeline discussions at most agencies are aspirational. Ours are contractual. Your launch deadlines have real downstream consequences for campaigns, sales meetings, and product launches.",
    rotate: 3,
    yOffset: 10
  },
  {
    id: 4,
    icon: "/ruling-conversion.png",
    title: "A Collaborative Revision Process",
    text: "Revision rounds at bad agencies feel like battles. You submit notes, and the next draft comes back looking almost identical to the first version.",
    rotate: 7,
    yOffset: 30
  }
];

export default function WhyPartnerSection() {
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
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why 3D Animation Company Is the Animation Partner Brands Come Back to Year After Year
        </motion.h2>

        <motion.div
          className={styles.cardsWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cardsData.map((card, index) => (
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
                {/* Fallback to simple img tag to avoid Next Image sizing complexities here if needed, but Next Image is better */}
                <Image src={card.icon} alt={card.title} className={styles.iconImage} width={500} height={500} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
