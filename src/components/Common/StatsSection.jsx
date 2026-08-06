"use client";
import React from 'react';
import styles from './StatsSection.module.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export default function StatsSection({
  heading,
  statsData = [],
  variant = "default"
}) {
  return (
    <section className={`${styles.statsSection} ${variant === 'gradient' ? styles.gradientBg : ''}`}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Heading */}
          <div className="col-md-6 col-lg-5 mb-4 mb-lg-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              <h2 className={styles.heading}>
                {heading.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== heading.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
            </motion.div>
          </div>

          {/* Right Stats Grid */}
          <div className="col-md-6 col-lg-7">
            <motion.div
              className="row g-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {statsData.map((stat, index) => (
                <div key={index} className="col-6 col-md-6 col-lg-3">
                  <motion.div variants={itemVariants} className={styles.statCard}>
                    <h3 className={styles.numberContainer}>
                      <CountUp
                        end={stat.end}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      <span className={styles.symbol}>{stat.suffix}</span>
                    </h3>
                    <p className={styles.label}>
                      {stat.label.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i !== stat.label.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
