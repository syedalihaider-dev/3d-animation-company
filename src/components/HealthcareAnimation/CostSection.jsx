"use client";
import React from 'react';
import styles from './CostSection.module.css';
import { motion } from 'framer-motion';

const CostSection = () => {
  return (
    <section className={styles.costSection}>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">Healthcare Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Healthcare Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Anatomy and Procedure Are Hard to Explain in Words
              </h3>

              <p className={styles.description}>
                Healthcare communication asks patients to understand anatomy,
                procedures, and treatment options that most people have never
                had reason to visualize before, and a rushed verbal explanation
                during a short appointment rarely sticks. Medical devices often
                work through mechanisms that are impossible to observe directly;
                sales and training teams need consistent, accurate ways to
                explain complex products, and any content produced needs
                verification from clinical or regulatory reviewers before it can
                be used with patients. Written materials and static diagrams
                struggle to convey movement, sequence, and spatial relationships
                that are often central to understanding a procedure or
                condition, leaving patients to fill in the gaps with guesswork
                or anxiety.
              </p>
            </motion.div>
          </div>

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

        <motion.div
          className={styles.bottomContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.divider}></div>

          <h3 className={styles.innerTitle}>
            The Benefit: Understanding That Improves Outcomes
          </h3>

          <p className={styles.bottomText}>
            Healthcare animation makes anatomy, procedures, and device function
            visible in a way that improves patient comprehension and reduces
            anxiety before a procedure. 3D surgical animations can walk a
            patient through exactly what a procedure involves, medical animation
            for device companies can train sales teams and clinicians
            consistently, and a verified medical animation company builds
            accuracy checks into every stage rather than treating them as an
            afterthought. Healthcare organizations using healthcare animation
            report stronger patient understanding, more efficient clinician
            conversations, and training materials that stay consistent across
            every team member who uses them, regardless of how many times the
            material gets reused.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;