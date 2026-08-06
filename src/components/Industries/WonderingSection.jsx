"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Banking",
    intro: "We work with a diverse set of banking institutions, including universal banks, national banks, commercial banks and retail neo-banks. Our work encompasses operation enhancements and crafting innovative digital products.",
    points: [
      "Partnering with a leading fintech and payments company's ex-VP to develop an API-first, cloud-based digital banking platform (PaaS) for smaller North American financial institutions.",
      "Crafting a crypto-friendly private banking ecosystem tailored for ultra high-net-worth individuals, offering exclusive lifestyle preferences alongside transaction services.",
      "Developing a self-service BI report system for a prominent commercial bank in Vietnam, equipping staff with BI skills for data-driven decision-making.",
      "Building a resilient data management system for a leading universal bank in Vietnam."
    ]
  },
  {
    name: "Insurance",
    intro: "Empowering insurance companies with digital tools to streamline operations, enhance customer experience, and accelerate claim processing through modern technology solutions.",
    points: [
      "Revolutionizing claims processing with AI-driven document analysis and automated workflows for a top-tier European insurance provider.",
      "Building a scalable policy management system that reduced time-to-market for new insurance products by 40%.",
      "Implementing a comprehensive telematics solution for auto insurance, enabling usage-based pricing and risk assessment."
    ]
  },
  {
    name: "Market infrastructure",
    intro: "Building resilient and scalable market infrastructure solutions that ensure secure, high-speed, and reliable financial transactions across global markets.",
    points: [
      "Developing a high-throughput trading engine capable of processing millions of transactions per second with microsecond latency.",
      "Creating a robust clearing and settlement system for a major stock exchange, ensuring regulatory compliance and risk mitigation.",
      "Designing a real-time market data distribution platform for institutional investors and algorithmic traders."
    ]
  },
  {
    name: "Asset management",
    intro: "Transforming asset management with data-driven platforms that provide deep insights, automate portfolio management, and enhance client engagement.",
    points: [
      "Building a comprehensive portfolio management platform with real-time risk analytics and performance attribution.",
      "Developing an automated robo-advisory solution for retail investors, featuring personalized investment strategies and goal-based planning.",
      "Creating a secure client portal for high-net-worth individuals, offering transparent reporting and seamless communication."
    ]
  },
  {
    name: "Fintech",
    intro: "Partnering with innovative fintech startups to build scalable, secure, and user-centric financial products that disrupt traditional banking and financial services.",
    points: [
      "Engineering a scalable peer-to-peer lending platform with automated credit scoring and risk assessment algorithms.",
      "Developing a cross-border remittance solution that significantly reduced transaction costs and settlement times.",
      "Building a comprehensive digital wallet with integrated payment gateways and loyalty programs for a rising fintech startup."
    ]
  },
  {
    name: "RWA tokenization",
    intro: "Pioneering the tokenization of real-world assets, creating secure and compliant blockchain infrastructure to unlock liquidity and fractionalize ownership.",
    points: [
      "Creating a secure platform for tokenizing real estate assets, enabling fractional ownership and secondary market liquidity.",
      "Developing a smart contract-based system for tokenizing and trading fine art and collectibles on the blockchain.",
      "Building an enterprise-grade infrastructure for issuing and managing tokenized securities compliant with global regulations."
    ]
  }
];

export default function WonderingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const activeData = industriesData[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <Image
          src="/industry/wondering-bg.png"
          alt="Wondering Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
        />
      </div>
      <div className={`${styles.bgGradient} ${isContainerHovered ? styles.visible : ''}`}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="row"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12 text-center">
            <h4 className={styles.subHeader}>Wondering how well</h4>
            <h2 className={styles.mainTitle}>We know your vertical?</h2>
          </div>
        </motion.div>

        <motion.div
          className="row"
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => setIsContainerHovered(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-lg-4 col-md-12">
            <div className={styles.industryList}>
              {industriesData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.industryItem} ${index === activeIndex && isContainerHovered ? styles.active : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span>{item.name}</span>
                  <div className={styles.arrowIcon}>
                    <Image src="/icons/arrow.png" alt="Arrow" width={38} height={30} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.actions} ${isContainerHovered ? styles.visibleActions : ''}`}>
              <button className={styles.btnPrimary}>
                Learn More &rarr;
              </button>
              <CTAButton text="Let's Talk" type="link" href="/contact-us" variant="outline" className={styles.customCta} />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className={`${styles.rightContent} ${isContainerHovered ? styles.visibleRightContent : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className={styles.contentIntro}>{activeData.intro}</p>

                  <h3 className={styles.contentTitle}>Example of our work</h3>

                  <div className={styles.bulletList}>
                    {activeData.points.map((point, idx) => (
                      <div key={idx} className={styles.bulletItem}>
                        <div className={styles.tickIcon}>
                          <Image src="/icons/tick.png" alt="Tick" width={29} height={29} />
                        </div>
                        <p className={styles.bulletText}>{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
