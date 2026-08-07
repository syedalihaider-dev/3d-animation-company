"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

import { brandInfo } from '@/constants/brandInfo';

const Footer = () => {
  const quickLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    // { name: 'OUR SERVICES', path: '/#' },
    // { name: 'CASE STUDY', path: '/case-study' },
    // { name: 'BLOGS', path: '/#' },
    // { name: 'PRESS RELEASE', path: '/press-release' },
    // { name: 'LOCATION', path: '/location' },
    // { name: 'INDUSTRIES', path: '/industries' },
    { name: 'OUR WORK', path: '/portfolio' },
    { name: 'CONTACT US', path: '/contact-us' },
  ];

  // const serviceLinks = [
  // { name: '2D Animation', path: '/2d-animation-services' },
  // { name: '3D Animation', path: '/3d-animation-services' },
  // { name: 'Video Editing', path: '#' },
  // { name: 'Logo Animation', path: '/logo-animation-services' },
  // { name: 'AI-Assisted Animations', path: '#' },
  // { name: 'Infographics', path: '#' },
  // { name: 'Whiteboard Animation', path: '/whiteboard-animation-services' },
  // { name: 'Architectural Visualization', path: '#' },
  // { name: 'Legal Animation', path: '#' },
  // { name: 'Hybrid & Cel Animation', path: '#' },
  // { name: 'Motion Graphics', path: '/motion-graphics' },
  // { name: 'CGI & VFX', path: '#' },
  // { name: '2D & 3D Explainer Videos', path: '#' },
  // ];

  return (
    <footer className={styles.footerContainer}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.footerGrid}>
          {/* Column 1: Logo & Paragraph */}
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/logo.png" alt="3D Animation Company" width={500} height={250} />
            </Link>
            <p className={styles.aboutText}>
              We are a creative digital agency specializing in animation and video production. Let us help you tell your story through captivating visuals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          {/* <div className={`${styles.footerCol} ${styles.servicesCol}`}>
            <h3 className={styles.heading}>Services Links</h3>
            <ul className={styles.servicesList}>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 4: Contact Info */}
          <div className={styles.footerCol}>
            <h3 className={styles.heading}>Contact Info</h3>
            <ul className={styles.contactList}>
              <li>
                <Phone className={styles.contactIcon} size={18} />
                <a href={brandInfo.phone.href}>{brandInfo.phone.display}</a>
              </li>
              <li>
                <Mail className={styles.contactIcon} size={18} />
                <a href={brandInfo.email.href}>{brandInfo.email.display}</a>
              </li>
              <li className={styles.locationItem}>
                <MapPin className={styles.contactIcon} size={18} />
                <span>{brandInfo.address.display}</span>
              </li>
            </ul>
            {/* <div className={styles.socialLinks}>
              <a href={brandInfo.socials.facebook} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook-icon.png" alt="Facebook" width={20} height={20} />
              </a>
              <a href={brandInfo.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram-icon.png" alt="Instagram" width={20} height={20} />
              </a>
              <a href={brandInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin-icon.png" alt="LinkedIn" width={20} height={20} />
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightArea}>
            <p>© Copyright 2026 - 3D Animation Company.</p>
            <div className={styles.divider}></div>
            <div className={styles.bottomLinks}>
              <Link href="/terms-and-conditions">Terms of Use</Link>
              <span className={styles.dot}>•</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <Image src="/paymeny-method.png" alt="Payment Methods" width={640} height={46} />
          </div>
        </div>
      </motion.div>

      {/* Marquee Background Text */}
      <div className={styles.marqueeWrapper}>
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          <p className={styles.marqueeText}>3D Animation Company. 3D Animation Company. 3D Animation Company. 3D Animation Company. </p>
          <p className={styles.marqueeText}>3D Animation Company. 3D Animation Company. 3D Animation Company. 3D Animation Company. </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
