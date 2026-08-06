'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareHighlight.module.css';

export default function HealthcareHighlight() {
  return (
    <section className={styles.highlightSection}>
      <div className="container relative z-10">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.mainHeading}>Highlighting customer perks with motion graphic videos</h2>
              <p className={styles.para}>Handepay (part of Paypoint) is a merchant services company with thousands of customers nationwide. They're constantly innovating and bringing new features to their customers, but if the customer doesn't know it exists, they're not going to use it. And if they don't use the feature, they can't benefit from it.</p>
              <div className="mt-5">
                <CTAButton text="Motion Graphics" href="#" />
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-4 offset-lg-1">
            <motion.div
              className="row"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="col-6 mb-5">
                <h4 className={styles.subTitle}>CLIENT</h4>
                <p className={styles.subPara}>Handepay</p>
              </div>
              <div className="col-6 mb-5">
                <h4 className={styles.subTitle}>RELEASE</h4>
                <p className={styles.subPara}>Nov 2025</p>
              </div>
              <div className="col-6 mb-5">
                <h4 className={styles.subTitle}>INDUSTRY</h4>
                <p className={styles.subPara}>FinTech</p>
              </div>
              <div className="col-6 mb-5">
                <h4 className={styles.subTitle}>WEBSITE</h4>
                <p className={styles.subPara}>Visit website</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
