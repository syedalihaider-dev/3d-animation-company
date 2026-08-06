"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import CTAButton from './CTAButton';

const navData = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about-us' },
  // {
  //   name: 'SERVICES',
  //   path: '#',
  //   isMegaMenu: true,
  //   megaMenuLayout: 'services',
  //   columns: [
  //     {
  //       sections: [
  //         {
  //           heading: '2D Animation Services',
  //           headingPath: '/2d-animation-services',
  //           items: [
  //             { name: 'Animated Explainer Video', path: '/animated-explainer-video' },
  //             // { name: 'Explainer Video Production', path: '#' },
  //             { name: 'Motion Graphics', path: '/motion-graphics' },
  //             { name: 'Whiteboard Animation', path: '/whiteboard-animation-services' },
  //             { name: 'Social Media Animation', path: '/social-media-animation' },
  //             { name: 'Educational Video Production', path: '/educational-video-production' },
  //             { name: 'Animated Commercials', path: '/animated-commercials-services' },
  //             // { name: 'Cartoon Animation', path: '#' },
  //             { name: 'Logo Animation', path: '/logo-animation-services' },
  //             { name: 'Hybrid & Cel Animation', path: '/hybrid-and-cel-animation' },
  //           ]
  //         },
  //         // {
  //         //   heading: 'Product Visualization Services',
  //         //   items: [
  //         //     // { name: 'CGI Product Visualization', path: '#' }
  //         //   ]
  //         // }
  //       ]
  //     },
  //     {
  //       sections: [
  //         {
  //           heading: '3D Animation Services',
  //           headingPath: '/3d-animation-services',
  //           items: [
  //             { name: '3D Product Animation', path: '/3d-product-animation' },
  //             { name: '3D Modeling', path: '/3d-modeling-services' },
  //             { name: '3D Industrial Animation', path: '/3d-industrial-animation' },
  //             { name: 'Character Animation', path: '/character-animation' },
  //             // { name: '3D Character Design', path: '#' },
  //             // { name: '3D Environment Design', path: '#' },
  //             // { name: '3D Illustration Services', path: '#' },
  //             // { name: 'Technical Animation', path: '#' },
  //             // { name: 'Manufacturing Animation', path: '#' },
  //             { name: 'Medical Animation', path: '/medical-animation' },
  //             { name: 'Legal Graphics Animation', path: '/legal-graphics-animation' },
  //             // { name: 'Architectural Rendering', path: '#' },
  //             // { name: 'Photorealistic Rendering', path: '#' },
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       sections: [
  //         {
  //           heading: 'Video Production Services',
  //           items: [
  //             { name: 'Corporate Video Animation', path: '/corporate-video-animation' },
  //             // { name: 'Product Demo Videos', path: '#' },
  //             // { name: 'Live Action Video Production', path: '#' },
  //             // { name: 'Training Video Production', path: '#' },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       sections: [
  //         {
  //           heading: 'Video Editing Services',
  //           headingPath: '/video-editing-services',
  //           items: []
  //         },
  //         {
  //           heading: 'Game Development & Animation',
  //           headingPath: '#',
  //           items: [
  //             { name: 'Game Animation', path: '/game-animation' },
  //             { name: 'Titles & Trailer Animation', path: '/titles-and-trailer-animation' },
  //             { name: 'Game Trailer', path: '/game-trailer' },
  //             // { name: '3D Game Models', path: '#' },
  //             // { name: 'Character Design', path: '#' },
  //             // { name: 'Environment Design', path: '#' },
  //             // { name: 'Game Level Design', path: '#' },
  //           ]
  //         },
  //         {
  //           heading: 'AI Animation Services',
  //           headingPath: '/ai-animation',
  //           items: []
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: 'INDUSTRIES',
  //   path: '#',
  //   isMegaMenu: true,
  //   megaMenuLayout: 'grid',
  //   items: [
  //     { name: 'BioTech Animation', path: '/biotech-animation' },
  //     { name: 'Ecommerce Video Production', path: '/ecommerce-video-production' },
  //     // { name: 'Game Design', path: '#' },
  //     { name: 'Logistics Animation', path: '/logistics-animation' },
  //     { name: 'Real Estate Animation', path: '/real-estate-animation' },
  //     { name: 'Saas Explainer Videos', path: '/saas-explainer-videos' },
  //     { name: 'Insurance Animation', path: '/insurance-animation' },
  //     { name: 'Automotive Animation', path: '/automotive-animation' },
  //     { name: 'Advertising Animation', path: '/advertising-animation' },
  //     { name: 'Architecture Animation', path: '/architecture-animation' },
  //     { name: 'Education Animation', path: '/education-animation' },
  //     { name: 'Enterprise Animation', path: '/enterprise-animation' },
  //     { name: 'Entertainment Animation', path: '/entertainment-animation' },
  //     { name: 'Fintech Animation', path: '/fintech-animation' },
  //     { name: 'Finance Animation', path: '/finance-animation' },
  //     { name: 'Gaming Animation', path: '/gaming-animation' },
  //     { name: 'Government Animation', path: '/government-animation' },
  //     { name: 'Healthcare Animation', path: '/healthcare-animation' },
  //     { name: 'Manufacturing Animation', path: '/manufacturing-animation' },
  //     // { name: 'Medical', path: '#' },
  //     { name: 'Non-Profit Animation', path: '/nonprofit-animation' },
  //     // { name: 'Real Estate', path: '#' },
  //     { name: 'Technology Animation', path: '/technology-animation' },
  //   ]
  // },
  // {
  //   name: 'INSIGHTS',
  //   path: '#',
  //   isDropdown: true,
  //   items: [
  //     // { name: 'BLOG', path: '#' },
  //     { name: 'PRESS RELEASE', path: '/press-release' },
  //   ]
  // },
  {
    name: 'OUR WORK',
    path: '/our-work',
    // isDropdown: true,
    // items: [
    //   { name: 'PORTFOLIO', path: '/our-work' },
    //   // { name: 'CASE STUDIES', path: '/case-study' },
    // ]
  },
  { name: 'CONTACT US', path: '/contact-us' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98, pointerEvents: 'none' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: 'auto',
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    transition: { duration: 0.2 }
  }
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 200, damping: 25 }
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' }
  }
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0, overflow: 'hidden' },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

