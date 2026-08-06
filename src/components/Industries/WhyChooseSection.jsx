"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: 'Build strong and scalable apps',
    text: 'Build apps tough enough to stand the test of time, but also adaptable and versatile to service millions of users.',
    icon: '/industry/services-icon-01.png',
  },
  {
    title: 'Handle frequent and heavy data flows',
    text: 'Efficiently manage torrents of data, ensuring your product operates seamlessly and effectively across all platforms, delivering the best user experience.',
    icon: '/industry/services-icon-05.png',
  },
  {
    title: 'Integrate with multiple services',
    text: 'Seamlessly integrate with external services and APIs to cater users\' diverse and growing needs, enhancing your app\'s overall functionality.',
    icon: '/industry/services-icon-02.png',
  },
  {
    title: 'Extend your team seamlessly',
    text: 'Avoid the headache of staffing shortages by enlisting the expertise of a seasoned partner who really understand your field.',
    icon: '/industry/services-icon-06.png',
  },
  {
    title: 'Leverage low code',
    text: 'Make low code your advantage. Accelerate the creation of innovative solutions and reduce time-to-market.',
    icon: '/industry/services-icon-03.png',
  },
  {
    title: 'BI & Advanced analytics',
    text: 'Unlock your profitability & gain a competitive edge by tapping into data that you even didn\'t know you had.',
    icon: '/industry/services-icon-08.png',
  },
  {
    title: 'Launch your MVP swiftly',
    text: 'Test your product in the market with a minimal viable product tailored to meet customer needs, laying a solid foundation for future growth without breaking your bank.',
    icon: '/industry/services-icon-04.png',
  },
  {
    title: 'UI/UX design',
    text: 'Our designers will create a sleek, user-friendly interface that\'ll keep your customers coming back for more, boosting engagement and retention.',
    icon: '/industry/services-icon-07.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Why Choose 3D Animation Company as Your 2D<br />Animation Service Provider?</h2>
          <p className={styles.subtitle}>
            Choosing a 2D animation company is a trust decision. You are handing over your brief, your budget, and a deadline with downstream consequences.
          </p>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="col-lg-6 col-md-12" variants={itemVariants}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={108}
                    height={108}
                    className={styles.icon}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardText}>{feature.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
