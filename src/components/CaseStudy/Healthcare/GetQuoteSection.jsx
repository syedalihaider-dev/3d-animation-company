"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./GetQuoteSection.module.css";
import Image from "next/image";
import CTAButton from "@/components/Common/CTAButton";
const features = [
  {
    id: 1,
    icon: "/icons/calender-box.png",
    title: "Quick Response",
    text: "We reply within 24 hours"
  },
  {
    id: 2,
    icon: "/icons/security-box.png",
    title: "100% Confidential",
    text: "Your information is secure with us"
  },
  {
    id: 3,
    icon: "/icons/user-box.png",
    title: "Expert Consultation",
    text: "Get advice from animation experts"
  }
];

export default function GetQuoteSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div
            className={styles.box}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Middle Column */}
            <motion.div className={styles.middleCol} variants={imgVariants}>
              <Image
                src="/movie-maker.png"
                alt="Frame"
                className={styles.movieMakerImg}
                width={624}
                height={624}
              />
            </motion.div>

            {/* Left Column */}
            <motion.div className={styles.leftCol} variants={itemVariants}>
              <h2 className={styles.heading}>
                Book a meeting with a member of our team to learn more and
                <span className={styles.highlight}> get a quote</span> today!
              </h2>

              <div className={styles.featureList}>
                {features.map((feature) => (
                  <div key={feature.id} className={styles.featureItem}>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      className={styles.featureIcon}
                      width={39}
                      height={39}
                    />
                    <div className={styles.featureContent}>
                      <h4 className={styles.featureTitle}>{feature.title}</h4>
                      <p className={styles.featureText}>{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column (Form) */}
            <motion.div className={styles.rightCol} variants={itemVariants}>
              <div className={styles.formBox}>
                <h3 className={styles.formTitle}>GET QUOTE</h3>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Full Name" className={styles.input} required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="email" placeholder="Company Email Address" className={styles.input} required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="tel" placeholder="Mobile Number" className={styles.input} required />
                  </div>

                  <div className={styles.checkboxGroup}>
                    <input type="checkbox" id="terms" className={styles.checkbox} required />
                    <label htmlFor="terms" className={styles.checkboxText}>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    </label>
                  </div>

                  <CTAButton type="submit" text="Submit" className={styles.submitBtn} />
                </form>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
