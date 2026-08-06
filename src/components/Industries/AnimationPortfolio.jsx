"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";
import styles from "./AnimationPortfolio.module.css";
import Image from "next/image";

const tabs = [
  "VIEW ALL",
  "2D",
  "3D",
  "BRAND",
  "BLOCKCHAIN & NFT",
  "COMMERCIAL",
  "CHARACTER",
  "EXPLAINER",
  "FRAME-BY-FRAME",
  "FEATURED",
  "GAMING",
  "PROMOTIONAL",
  "SAAS",
  "TECH"
];

const portfolioItems = [
  { id: 1, image: "/porfolio/01.png", title: "Pure Moringa", category: "2D", type: "Animation" },
  { id: 2, image: "/porfolio/02.png", title: "Organic Product Animation", category: "3D", type: "Animation" },
  { id: 3, image: "/porfolio/03.png", title: "Brand Identity", category: "BRAND", type: "Product Animation" },
  { id: 4, image: "/porfolio/04.png", title: "Organic Product Animation", category: "COMMERCIAL", type: "Product Animation" },
  { id: 5, image: "/porfolio/05.png", title: "Organic Product Animation", category: "CHARACTER", type: "Product Animation" },
  { id: 6, image: "/porfolio/06.png", title: "Organic Product Animation", category: "EXPLAINER", type: "Product Animation" },
  { id: 7, image: "/porfolio/07.png", title: "Organic Product Animation", category: "FEATURED", type: "Product Animation" },
  { id: 8, image: "/porfolio/08.png", title: "Organic Product Animation", category: "GAMING", type: "Product Animation" },
  { id: 9, image: "/porfolio/09.png", title: "Organic Product Animation", category: "PROMOTIONAL", type: "Product Animation" },
  { id: 10, image: "/porfolio/10.png", title: "Organic Product Animation", category: "SAAS", type: "Product Animation" },
  { id: 11, image: "/porfolio/11.png", title: "Organic Product Animation", category: "TECH", type: "Product Animation" },
  { id: 12, image: "/porfolio/12.png", title: "Blockchain Project", category: "BLOCKCHAIN & NFT", type: "Animation" },
  { id: 13, image: "/porfolio/13.png", title: "Frame by Frame", category: "FRAME-BY-FRAME", type: "Animation" }
];

export default function AnimationPortfolio() {
  const [activeTab, setActiveTab] = useState("VIEW ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const filteredItems = activeTab === "VIEW ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  const openModal = (item) => {
    setCurrentVideo(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.subHeading}>OUR WORK SPEAKS</h3>
      <h2 className={styles.heading}>ANIMATION PORTFOLIO</h2>
      <p className={styles.description}>
        We create powerful visual stories that engage, inspire and deliver real results.
      </p>

      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              key={item.id}
              className={styles.gridItem}
              onClick={() => openModal(item)}
            >
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemCategory}>{item.type}</div>
                </div>
                <button className={styles.watchBtn}>
                  <span className={styles.watchBtnText}>Watch Now</span>
                  <div className={styles.playIconWrapper}>
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closeModal}>
                <X size={30} />
              </button>
              <div style={{ width: "100%", height: "100%", background: "#000" }}>
                <iframe 
                  src="https://player.vimeo.com/video/146022717?autoplay=1&color=CB09A4&title=0&byline=0&portrait=0" 
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title="Animation Portfolio Video"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
