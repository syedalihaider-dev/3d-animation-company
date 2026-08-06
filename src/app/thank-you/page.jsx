"use client";
import React from 'react';
import styles from './thank-you.module.css';
import { Check } from 'lucide-react';
import CTAButton from '../../components/Common/CTAButton';

export default function ThankYouPage() {
  return (
    <main className={styles.thankYouSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.iconContainer}>
          <Check size={48} strokeWidth={3} />
        </div>
        <h1 className={styles.heading}>Thank You!</h1>
        <p className={styles.subheading}>
          Your request has been successfully submitted. One of our animation experts will get back to you shortly to discuss your project.
        </p>
        <div className={styles.buttonContainer}>
          <CTAButton
            type="link"
            href="/"
            text="Go Back Home"
            className={styles.btn}
          />
        </div>
      </div>
    </main>
  );
}
