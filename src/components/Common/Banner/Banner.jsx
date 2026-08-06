"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import PlayButton from '../PlayButton';
import CTAButton from '../CTAButton';

const Banner = ({
  title,
  description,
  video,
  bgVideo,
  bgImage,
  slides = [],
  centered = false,
  showTrustBadges = false,
  showPlayButton = false,
  breadcrumbs = null,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const slideDuration = 5; // seconds
  const slidesRef = useRef([]);
  const progressRefs = useRef([]);

  // Consolidate slides: support single title/description prop or slides array
  const finalSlides = slides.length > 0 ? slides : (title ? [{ title, description }] : []);
  const isSlider = finalSlides.length > 1;

  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.fromTo('.banner-reveal',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (!isSlider) {
      if (slidesRef.current[0]) {
        gsap.set(slidesRef.current[0], { opacity: 1, visibility: 'visible', position: 'relative' });
      }
      return;
    }

    let ctx = gsap.context(() => {
      // Reset progress bars
      gsap.set(progressRefs.current, { height: '0%' });

      const animateSlide = (index) => {
        const nextIndex = (index + 1) % finalSlides.length;

        // Ensure previous slides are filled
        for (let i = 0; i < index; i++) {
          if (progressRefs.current[i]) {
            gsap.set(progressRefs.current[i], { height: '100%' });
          }
        }

        // Current slide progress
        if (progressRefs.current[index]) {
          gsap.to(progressRefs.current[index], {
            height: '100%',
            duration: slideDuration,
            ease: 'none',
            onComplete: () => {
              if (index === finalSlides.length - 1) {
                // Reset all for the next loop
                gsap.set(progressRefs.current, { height: '0%' });
              }
              gsap.to(slidesRef.current[index], {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: () => setActiveSlide(nextIndex)
              });
            }
          });
        }

        // Fade in current text
        gsap.fromTo(slidesRef.current[index],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      };

      animateSlide(activeSlide);
    });

    return () => ctx.revert();
  }, [activeSlide, isSlider, finalSlides.length]);

  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    let src = video || bgVideo;
    if (src === "/videos/home.webm" || src === "/videos/home.mp4") {
      const is3d = window.location.pathname.toLowerCase().includes('3d') ||
        window.location.pathname.toLowerCase().includes('modeling') ||
        window.location.pathname.toLowerCase().includes('industrial');

      if (is3d) {
        src = "https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/AG0FLYKtoOt3hfVuq2BFJRY/3D.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw";
      } else {
        src = "https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/APr1MwnvxgJidhjKrvVy3t8/2D_01.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw";
      }
    }
    setVideoSrc(src || '');
  }, [video, bgVideo]);

  const isVimeo = videoSrc && (videoSrc.includes('vimeo.com') || videoSrc.includes('youtube.com') || videoSrc.includes('player.vimeo.com'));

  return (
    <section className={styles.bannerSection}>
      <div className={styles.overlay}></div>
      {isVimeo ? (
        <div className={styles.videoWrapper}>
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
      ) : videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgMedia}
        />
      ) : bgImage ? (
        <img src={bgImage} alt="Banner Background" className={styles.bgMedia} />
      ) : null}

      <div className="container position-relative h-100">
        <div className={`row h-100 align-items-center ${centered ? 'justify-content-center' : ''}`}>
          <div className={centered ? "col-lg-10" : "col-lg-11"}>
            <div className={`${styles.contentCol} ${centered ? styles.centered : ''} banner-reveal`}>

              {breadcrumbs && (
                <div className={styles.breadcrumbs}>
                  {breadcrumbs}
                </div>
              )}

              <div className={styles.sliderContainer}>
                {finalSlides.map((slide, index) => (
                  <div
                    key={index}
                    ref={el => slidesRef.current[index] = el}
                    className={`${styles.slide} ${!isSlider || index === activeSlide ? styles.active : ''}`}
                    style={{ position: (!isSlider || index === activeSlide) ? 'relative' : 'absolute' }}
                  >
                    {index === 0 ? (
                      <h1 className={styles.heading}>{slide.title}</h1>
                    ) : (
                      <h2 className={styles.heading}>{slide.title}</h2>
                    )}
                    <p className={`${styles.description} scroll_block`}>
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`${styles.actionRow} ${centered ? 'justify-content-center mt-5' : ''} banner-reveal`}>
                <CTAButton
                  type="popup"
                  text="Get a Quote"
                />
                <CTAButton
                  type="chat"
                  text="Let's Talk"
                  variant="outline"
                />
              </div>

              {showTrustBadges && (
                <div className={`${styles.trustBadges} banner-reveal`}>
                  <Image
                    src="/trust-badges.png"
                    width={536}
                    height={62}
                    alt="Trust Badges"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {(isSlider || showPlayButton) && (
        <div className={styles.progressContainer}>
          {showPlayButton && (
            <div className="mb-5 pb-5">
              <PlayButton text="SHOW REEL" onClick={() => setIsVideoPopupOpen(true)} />
            </div>
          )}

          {isSlider && finalSlides.map((_, index) => (
            <div key={index} className={styles.progressSegment}>
              <div
                ref={el => progressRefs.current[index] = el}
                className={styles.progressFill}
              ></div>
            </div>
          ))}
        </div>
      )}

      {/* Video Popup Modal */}
      {isVideoPopupOpen && (
        <div className={styles.videoPopupModal} onClick={() => setIsVideoPopupOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsVideoPopupOpen(false)}>×</button>
            {isVimeo ? (
              <iframe
                src={videoSrc}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.popupIframe}
              ></iframe>
            ) : (
              <video
                src={videoSrc}
                controls
                autoPlay
                className={styles.popupVideo}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
