"use client";
import React, { useState, useEffect } from 'react';
import styles from './GlobalPopup.module.css';
import { User, Phone, Mail, Send, X, Check } from 'lucide-react';
import CTAButton from './CTAButton';
import { submitLead } from '../../utils/formSubmit';

const GlobalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Event listener for button clicks
    const handleOpenPopup = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener('open-global-popup', handleOpenPopup);

    // Auto popup after 4 seconds
    const hasShownPopup = sessionStorage.getItem('hasShownAutoPopup');
    let timer;
    if (!hasShownPopup) {
      timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasShownAutoPopup', 'true');
      }, 4000);
    }

    return () => {
      window.removeEventListener('open-global-popup', handleOpenPopup);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      msg: formData.description,
      Form_name: 'Global Popup Form'
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={() => setIsOpen(false)}>
      <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close Popup">
          <X size={18} />
        </button>

        {/* Content Columns */}
        <div className={styles.popupContent}>
          {/* Left Column (Details) */}
          <div className={styles.leftColumn}>
            <div className={styles.textWrapper}>
              <h2 className={styles.heading}>We are Here to Help!</h2>

              {/* Divider Decor */}
              <div className={styles.divider}>
                <span className={styles.line}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>

              <p className={styles.subtext}>
                Tell us a bit about your <br />project and our team will<br /> get back to you<br /> soon.
              </p>
            </div>
          </div>

          {/* Right Column (Form Box) */}
          <div className={styles.rightColumn}>
            <div className={styles.formCard}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIconWrapper}>
                    <Check size={48} className={styles.successIcon} />
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Name Input */}
                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>
                      <User size={20} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>
                      <Phone size={20} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  {/* Email Input */}
                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>
                      <Mail size={20} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  {/* Description Textarea */}
                  <div className={styles.textareaGroup}>
                    <span className={styles.textareaIcon}>
                      <Send size={20} />
                    </span>
                    <textarea
                      name="description"
                      placeholder="To help us understand better, enter a brief description of your project."
                      required
                      value={formData.description}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  {/* Submit CTA Button component called with submit functionality */}
                  <div className={styles.submitContainer}>
                    <CTAButton
                      type="submit"
                      text="Submit Now"
                      className={styles.submitBtn}
                    />
                  </div>

                  {/* Privacy Info */}
                  <div className={styles.privacyNote}>
                    <span className={styles.privacyCheck}>
                      <Check size={14} />
                    </span>
                    <p>We respect your privacy. Your information is safe with us.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPopup;
