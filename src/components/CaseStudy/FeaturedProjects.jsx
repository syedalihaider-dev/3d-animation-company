"use client";
import React, { useState, useEffect } from 'react';
import styles from './FeaturedProjects.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import Image from 'next/image';

const tabs = ["All", "Web Design", "Branding", "SEO", "UX/UI", "Consultation & Audit"];

const caseStudiesData = [
  {
    id: 1,
    title: "FLIPP",
    description: "Translating a consumer-famous platform into a focused B2B experience",
    deliverables: "Web Design\nUX/UI",
    industry: "Technology",
    logoImage: "/case-study/flip-logo.png",
    coverImage: "/case-study/flip-cover.png",
    categories: ["All", "Web Design", "UX/UI"],
  },
  {
    id: 2,
    title: "ASSETCOMET",
    description: "Complex asset operations, made clear - product first site and bold visual system.",
    deliverables: "Web Design\nUX/UI",
    industry: "Technology",
    logoImage: "/case-study/assetcomet-logo.png",
    coverImage: "/case-study/assetcomet-cover.png",
    categories: ["All", "Web Design", "UX/UI"],
  },
  {
    id: 3,
    title: "FHN FINANCIAL",
    description: "Institutional trust, clarified and made usable for faster decisions.",
    deliverables: "Web Design\nUX/UI",
    industry: "Accounting & Financial",
    logoImage: "/case-study/fhn-financial-logo.png",
    coverImage: "/case-study/fhn-financial-cover.png",
    categories: ["All", "Web Design", "UX/UI", "Consultation & Audit"],
  }
];

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = caseStudiesData.filter(project => project.categories.includes(activeTab));
    setFilteredProjects(filtered);
    setVisibleCount(3); // reset when tab changes
  }, [activeTab]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        {/* Header Area */}
        <motion.div 
          className={styles.headerArea}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subheading}>CASE STUDY</p>
          <h2 className={styles.mainHeading}>FEATURED PROJECTS.</h2>
          <p className={styles.paragraph}>
            Full-cycle game development means we own the entire pipeline, from the first concept sketch to the day the build goes live on the platform.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <ul className={styles.tabsList}>
            {tabs.map((tab) => (
              <li 
                key={tab} 
                className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects List */}
        <div className={styles.projectsContainer}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.projectRow}
              >
                <div className="row align-items-center">
                  {/* Left Content */}
                  <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      
                      <div className={styles.featuresRow}>
                        <div className={styles.featureItem}>
                          <span className={styles.featureLabel}>DELIVERABLES</span>
                          <span className={styles.featureValue}>{project.deliverables}</span>
                        </div>
                        <div className={styles.featureItem}>
                          <span className={styles.featureLabel}>INDUSTRY</span>
                          <span className={styles.featureValue}>{project.industry}</span>
                        </div>
                      </div>

                      <div className={styles.actionButtons}>
                        <CTAButton type="link" text="View Case Study" href={`/case-study/${project.id}`} />
                        <CTAButton type="link" variant="outline" text="Live Site" href="#" />
                      </div>

                      <div className={styles.logoImageWrapper}>
                        <Image 
                          src={project.logoImage} 
                          alt={`${project.title} logo`} 
                          width={666} 
                          height={321} 
                          className={styles.logoImage}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="col-lg-7">
                    <div className={styles.coverImageWrapper}>
                      <Image 
                        src={project.coverImage} 
                        alt={`${project.title} cover`} 
                        width={870} 
                        height={776} 
                        className={styles.coverImage}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredProjects.length > visibleCount && (
          <div className="text-center mt-5">
            <CTAButton type="button" text="Load More" onClick={loadMore} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
