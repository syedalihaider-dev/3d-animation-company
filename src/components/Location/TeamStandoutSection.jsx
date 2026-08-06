"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Result-Oriented',
    description: "For our company, the only indicator of the project's success is achieving the goals and objectives set by the client. Thanks to high-quality project management and a team of IT talent, we deliver our work as quickly and efficiently as possible.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Flexible',
    description: "Our team already numbers 3,500+ highly qualified IT professionals. It allows us to quickly adapt to our clients' needs. We provide rapid team ramp-up and can easily scale up or down depending on the project's changing conditions.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Transparent',
    description: "Our cooperation with clients is always open and honest. We ensure regular communication, an established daily reporting system, and tracking tools according to the client's preferences. Thus, our clients can control all possible aspects of projects.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Experienced',
    description: "Innowise has established well-managed processes to deliver software development services. They are based on the best examples of IT outsourcing and can be easily aligned to the specifics of customers and their projects.",
    icon: '/icons/experienced.png'
  }
];

const TeamStandoutSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.standoutSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h5 className={styles.subHeading}>WHAT MAKES</h5>
          <h2 className={styles.mainHeading}>OUR TEAM <span>STAND OUT</span></h2>
          <p className={styles.headerDesc}>
            Full-cycle game development means we own the entire pipeline, from the first concept sketch to the day the build goes live on the platform.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div className={styles.progressFill} style={{ height: lineHeight }} />
              </div>
              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  >
                    <div className={styles.featureIcon}>
                      <div className={styles.featureIconImageWrapper}>
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          style={{ objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        {!feature.icon && <div style={{ width: 64, height: 64, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}></div>}
                      </div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                    </div>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.stickyColumn}>
              <motion.div
                className={styles.videoWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <video
                  src="/videos/home.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStandoutSection;
