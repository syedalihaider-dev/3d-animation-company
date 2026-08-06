'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareCluttered.module.css';

export default function HealthcareCluttered() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className={styles.clutteredSection}>
        <div className="container relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div
                className={styles.videoThumbnailWrapper}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onClick={() => setIsVideoOpen(true)}
              >
                <div className={styles.thumbnailContainer}>
                  <Image 
                    src="/case-study/healthcare/cluttered-website-weak-brand-identity.png"
                    alt="Cluttered Website Video Thumbnail"
                    width={778}
                    height={511}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playButtonOverlay}>
                    <div className={styles.playCircle}>
                      <Play className={styles.playIcon} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="col-lg-6 pl-lg-5">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className={styles.mainHeading}>Cluttered Website, Weak Brand Identity</h2>
                <p className={styles.para}>
                  It lacked the functionality needed to sell class memberships online, making it difficult for customers to join. A clean, modern design and simplified customer journey were essential to better represent.
                </p>
                <ul className={styles.list}>
                  <li><strong>Redesign the website</strong> to reflect the brand's welcoming and inclusive</li>
                  <li><strong>Implement a mobile-first approach</strong> to improve usability across devices</li>
                  <li><strong>Integrate an online membership</strong> system for class subscriptions</li>
                </ul>
                <div className={`d-flex gap-3 ${styles.buttonsWrapper}`}>
                  <CTAButton text="Let's Talk" href="#" />
                  <CTAButton text="Call Now" href="#" variant="outline" className={styles.primaryCallButton} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal (FancyBox alternative) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className={styles.videoModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.modalBackdrop} onClick={() => setIsVideoOpen(false)}></div>
            <button className={styles.closeModal} onClick={() => setIsVideoOpen(false)}>
              <X size={32} />
            </button>
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <video 
                width="100%" 
                height="100%" 
                controls 
                autoPlay
                className={styles.htmlVideo}
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
