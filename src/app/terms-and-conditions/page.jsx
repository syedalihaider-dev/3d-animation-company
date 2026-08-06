import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms and Conditions - 3D Animation Company",
  description: "Terms and Conditions for 3D Animation Company. Read the rules and regulations governing the use of our services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.pageWrapper}>
      {/* Mini Banner */}
      <section className={styles.banner}>
        <div className="container">
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Last updated: August 6, 2026. Please read these terms carefully before using our services.
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
                <a href="#acceptance">1. Acceptance of Terms</a>
                <a href="#services">2. Provision of Services</a>
                <a href="#intellectual-property">3. Intellectual Property</a>
                <a href="#user-obligations">4. User Obligations</a>
                <a href="#payments">5. Payments & Invoicing</a>
                <a href="#termination">6. Termination</a>
                <a href="#liability">7. Limitation of Liability</a>
                <a href="#governing-law">8. Governing Law</a>
              </nav>
            </aside>

            {/* Document Content */}
            <article className={styles.article}>
              <section id="acceptance" className={styles.section}>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the services provided by 3D Animation Company ("we," "our," "us"), including browsing our website or contracting us for animation/development production, you agree to be bound by these Terms and Conditions.
                </p>
                <p>
                  If you do not agree to all of the terms and conditions stated on this page, you must not access our website or utilize any of our professional services.
                </p>
              </section>

              <section id="services" className={styles.section}>
                <h2>2. Provision of Services</h2>
                <p>
                  3D Animation Company provides creative video animation (2D, 3D, CGI, Explainer videos) and interactive system development services.
                </p>
                <p>
                  Any project timeline, scope, and deliverables are subject to individual agreements (Service Level Agreements, Statement of Work, or Project proposals) signed by both parties.
                </p>
              </section>

              <section id="intellectual-property" className={styles.section}>
                <h2>3. Intellectual Property</h2>
                <p>
                  Unless otherwise specified in a signed project contract:
                </p>
                <ul>
                  <li>We retain all rights to our pre-existing intellectual property, core codebases, source assets, and internal templates used to construct your deliverables.</li>
                  <li>Upon receipt of full payment, all final custom-rendered video deliverables or interactive assets will be transferred to the client.</li>
                  <li>We reserve the right to display final deliverables, snippets, or screenshots in our public portfolio showcase for promotional purposes.</li>
                </ul>
              </section>

              <section id="user-obligations" className={styles.section}>
                <h2>4. User Obligations</h2>
                <p>
                  You agree to use our website and services only for lawful purposes. You are prohibited from:
                </p>
                <ul>
                  <li>Decompiling, reverse-engineering, or hacking any parts of our interactive services.</li>
                  <li>Using our deliverables in any manner that infringes on trademark, copyright, or local laws.</li>
                  <li>Providing false contact information or pretending to represent another entity.</li>
                </ul>
              </section>

              <section id="payments" className={styles.section}>
                <h2>5. Payments & Invoicing</h2>
                <p>
                  Payment terms are established on a per-project basis. Generally:
                </p>
                <ul>
                  <li>An initial deposit/milestone payment is required before starting production work.</li>
                  <li>Late payments may result in the suspension of production or delay in final files transfer.</li>
                  <li>All payments are non-refundable once milestone sign-offs are completed by the client.</li>
                </ul>
              </section>

              <section id="termination" className={styles.section}>
                <h2>6. Termination</h2>
                <p>
                  Either party may terminate a project agreement in writing subject to the provisions stated in the custom Statement of Work. Upon termination, client agrees to pay for all work completed up to the date of termination.
                </p>
              </section>

              <section id="liability" className={styles.section}>
                <h2>7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, 3D Animation Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </section>

              <section id="governing-law" className={styles.section}>
                <h2>8. Governing Law</h2>
                <p>
                  These Terms shall be governed by and defined in accordance with the laws of the state of Texas, USA. You consent that the courts of Austin, Texas shall have exclusive jurisdiction to resolve any dispute which may arise under these terms.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
