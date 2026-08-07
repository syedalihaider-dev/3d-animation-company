"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './MissionSection.module.css';

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={styles.imageWrapper}
            >
              <video
                src="https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/AJyq3rw7hW6eHXecdSS8PF8/2D_02.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw"
                autoPlay
                loop
                muted
                playsInline
                className={styles.missionImage}
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={styles.contentWrapper}
            >
              <h2 className={styles.heading}>
                Our mission is to help brands find the creative spark they need to glow on the screen.
              </h2>
              <p className={`${styles.description} scroll_block`}>
                Most companies do not have a visibility problem. They have a comprehension problem. The product is good, the engineering is sound, and the explanation collapses somewhere between the pitch deck and the buyer. That gap is the whole reason this 3D animation studio exists.
              </p>

              <div className={styles.buttonsWrapper}>
                <CTAButton type="chat" text="Let Us Talk" />
                <CTAButton type="link" href="tel:+1-443-487-0213" text="Call Now" variant="outline" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
