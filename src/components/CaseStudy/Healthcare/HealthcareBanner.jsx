'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import styles from './HealthcareBanner.module.css';

export default function HealthcareBanner() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className={styles.bannerSection}>
        <div className="container relative z-10">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <motion.h1
                className={styles.mainHeading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Case Study for: Prolific Studio | <br /> N-Seam Saver
              </motion.h1>
              <motion.p
                className={styles.subPara}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Prolific Studio created a fun, upbeat 3D animated commercial for N-Seam Saver, blending humor and relatability with sleek product integration. The story follows a teen girl and her mom as they comically wrestle with a pair of shrunken jeans. Just when all hope seems lost, a superhero named Super Seam Saver bursts onto the scene with the ultimate solution: the N-Seam Saver Super Stretch Hangers. Through playful animation, smooth transitions, and exaggerated expressions, the spot highlights the product&apos;s benefit in a way that is entertaining and easy to remember.
              </motion.p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-12">
              <motion.div
                className={styles.videoThumbnailWrapper}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={() => setIsVideoOpen(true)}
              >
                <div className={styles.thumbnailContainer}>
                  <Image
                    src="/case-study/healthcare/banner-video-thumbnail.png"
                    alt="Video Thumbnail"
                    width={1348}
                    height={683}
                    className={styles.thumbnailImage}
                    priority
                  />
                  <div className={styles.playButtonOverlay}>
                    <div className={styles.playCircle}>
                      <Play className={styles.playIcon} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal (FancyBox Alternative) */}
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
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
