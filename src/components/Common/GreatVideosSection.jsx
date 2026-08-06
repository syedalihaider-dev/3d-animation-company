"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GreatVideosSection.module.css';
import CTAButton from './CTAButton';

const GreatVideosSection = ({ title, text, ctaText = "Our Process", ctaHref = "#" }) => {
  return (
    <section className={styles.greatVideosSection}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="row align-items-end">
            <div className="col-lg-9">
              <h2 className={styles.title}>
                {title || (
                  <>
                    Bring Your <span>Ideas</span> to Life with Professional <span>2D Animation Services</span>
                  </>
                )}
              </h2>
              <p className={styles.text}>
                {text || "Whether you're launching a product, explaining a service, or strengthening your brand, our 2D animation studio creates visually compelling videos tailored to your goals. We combine strategic storytelling, creative design, and smooth animation to deliver content that captures attention and leaves a lasting impression."}
              </p>
            </div>
            <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
              <CTAButton text={ctaText} href={ctaHref} className={styles.button} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreatVideosSection;
