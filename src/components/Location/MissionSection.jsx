"use client";
import React from 'react';
import Image from 'next/image';
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
                src="/videos/home.webm"
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
                Our mission is to help our clients uncover the essence of their brand story to drive sales, influence decisions, and promote understanding.
              </h2>

              <p className={styles.description}>
                We will always search for the best way to give our clients a great experience. We will continue to learn about every industry, in order to offer innovative, high quality products with premium value.
              </p>

              <div className={styles.buttonsWrapper}>
                <CTAButton type="button" href="tel:+1-443-487-0213" text="Let's Talk" />
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
