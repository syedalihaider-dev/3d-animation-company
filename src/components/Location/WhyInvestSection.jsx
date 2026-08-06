"use client";
import React, { useState } from 'react';
import styles from './WhyInvestSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    icon: '/increase.png',
    title: 'Landing page conversion',
    content: 'rates increase by up to 80% when a high-quality explainer video is present on the page.',
    hasButtons: true
  },
  {
    id: 2,
    icon: '/email-campaign.png',
    title: 'Email campaigns with video',
    content: 'can see a significant boost in click-through rates, leading to higher engagement and more conversions.',
    hasButtons: false
  },
  {
    id: 3,
    icon: '/consumers.png',
    title: '68% of consumers say',
    content: 'they would rather watch a short video to learn about a new product or service than read text.',
    hasButtons: false
  },
  {
    id: 4,
    icon: '/brand-security.png',
    title: 'Brands that publish consistent',
    content: 'video content see much stronger brand recall and overall customer loyalty.',
    hasButtons: false
  },
  {
    id: 5,
    icon: '/linked.png',
    title: 'Video generates more shares',
    content: 'than text and images combined on social media platforms.',
    hasButtons: false
  }
];

const floatingBoxes = [
  {
    id: 1,
    icon: '/icons/conversion.png',
    value: '80%',
    text: 'Higher\nConversions',
    position: styles.box1
  },
  {
    id: 2,
    icon: '/icons/growth.png',
    value: '3X',
    text: 'More Shares\nThan Text',
    position: styles.box2
  },
  {
    id: 3,
    icon: '/icons/envelope.png',
    value: '68%',
    text: 'Consumers Prefer\nVideo Email',
    position: styles.box3
  }
];

const WhyInvestSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.investSection}>
      <div className="container">

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={styles.mainTitle}>Brands That Invest in Professional<br />Video Animation Services Go Further</h2>
          <p className={styles.subText}>The data on video animation in marketing is not ambiguous anymore.</p>
        </motion.div>

        <div className="row align-items-center mt-5 pt-4">

          {/* Left Column - Rocket */}
          <div className="col-lg-6 position-relative d-flex justify-content-center align-items-center mb-5 mb-lg-0">
            <motion.div
              className={styles.rocketWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/3d-growth-rocket.png.png"
                alt="3D Growth Rocket"
                width={529}
                height={676}
                className={styles.rocketImage}
                priority
              />

              {/* Floating Boxes */}
              {floatingBoxes.map((box, idx) => (
                <motion.div
                  key={box.id}
                  className={`${styles.floatingBox} ${box.position}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.2) }}
                  viewport={{ once: true }}
                >
                  <Image src={box.icon} alt="Icon" className={styles.boxIcon} width={500} height={500} />
                  <div className={styles.boxValue}>{box.value}</div>
                  <div className={styles.boxText}>{box.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Accordion */}
          <div className="col-lg-6">
            <div className={styles.accordionList}>
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() => setActiveId(item.id)}
                  >
                    <div className={styles.iconCircle}>
                      <Image src={item.icon} alt={item.title} width={108} height={108} className={styles.accIcon} />
                    </div>
                    <h3 className={styles.accTitle}>{item.title}</h3>
                  </div>

                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={styles.accordionBodyWrapper}
                      >
                        <div className={styles.accordionBody}>
                          <p className={styles.accContent}>{item.content}</p>
                          {item.hasButtons && (
                            <div className={styles.accButtons}>
                              <CTAButton type="link" href="/services" text="Learn More" className={styles.learnBtn} />
                              <CTAButton type="link" variant="outline" href="/contact" text="Let's Talk" className={styles.talkBtn} />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
