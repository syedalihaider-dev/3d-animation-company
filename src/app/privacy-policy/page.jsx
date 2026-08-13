import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy - 3D Animation Company",
  description: "Privacy Policy for 3D Animation Company. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.pixelstudiosinc.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.pageWrapper}>
      {/* Mini Banner */}
      <section className={styles.banner}>
        <div className="container">
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Last updated: August 6, 2026. Your privacy and trust are paramount to us.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar Sticky Navigation */}
            <aside className={styles.sidebar}>
              <nav className={styles.nav}>
                <a href="#introduction">1. Introduction</a>
                <a href="#information-collection">2. Information Collection</a>
                <a href="#use-of-information">3. Use of Information</a>
                <a href="#cookies">4. Cookies & Trackers</a>
                <a href="#data-protection">5. Data Protection</a>
                <a href="#sharing">6. Sharing & Disclosing</a>
                <a href="#your-rights">7. Your Privacy Rights</a>
                <a href="#contact">8. Contact Us</a>
              </nav>
            </aside>

            {/* Document Content */}
            <article className={styles.article}>
              <section id="introduction" className={styles.section}>
                <h2>1. Introduction</h2>
                <p>
                  Welcome to 3D Animation Company ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal info.
                </p>
                <p>
                  When you visit our website and use our services (including 2D/3D animation production, game development, and interactive design services), you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we describe our privacy practices.
                </p>
              </section>

              <section id="information-collection" className={styles.section}>
                <h2>2. Information Collection</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.
                </p>
                <ul>
                  <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and project specifications.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, access times, and referring websites.</li>
                </ul>
              </section>

              <section id="use-of-information" className={styles.section}>
                <h2>3. Use of Information</h2>
                <p>
                  We use personal information collected via our website for a variety of business purposes described below:
                </p>
                <ul>
                  <li>To facilitate project discussions, client onboarding, and service delivery.</li>
                  <li>To send you marketing and promotional communications (you can opt out at any time).</li>
                  <li>To respond to user inquiries, offer customer support, and request feedback.</li>
                  <li>To enforce our terms, conditions, and policies for business purposes.</li>
                </ul>
              </section>

              <section id="cookies" className={styles.section}>
                <h2>4. Cookies & Trackers</h2>
                <p>
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific details about how we use such technologies and how you can refuse certain cookies are set out in our Cookie Policy. Most web browsers are set to accept cookies by default.
                </p>
              </section>

              <section id="data-protection" className={styles.section}>
                <h2>5. Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
                </p>
              </section>

              <section id="sharing" className={styles.section}>
                <h2>6. Sharing & Disclosing</h2>
                <p>
                  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or rent your personal information to third parties.
                </p>
              </section>

              <section id="your-rights" className={styles.section}>
                <h2>7. Your Privacy Rights</h2>
                <p>
                  Depending on your location (e.g. EU/EEA, UK, California, or Texas), you may have certain rights under applicable data protection laws. These may include the right:
                </p>
                <ul>
                  <li>To request access and obtain a copy of your personal information.</li>
                  <li>To request rectification or erasure of your personal data.</li>
                  <li>To restrict the processing of your personal information.</li>
                  <li>To data portability (under GDPR/CCPA regulations).</li>
                </ul>
              </section>

              <section id="contact" className={styles.section}>
                <h2>8. Contact Us</h2>
                <p>
                  If you have questions or comments about this policy, you may email us at contact us via our <Link href="/contact-us">Contact Us</Link> page.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
