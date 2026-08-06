"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "How much does an animation company cost?",
    answer:
      "The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30-second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.",
  },
  {
    question: "What types of video content do you produce?",
    answer: "We produce various types of video content including explainer videos, promotional videos, corporate videos, training videos, and social media videos.",
  },
  {
    question: "What is your video production process like?",
    answer: "Our process typically includes discovery, scriptwriting, storyboarding, animation/production, voiceover, and final review with client revisions.",
  },
  {
    question: "What type of video is right for our business?",
    answer: "The right type of video depends on your specific goals. Explainer videos are great for products, while corporate videos are better for brand building.",
  },
  {
    question: "What makes a good video marketing strategy?",
    answer: "A good strategy focuses on your target audience, clear messaging, high-quality production, and effective distribution channels.",
  },
  {
    question: "What briefing materials do I need to provide?",
    answer: "We usually ask for your brand guidelines, key messaging, target audience details, and any specific ideas or references you have in mind.",
  },
  {
    question: "Does Video Animation focus on corporate video production?",
    answer: "Yes, we have extensive experience in creating professional corporate videos tailored to your company's identity and communication goals.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>FREQUENTLY ASKED QUESTION?</h2>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className={`${styles.faqItem} ${isActive ? styles.active : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.question}>{faq.question}</h3>
                  <motion.div
                    className={styles.iconContainer}
                    initial={false}
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isActive ? (
                      <X className={styles.icon} />
                    ) : (
                      <Plus className={styles.icon} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.answerContainer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p className={styles.answer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
