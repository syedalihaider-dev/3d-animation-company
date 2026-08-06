"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./TrustedClientsSection.module.css";
import Image from "next/image";

export default function TrustedClientsSection({
  heading,
  text,
  clients,
  variant = "dark"
}) {
  const topRowClients = clients.slice(0, 7);
  const bottomRowClients = clients.slice(7, 14);

  return (
    <section className={`${styles.trustedClientsSection} ${variant === 'light' ? styles.lightVariant : ''}`}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <h2 className={styles.heading}>{heading}</h2>
          </div>
          <div className="col-sm-12 col-md-6">
            <p className={styles.text}>
              {text}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.marqueeWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Top Row - Moves Right to Left */}
        <div className={`${styles.marqueeRow} ${styles.marqueeRowLeft}`}>
          <div className={styles.track}>
            {topRowClients.map((client) => (
              <div key={`top1-${client.id}`} className={styles.clientBox}>
                <Image
                  width={326}
                  height={150}
                  src={client.img}
                  alt={`Client ${client.id}`}
                  className={styles.clientImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.track}>
            {topRowClients.map((client) => (
              <div key={`top2-${client.id}`} className={styles.clientBox}>
                <Image
                  width={326}
                  height={150}
                  src={client.img}
                  alt={`Client ${client.id}`}
                  className={styles.clientImg}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moves Left to Right */}
        <div className={`${styles.marqueeRow} ${styles.marqueeRowRight}`}>
          <div className={styles.track}>
            {bottomRowClients.map((client) => (
              <div key={`bot1-${client.id}`} className={styles.clientBox}>
                <Image
                  width={326}
                  height={150}
                  src={client.img}
                  alt={`Client ${client.id}`}
                  className={styles.clientImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.track}>
            {bottomRowClients.map((client) => (
              <div key={`bot2-${client.id}`} className={styles.clientBox}>
                <Image
                  width={326}
                  height={150}
                  src={client.img}
                  alt={`Client ${client.id}`}
                  className={styles.clientImg}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
