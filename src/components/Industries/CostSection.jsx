"use client";
import React from 'react';
import styles from './CostSection.module.css';
import { motion } from 'framer-motion';

const CostSection = () => {
  return (
    <section className={styles.costSection}>
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Column */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h6 className={styles.subtitle}>COLLABORATIVE APPROACH</h6>
              <h2 className={styles.title}>How Much Does 2D<br />Animation Cost?</h2>
              <p className={styles.description}>
                A professionally produced 60-second 2D animated video from a reputable 2D animation studio in the USA typically starts in the $2,500 to $4,500 range. This covers discovery, scripting, character design, storyboarding, animation, professional voiceover, sound design, and final delivery in the formats you need. More complex productions with custom character libraries and multiple unique environments fall in the $5,000 to $12,000 range.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <motion.div
              className={styles.videoWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Bottom Column */}
        <motion.div
          className={styles.bottomContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.divider}></div>
          <p className={styles.bottomText}>
            For multi-video content campaigns and ongoing retainers, we structure scaled pricing that reduces the per-video cost substantially. When character libraries and style systems are built once and deployed across multiple videos, the per-asset production cost drops considerably. We provide itemized, transparent quotes based on your actual brief within 48 hours of a discovery call.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
