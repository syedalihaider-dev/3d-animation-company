"use client";
import React from 'react';
import styles from './PlayButton.module.css';
import { Play } from 'lucide-react';

const PlayButton = ({ onClick, text = "SHOW REEL", className = "" }) => {
  return (
    <div className={`d-flex flex-column align-items-center ${className}`}>
      <button className={styles.playBtn} onClick={onClick} aria-label="Play Show Reel">
        <Play fill="currentColor" size={45} className={styles.icon} />
      </button>
      {text && <span className="mt-3 text-white small" style={{ letterSpacing: '2px', fontWeight: 500 }}>{text}</span>}
    </div>
  );
};

export default PlayButton;
