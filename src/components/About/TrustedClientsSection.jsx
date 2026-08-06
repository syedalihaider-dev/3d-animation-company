"use client";
import React from "react";
import GlobalTrustedClientsSection from "../Common/TrustedClientsSection";

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

export default function TrustedClientsSection() {
  return (
    <GlobalTrustedClientsSection
      heading="Our Clients"
      text="We have generated an average 150% ROI for all our clients spread across various industries"
      clients={allClients}
      variant="light"
    />
  );
}
