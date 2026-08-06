"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GreatVideosSection.module.css';
import CTAButton from '../Common/CTAButton';

const GreatVideosSection = () => {
  return (
    <section className={styles.section}>
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
                We make <span>great<br />videos</span>, just for you.
              </h2>
              <p className={styles.text}>
                In a world of remixes, custom created videos are a breath of fresh air. You know that video is the future of marketing. What you might not know is that 3D Animation Company helps make the video production process easier than ever before. If you have an idea for a video, we can do it.
              </p>
            </div>
            <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
              <CTAButton text="Our Process" href="#" className={styles.button} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreatVideosSection;
