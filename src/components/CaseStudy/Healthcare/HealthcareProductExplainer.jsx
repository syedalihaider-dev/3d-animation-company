'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareProductExplainer.module.css';

export default function HealthcareProductExplainer() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className={styles.explainerSection}>
        <div className="container relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className={styles.mainHeading}>Product explainer</h2>
                <p className={styles.para}>
                  This 34-second video keeps it engaging with 2D animation and 3D elements. The video briefly describes how Loom's product elevates team collaborations. It starts by highlighting the problem of communication breakdown in the workplace and then presents Loom as the solution. The problem-solution structure always makes an impact.
                </p>
                <div className={`d-flex gap-3 ${styles.buttonsWrapper}`}>
                  <CTAButton text="Let's Talk" href="#" />
                  <CTAButton text="Call Now" href="#" variant="outline" />
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className={styles.videoThumbnailWrapper}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => setIsVideoOpen(true)}
              >
                <div className={styles.thumbnailContainer}>
                  {/* YouTube thumbnail directly embedded */}
                  <Image
                    src="https://img.youtube.com/vi/wKoZ-JiEsug/maxresdefault.jpg"
                    alt="SaaS Explainer Video | Loom"
                    width={800}
                    height={450}
                    className={styles.thumbnailImage}
                    unoptimized
                  />
                  <div className={styles.playButtonOverlay}>
                    <svg
                      width="68"
                      height="48"
                      viewBox="0 0 68 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.youtubeIcon}
                    >
                      <path d="M66.52 7.74C65.74 4.81 63.46 2.53 60.53 1.74C55.27 0 34 0 34 0C34 0 12.73 0 7.47 1.74C4.54 2.53 2.26 4.81 1.48 7.74C0 13.01 0 24 0 24C0 24 0 34.99 1.48 40.26C2.26 43.19 4.54 45.47 7.47 46.26C12.73 48 34 48 34 48C34 48 55.27 48 60.53 46.26C63.46 45.47 65.74 43.19 66.52 40.26C68 34.99 68 24 68 24C68 24 68 13.01 66.52 7.74Z" fill="#FF0000" />
                      <path d="M27 34L45 24L27 14V34Z" fill="white" />
                    </svg>
                  </div>
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
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wKoZ-JiEsug?autoplay=1"
                title="YouTube video player"
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
