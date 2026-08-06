"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./TrustedClientsSection.module.css";
import Image from "next/image";

const allClients = [
  { id: 1, img: "/trusted-clients/01.png" },
  { id: 2, img: "/trusted-clients/02.png" },
  { id: 3, img: "/trusted-clients/03.png" },
  { id: 4, img: "/trusted-clients/04.png" },
  { id: 5, img: "/trusted-clients/05.png" },
  { id: 6, img: "/trusted-clients/06.png" },
  { id: 7, img: "/trusted-clients/07.png" },
  { id: 8, img: "/trusted-clients/08.png" },
  { id: 9, img: "/trusted-clients/09.png" },
  { id: 10, img: "/trusted-clients/10.png" },
  { id: 11, img: "/trusted-clients/11.png" },
  { id: 12, img: "/trusted-clients/12.png" },
  { id: 13, img: "/trusted-clients/13.png" },
  { id: 14, img: "/trusted-clients/14.png" }
];

const topRowClients = allClients.slice(0, 7);
const bottomRowClients = allClients.slice(7, 14);

export default function TrustedClientsSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>CLIENTS</h2>
        <p className={styles.text}>
          Our animation services have earned the trust of leading global brands, delivering impactful results that drive success worldwide.
        </p>
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
