'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HealthcareDetails.module.css';

export default function HealthcareDetails() {
  const details = [
    {
      title: "Project Objective",
      description: "To promote N-Seam Saver hangers using an engaging 3D animated ad that entertains while clearly demonstrating the product's function and value."
    },
    {
      title: "Our Streamlined Approach",
      description: "We used a character driven narrative supported by stylized 3D animation, snappy timing and product focused visuals to balance entertainment with product clarity."
    },
    {
      title: "Target Audience",
      description: "Parents, teens and anyone frustrated by clothing shrinkage, especially consumers searching for simple and effective laundry or wardrobe solutions."
    }
  ];

  return (
    <section className={styles.detailsSection}>
      <div className="container">
        <div className="row">
          {details.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
              <motion.div 
                className={styles.detailCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <h3 className={styles.detailHeading}>{item.title}</h3>
                <p className={styles.detailPara}>{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
