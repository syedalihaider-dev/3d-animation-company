'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareDealing.module.css';

export default function HealthcareDealing() {
  return (
    <section className={styles.dealingSection}>
      <div className="container relative z-10">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.imageContainer}
            >
              <Image
                src="/case-study/healthcare/dealing-with-something-similar.png"
                alt="Dealing with something similar"
                width={778}
                height={511}
                className={styles.dealingImage}
              />
            </motion.div>
          </div>

          <div className="col-lg-6 pl-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.mainHeading}>Dealing With<br />Something Similar?</h2>
              <p className={styles.para}>For multi-video content campaigns and ongoing retainers, we structure scaled pricing that reduces the per-video cost substantially. When character libraries and style systems are built once and deployed across multiple videos, the per-asset production cost drops considerably. We provide itemized, transparent quotes.</p>
              <div className="mt-4">
                <CTAButton text="Let's Talk" href="#" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
