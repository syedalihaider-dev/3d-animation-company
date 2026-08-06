"use client";
import React, { useState } from 'react';
import styles from './WhyInvestSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Conceptualization',
    content: 'We establish the audience, the objective, the brand voice, the competitive context, and the distribution channels before any creative work begins. We write a creative brief specific enough to make real production decisions from. Vague briefs produce vague animated videos. We do not accept vague briefs.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Storyboarding and Design',
    content: 'Character design, background style, color palette, and visual direction are established and approved before a single frame is animated. A full storyboard maps every script beat to a specific visual. Changes at this stage take 30 minutes. Changes after animation begins take two days. We invest in this stage because the economics of thoroughness are straightforward.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Animation Development',
    content: 'With the storyboard approved, production begins in full. Characters move, scenes transition, and text appears at the precise moment the voiceover reaches the corresponding line. Voiceover recording runs in parallel with early animation. The entire 2D animation production runs in-house on the same team that handled the storyboard stage.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Refinements and Sound Design',
    content: 'Sound design is structural, not decorative. Background music sets the emotional register. Sound effects add weight to visual events. Final motion refinements and easing adjustments are applied here before the full draft is sent for client review. What gets produced at this stage is a fully finished video, not a rough cut.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Quality Assurance',
    content: 'Before the draft reaches you, it goes through a structured internal review: audio-visual sync, brand accuracy against approved style frames, voiceover mix levels, and platform-specific export specifications. We catch production issues here so they do not arrive as client revision requests.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Final Draft Review and Delivery',
    content: 'The final draft arrives with a structured revision process. Every note is documented and confirmed before changes are made. We do not guess at ambiguous feedback. Final delivery covers every format and resolution specified at kickoff, plus source files in most project scopes.',
  },
];

const WhyInvestSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">HOW WE WORK</p>
              <h2 className={styles.mainTitle}>Our Proven 2D<br /> Animation Workflow</h2>
              <p className={styles.subText}>
                Our 2D animation production follows a structured, milestone-driven process. Here is exactly what happens between the brief and the final file.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className={styles.accordionList}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() => setActiveId(item.id === activeId ? null : item.id)}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.iconCircle}>
                        <Image src={item.icon} alt={item.title} width={108} height={108} className={styles.accIcon} />
                      </div>
                      <h3 className={styles.accTitle}>{item.title}</h3>
                    </div>

                    <div className={styles.chevronWrapper}>
                      {activeId === item.id ? (
                        <ChevronUp size={24} className={styles.chevron} />
                      ) : (
                        <ChevronDown size={24} className={styles.chevron} />
                      )}
                    </div>
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
                          <p className={`${styles.accContent} scroll_block`}>{item.content}</p>
                          <div className={styles.btnWrapper}>
                            <CTAButton text="Learn More" href="#" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
