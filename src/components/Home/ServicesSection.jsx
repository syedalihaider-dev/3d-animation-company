"use client";
import { ArrowRight } from 'lucide-react';
import styles from './ServicesSection.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CTAButton from '../Common/CTAButton';
import Image from 'next/image';

const services = [
  {
    id: '2d-animation',
    title: '2D Animation',
    icon: '/icons/2d-animation.png',
    desc: <>Our 2D team works across a wide range of <Link href="/2d-animation-services" style={{ color: '#FC00A0', textDecoration: 'underline' }}>2D Animation Services</Link> visual styles and production approaches, matching the aesthetic to the brand rather than applying a single default look across every client.</>,
    videoUrl: 'https://player.vimeo.com/video/1064482488?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0'
  },
  {
    id: '3d-animation',
    title: '3D Animation',
    icon: '/icons/3d-animation.png',
    desc: <>Our <Link href="/3d-animation-services" style={{ color: '#FC00A0', textDecoration: 'underline' }}>3D Animation Services</Link> pipeline covers modeling, rigging, lighting, and rendering entirely in-house. We produce 3D product animation, architectural visualization, character animation, and cinematic sequences for brands that need visual content at that level of production quality.</>,
    videoUrl: 'https://player.vimeo.com/video/1065200259?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0'
  },
  {
    id: 'ai-animation',
    title: 'AI Animation',
    icon: '/icons/ai-assisted-animations.png',
    desc: <>Our <Link href="/ai-animation" style={{ color: '#FC00A0', textDecoration: 'underline' }}>AI Animation Services</Link> accelerate asset creation, visual iteration, and style exploration without reducing the creative quality of the output. For clients with high-volume needs or tight production windows, AI-assisted production opens options that traditional timelines cannot support.</>,
    videoUrl: 'https://player.vimeo.com/video/1201855839?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'whiteboard',
    title: 'Whiteboard Animation',
    icon: '/icons/whiteboard-animation.png',
    desc: <>Our <Link href="/whiteboard-animation-services" style={{ color: '#FC00A0', textDecoration: 'underline' }}>Whiteboard Animation Services</Link> combine tight scriptwriting, professional voiceover, and clean illustration to produce content that consistently performs for training, education, sales enablement, and compliance-related communication.</>,
    videoUrl: 'https://www.youtube.com/embed/1LgFQvGbFuA?autoplay=1&mute=1&loop=1&playlist=1LgFQvGbFuA&controls=0&showinfo=0&rel=0'
  },
  {
    id: 'legal-animation',
    title: 'Legal Animation',
    icon: '/icons/legal-animation.png',
    desc: <>We produce demonstrative animations, accident reconstruction videos, procedural explainers for litigation support, and <Link href="/legal-graphics-animation" style={{ color: '#FC00A0', textDecoration: 'underline' }}>legal animation</Link> explainer content for public-facing legal education. Accuracy is the starting point in this category, not the goal.</>,
    videoUrl: 'https://player.vimeo.com/video/1200541039?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    icon: '/icons/motion-graphics.png',
    desc: <><Link href="/motion-graphics" style={{ color: '#FC00A0', textDecoration: 'underline' }}>Motion Graphics</Link> cover the space where branding and animation overlap. Our motion design team works in After Effects and Cinema 4D to produce platform-ready motion assets that reinforce brand identity across every digital channel.</>,
    videoUrl: 'https://player.vimeo.com/video/1201856415?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'explainer',
    title: '2D & 3D Explainer Videos',
    icon: '/icons/explainer-videos.png',
    desc: <><Link href="/animated-explainer-video" style={{ color: '#FC00A0', textDecoration: 'underline' }}>Explainer video animation services</Link> remain the single most requested format in our studio for a reason that never changes: they work. A 90-second explainer video built around genuine audience insight can reduce support ticket volume, increase trial sign-up rates, cut onboarding drop-off, and give your sales team a shareable asset.</>,
    videoUrl: 'https://www.youtube.com/embed/yjW4zrkdjbc?autoplay=1&mute=1&loop=1&playlist=yjW4zrkdjbc&controls=0&showinfo=0&rel=0'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    icon: '/icons/video-editing.png',
    desc: <>Raw footage becomes content only through a skilled edit. Our <Link href="/video-editing-services" style={{ color: '#FC00A0', textDecoration: 'underline' }}>video editing</Link> team handles color grading, sound mixing, graphics overlays, b-roll integration, pacing, and platform-specific formatting for footage captured by your team or produced by ours. Every edit is built around the same standard as our original productions.</>,
    videoUrl: 'https://player.vimeo.com/video/1201624677?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'logo-animation',
    title: 'Logo Animation',
    icon: '/icons/logo-animation.png',
    desc: <>A static logo on a video intro signals that no one cared enough to finish the job. An animated logo intro signals the opposite. We produce <Link href="/logo-animation-services" style={{ color: '#FC00A0', textDecoration: 'underline' }}>logo animations</Link> in multiple output formats for use across video, web, presentations, and digital advertising. Short versions for social, longer versions for branded films, and looping versions.</>,
    videoUrl: 'https://player.vimeo.com/video/1201854679?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'infographics',
    title: 'Infographics',
    icon: '/icons/infographics.png',
    desc: 'Animated infographics are how data earns its right to exist in a content strategy. We build animated infographic content for annual reports, investor presentations, social media series, educational platforms, and campaign support material. The goal is always the same: make the data interesting enough that people finish it.',
    videoUrl: 'https://player.vimeo.com/video/1201856159?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'architectural',
    title: 'Architectural Visualization',
    icon: '/icons/architectural-visualization.png',
    desc: 'Unbuilt properties deserve better than static renders. Our 3D architectural visualization service produces walkthrough animations, exterior fly-throughs, and interior visualization content that gives developers, investors, and buyers something genuinely compelling to respond to before ground has been broken.',
    videoUrl: 'https://player.vimeo.com/video/1201624677?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'hybrid-cel',
    title: 'Hybrid & Cel Animation',
    icon: '/icons/hybrid-and-cel-animation.png',
    desc: <><Link href="/hybrid-and-cel-animation" style={{ color: '#FC00A0', textDecoration: 'underline' }}>Hybrid & Cel Animation</Link> aesthetics, brought into a modern production context with the consistency and finish of digital tools. Frame-by-frame character movement, expressive illustration, and a handcrafted visual quality that no fully digital style can replicate. This format works powerfully for brand storytelling, entertainment-adjacent content, and campaigns that need a visual identity distinct from everything else in their category.</>,
    videoUrl: 'https://player.vimeo.com/video/1201625004?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  },
  {
    id: 'cgi-vfx', title: 'CGI & VFX', icon: '/icons/cgi-and-vfx.png', desc: 'Broadcast-quality visual effects and CGI compositing for product commercials, brand films, and entertainment content. Our VFX team handles the integration of CG elements with live footage, environmental and atmospheric effects, title sequences, and product visualization compositing for brands whose content lives in premium placements.', videoUrl: 'https://player.vimeo.com/video/1201624743?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
  }
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
          <p className="subtitle">WHAT WE DO</p>
          <h2 className={styles.title}>Explore the Full Range of Pixel Studio Animation Services</h2>
          <p className={styles.description}>Product demos, explainer videos, character animation, CGI or game animation, our animation services cover everything from 2D to 3D video animation services</p>
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
                  {/* Background Video Loop */}
                  <iframe
                    src={service.videoUrl}
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
                    <p className={`${styles.cardDesc} scroll_block`}>
                      {service.desc}
                    </p>
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
                  className={styles.calender}
                />
                <div className={styles.ctaText}>
                  <p className={styles.ctaSubtitle}>Picking an animation company feels riskier?</p>
                  <h3 className={styles.ctaTitle}>Trusted Animation Company for 2D & 3D Animation Services That Fit Your Brand & Your Goals</h3>
                  <div>
                    <CTAButton
                      type="popup"
                      text="Book a Meeting"
                    />
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