const MobileAccordionItem = ({ item, level = 0, setMobileMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const title = item.name || item.heading;
  const targetPath = item.path || item.headingPath || '#';
  const hasValidPath = targetPath && targetPath !== '#';

  const hasDropdownItems = item.items && item.items.length > 0;
  const hasSections = item.sections && item.sections.length > 0;
  const hasColumns = item.columns && item.columns.length > 0;
  const isDirectDropdown = item.isDropdown || item.isMegaMenu;
  const hasChildren = hasDropdownItems || hasSections || hasColumns || isDirectDropdown;

  const indentStyle = { paddingLeft: level > 0 ? `${level * 15}px` : '0' };

  if (!hasChildren) {
    return (
      <Link
        href={targetPath}
        className={level === 0 ? styles.mobileNavLink : styles.mobileSubItem}
        style={indentStyle}
        onClick={() => setMobileMenuOpen(false)}
      >
        {title}
      </Link>
    );
  }

  return (
    <div className={level === 0 ? styles.mobileNavItem : ''}>
      <div className={level === 0 ? styles.mobileNavRow : styles.mobileSubNavRow} style={indentStyle}>
        {hasValidPath ? (
          <Link
            href={targetPath}
            className={level === 0 ? styles.mobileNavLinkText : styles.mobileSubLinkText}
            onClick={() => setMobileMenuOpen(false)}
          >
            {title}
          </Link>
        ) : (
          <button
            type="button"
            className={level === 0 ? styles.mobileNavLinkText : styles.mobileSubLinkText}
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </button>
        )}

        <button
          type="button"
          className={styles.chevronBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Submenu"
        >
          <ChevronDown
            size={level === 0 ? 20 : 16}
            className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={styles.mobileAccordionContent}
          >
            {hasColumns && item.columns.map((col, idx) => (
              <div key={idx}>
                {col.sections && col.sections.map((sec, sIdx) => (
                  <MobileAccordionItem key={sIdx} item={sec} level={level + 1} setMobileMenuOpen={setMobileMenuOpen} />
                ))}
              </div>
            ))}

            {hasSections && !hasColumns && item.sections.map((sec, idx) => (
              <MobileAccordionItem key={idx} item={sec} level={level + 1} setMobileMenuOpen={setMobileMenuOpen} />
            ))}

            {hasDropdownItems && item.items.map((subItem, idx) => (
              <MobileAccordionItem key={idx} item={subItem} level={level + 1} setMobileMenuOpen={setMobileMenuOpen} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleAccordion = (name) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  return (
    <header className={styles.headerContainer} onMouseLeave={handleMouseLeave}>
      <div className="container">
        <motion.div
          className={`${styles.headerInner} ${scrolled ? styles.scrolled : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
        >
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="3D Animation Company Logo"
              width={500}
              height={250}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <div className={styles.navLinksWrapper}>
              {navData.map((link) => (
                <div
                  key={link.name}
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                >
                  {link.isMegaMenu || link.isDropdown ? (
                    <div className={`${styles.navLink} ${pathname === link.path && link.path !== '#' ? styles.active : ''}`}>
                      {link.path !== '#' ? (
                        <Link href={link.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {link.name}
                        </Link>
                      ) : (
                        link.name
                      )}
                      <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === link.name ? styles.open : ''}`} />
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.isDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          key={`${link.name}-dropdown`}
                          className={styles.smallDropdown}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          onMouseEnter={() => handleMouseEnter(link.name)}
                        >
                          {link.items.map((item, itemIdx) => (
                            <Link key={itemIdx} href={item.path} className={styles.smallDropdownItem}>
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Render Mega Menus relative to navLinksWrapper */}
              <AnimatePresence>
                {navData.map((link) => {
                  if (activeDropdown !== link.name) return null;

                  if (link.isMegaMenu) {
                    return (
                      <motion.div
                        key={`${link.name}-mega`}
                        className={styles.megaMenu}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                      >
                        {link.megaMenuLayout === 'services' && (
                          <div className={styles.servicesGrid}>
                            {link.columns.map((col, colIdx) => (
                              <div key={colIdx} className={styles.servicesColumn}>
                                {col.sections.map((section, secIdx) => (
                                  <div key={secIdx} className={styles.servicesSection}>
                                    <div className={styles.sectionHeading}>
                                      {section.headingPath ? (
                                        <Link href={section.headingPath} style={{ color: 'inherit', textDecoration: 'none' }}>
                                          {section.heading}
                                        </Link>
                                      ) : (
                                        section.heading
                                      )}
                                    </div>
                                    {section.items.map((item, itemIdx) => (
                                      <Link key={itemIdx} href={item.path} className={styles.megaMenuItem}>
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {link.megaMenuLayout === 'grid' && (
                          <div className={styles.industriesGrid}>
                            {link.items.map((item, itemIdx) => (
                              <Link key={itemIdx} href={item.path} className={styles.megaMenuItem}>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  }

                  return null;
                })}
              </AnimatePresence>
            </div>

            <div className="ms-3">
              <CTAButton type="link" href="/get-started" text="GET STARTED" />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu">
            <Menu size={32} />
          </button>
        </motion.div>
      </div>

      {/* Mobile Fullscreen Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.offcanvas}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
              <X size={36} />
            </button>
            <nav className={styles.offcanvasNav}>
              {navData.map((link, idx) => (
                <MobileAccordionItem key={idx} item={link} level={0} setMobileMenuOpen={setMobileMenuOpen} />
              ))}
              <div className="mt-5 mb-4">
                <CTAButton type="link" href="/get-started" text="GET STARTED" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
