"use client";
import React from 'react';
import styles from './CTAButton.module.css';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { brandInfo } from '@/constants/brandInfo';

const CTAButton = ({ type = 'link', variant = 'filled', text, href = '#', onClick, className = '' }) => {
  let finalHref = href;
  if (href && (href.startsWith('tel:') || href.includes('443-487-0213'))) {
    finalHref = brandInfo.phone.href;
  } else if (href && (href.startsWith('mailto:') || href.includes('info@pixelstudiosinc.com'))) {
    finalHref = brandInfo.email.href;
  }

  const handleClick = (e) => {
    const isPopupTrigger = text && (
      text.toLowerCase().includes('get started') ||
      text.toLowerCase().includes('learn more') ||
      text.toLowerCase().includes('get a quote') ||
      text.toLowerCase().includes('book a meeting') ||
      text.toLowerCase().includes('get quote')
    );

    const isChatTrigger = text && (
      text.toLowerCase().includes('live chat') ||
      text.toLowerCase().includes("let's talk") ||
      text.toLowerCase().includes("let’s talk") ||
      text.toLowerCase().includes("chat")
    );

    if (isChatTrigger || type === 'chat') {
      e.preventDefault();
      if (typeof window !== 'undefined' && typeof window.toggleChat === 'function') {
        window.toggleChat();
      }
      if (onClick) onClick(e);
      return;
    }

    if (isPopupTrigger || type === 'popup') {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-global-popup'));
      }
      if (onClick) onClick(e);
      return;
    }

    if (onClick) onClick(e);
    if (type === 'phone') {
      e.preventDefault();
      window.location.href = brandInfo.phone.href;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'chat': return <MessageSquare size={18} className={styles.icon} />;
      case 'phone': return <Phone size={18} className={styles.icon} />;
      default: return <Image src="/button-arrow.png" alt="arrow" width={24} height={24} className={styles.icon} />;
    }
  };

  const buttonClass = `${styles.ctaButton} ${variant === 'outline' ? styles.outline : ''} ${className}`;

  if (type === 'link') {
    // For tel: and mailto:, use regular anchor tag to avoid Next.js router issues
    if (finalHref.startsWith('tel:') || finalHref.startsWith('mailto:')) {
      return (
        <a href={finalHref} className={buttonClass} onClick={handleClick}>
          {text} {getIcon()}
        </a>
      );
    }
    return (
      <Link href={finalHref} className={buttonClass} onClick={handleClick}>
        {text} {getIcon()}
      </Link>
    );
  }

  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className={buttonClass} onClick={handleClick}>
      {text} {getIcon()}
    </button>
  );
};

export default CTAButton;
