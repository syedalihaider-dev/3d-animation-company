'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './ContactFormSection.module.css';

const logos = [
  'amazon.png', 'google.png', 'jp-morgan.png', 'hubspot.png', 'mckesson.png',
  'universal.png', 'peocock.png', 'safeway.png', 'tmobile.png', 'toast.png',
  'alibaba.png', 'uber.png', 'visa.png', 'avast.png', 'clear.png'
];

const ContactFormSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className={styles.formSection}>
      <div className="container position-relative">
        <div className="row">

          {/* Left Column - Form */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className={styles.mainHeading}>
              Interested in working with our 3D animation company?
            </motion.h2>

            <motion.form 
              variants={fadeInUp} 
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                import('../../utils/formSubmit').then(({ submitLead }) => {
                  submitLead({
                    name: data.get('name'),
                    phone: data.get('phone'),
                    email: data.get('email'),
                    "Ref URL": data.get('video_ref'),
                    "Industry": data.get('industry'),
                    "Quantity": data.get('quantity'),
                    "Budget": data.get('budget'),
                    "Video Type": data.get('video_type'),
                    "Hear About": data.get('hear_about'),
                    msg: data.get('message'),
                    Form_name: 'Contact Page Form'
                  });
                });
              }} 
              className={styles.formWrapper}
            >
              <div className="row g-4">
                <div className="col-md-6">
                  <input type="text" name="name" className={styles.formInput} placeholder="Enter Your Full Name *" required />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="phone" className={styles.formInput} placeholder="Mobile Number *" required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className={styles.formInput} placeholder="Email *" required />
                </div>
                <div className="col-md-6">
                  <input type="url" name="video_ref" className={styles.formInput} placeholder="Enter Video Refrence URL Here" />
                </div>

                <div className="col-md-6">
                  <select name="industry" className={styles.formSelect}>
                    <option value="">Industry</option>
                    <option value="tech">Technology</option>
                    <option value="health">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="ecommerce">E-commerce</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select name="quantity" className={styles.formSelect}>
                    <option value="">Quantity of Videos</option>
                    <option value="1">1</option>
                    <option value="2-3">2-3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select name="budget" className={styles.formSelect}>
                    <option value="">Budget</option>
                    <option value="<5k">&lt; $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select name="video_type" className={styles.formSelect}>
                    <option value="">Video Type</option>
                    <option value="2d">2D Animation</option>
                    <option value="3d">3D Animation</option>
                    <option value="whiteboard">Whiteboard</option>
                    <option value="explainer">Explainer</option>
                  </select>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                  <textarea name="message" className={styles.formTextarea} placeholder="Tell us more about your project" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                  <select name="hear_about" className={styles.formSelect} style={{ width: '100%' }}>
                    <option value="">How Did You Hear About Us?</option>
                    <option value="Google Search">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* <div className={styles.fileUploadWrapper}>
                <span className={styles.fileUploadLabel}>Upload Reference File</span>
                <div className={styles.dropZone} onClick={() => document.getElementById('fileUpload').click()}>
                  <span className={styles.dropText}>Drop files here or</span>
                  <button type="button" className={styles.selectFilesBtn}>Select Files ➔</button>
                  <input type="file" id="fileUpload" className={styles.fileInput} accept=".jpg,.png,.pdf,.doc,.docx" />
                </div>
                <div className={styles.fileInfo}>
                  Accepted file types: jpg, png, pdf, doc, docx, Max. file size: 15 MB, Max. files: 1.
                </div>
              </div> */}

              <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="agreement" required />
                <label htmlFor="agreement" className={styles.checkboxText}>
                  {/* I agree to receive recurring automated text messages to the phone number provided about updates and inquiries from 3D Animation Company. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel. View our Terms of Use and Privacy Policy. */}
                  Tell us what you are building and what the film has to achieve. The more specific the brief, the more accurate the quote.
                </label>
              </div>

              <div className={styles.submitBtnWrapper}>
                <CTAButton type="submit" text="Submit" />
              </div>
            </motion.form>
          </motion.div>

          {/* Right Column - Boxes */}
          <motion.div
            className={`col-lg-6 ${styles.rightCol}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.topBox}>
              <h2 className={styles.topBoxHeading}>3D Animation Company works with every type of brand.</h2>
              <p className={styles.topBoxPara}>
                From funded startups and nonprofits to category leaders. Whatever the size of the logo, the approach is the same: understand the offer, find the one idea worth animating, and build the film around it.
              </p>

              <div className={styles.logosGrid}>
                {logos.map((logo, index) => (
                  <div key={index} style={{ width: '112px', height: '56px', position: 'relative' }}>
                    <Image
                      src={`/companies/${logo}`}
                      alt={logo.replace('.png', '')}
                      fill
                      className={styles.logoImg}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div variants={fadeInUp} className={styles.videoBox} onClick={() => setModalOpen(true)}>
              <Image
                src="/contact-video-thumbnail.png"
                alt="Video Thumbnail"
                width={785}
                height={535}
                className={styles.thumbnailImg}
              />
              <div className={styles.playBtn}></div>
            </motion.div> */}
          </motion.div>

        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeModal} onClick={() => setModalOpen(false)}>×</button>
              <iframe
                src="https://player.vimeo.com/video/1064481379?autoplay=1"
                className={styles.videoIframe}
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ContactFormSection;
