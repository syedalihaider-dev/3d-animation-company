"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './ServicesSection.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CTAButton from '../Common/CTAButton';
import Image from 'next/image';

const services = [
  { id: '2d-animation', title: '2D Animation', icon: '/icons/2d-animation.png' },
  { id: '3d-animation', title: '3D Animation', icon: '/icons/3d-animation.png' },
  { id: 'ai-assisted', title: 'AI-Assisted Animations', icon: '/icons/ai-assisted-animations.png' },
  { id: 'whiteboard', title: 'Whiteboard Animation', icon: '/icons/whiteboard-animation.png' },
  { id: 'legal-animation', title: 'Legal Animation', icon: '/icons/legal-animation.png' },
  { id: 'motion-graphics', title: 'Motion Graphics', icon: '/icons/motion-graphics.png' },
  { id: 'explainer', title: '2D & 3D Explainer Videos', icon: '/icons/explainer-videos.png' },
  { id: 'video-editing', title: 'Video Editing', icon: '/icons/video-editing.png' },
  { id: 'logo-animation', title: 'Logo Animation', icon: '/icons/logo-animation.png' },
  { id: 'infographics', title: 'Infographics', icon: '/icons/infographics.png' },
  { id: 'architectural', title: 'Architectural Visualization', icon: '/icons/architectural-visualization.png' },
  { id: 'hybrid-cel', title: 'Hybrid & Cel Animation', icon: '/icons/hybrid-and-cel-animation.png' },
  { id: 'cgi-vfx', title: 'CGI & VFX', icon: '/icons/cgi-and-vfx.png' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container-fluid">

        {/* Heading */}
        <motion.div
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className={styles.subtitle}>WHAT WE DO</h6>
          <h2 className={styles.title}>OUR SERVICES</h2>
          <p className={styles.description}>High impact animation services that bring your ideas to life and make your brand unforgettable.</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <motion.div variants={itemVariants} className={styles.card}>
                <div className={styles.videoWrapper}>
                  {/* Background Vimeo Video Loop */}
                  <iframe
                    src="https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.textWrapper}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>Our premium animation services include 2D explainers, 3D immersive visualizations,</p>
                  </div>
                  <Link href={`/services/${service.id}`} className={styles.arrowBtn}>
                    <ArrowRight size={25} className={styles.icon} />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}

          {/* CTA Box */}
          <div className="col-lg-8 col-md-12">
            <motion.div variants={itemVariants} className={styles.ctaCard}>
              <div className={styles.ctaLeft}>
                <Image
                  src="/calender-circle.png"
                  alt="Calendar"
                  width={205}
                  height={205}
                />
                <div className={styles.ctaText}>
                  <div className={styles.ctaSubtitle}>Ready to bring your ideas to life</div>
                  <h3 className={styles.ctaTitle}>Let's create something<br />amazing together!</h3>
                  <div>
                    <CTAButton type="link" href="/book-meeting" text="Book a Meeting" />
                  </div>
                </div>
              </div>
              <div className={styles.ctaRight}>
                <Image
                  src="/logo-mokup.png"
                  alt="Logo Mockup"
                  width={231}
                  height={296}
                />
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
