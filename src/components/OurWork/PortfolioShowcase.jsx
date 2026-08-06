"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";
import { PlayCircle, X } from "lucide-react";
import CTAButton from "@/components/Common/CTAButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import styles from "./PortfolioShowcase.module.css";

// Helper function to extract video type, ID, embed URL, and default thumbnail
const getVideoDetails = (url) => {
  if (!url) return { type: "unknown", id: null, embedUrl: "", thumbnail: "" };

  // Extract YouTube ID
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    const videoId = youtubeMatch[1];
    return {
      type: "youtube",
      id: videoId,
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }

  // Extract Vimeo ID
  const vimeoRegex = /(?:vimeo\.com\/)(?:channels\/[^\/]+\/|groups\/[^\/]+\/album\/[^\/]+\/video\/|showcase\/[^\/]+\/video\/|video\/|)?([0-9]+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    return {
      type: "vimeo",
      id: videoId,
      embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1&color=CB09A4&title=0&byline=0&portrait=0`,
      thumbnail: `https://vumbnail.com/${videoId}.jpg`,
    };
  }

  return {
    type: "unknown",
    id: null,
    embedUrl: url,
    thumbnail: "",
  };
};

const rawItems = [
  // 2D Animation
  { category: "2D Animation", url: "https://vimeo.com/1064477095" },
  { category: "2D Animation", url: "https://vimeo.com/1064478576" },
  { category: "2D Animation", url: "https://vimeo.com/1064479419" },
  { category: "2D Animation", url: "https://vimeo.com/1064480349" },
  { category: "2D Animation", url: "https://vimeo.com/1064480723" },
  { category: "2D Animation", url: "https://vimeo.com/1064481379" },
  { category: "2D Animation", url: "https://vimeo.com/1064481971" },
  { category: "2D Animation", url: "https://vimeo.com/1064482488" },

  // 3D Animation
  { category: "3D Animation", url: "https://vimeo.com/1065180132" },
  { category: "3D Animation", url: "https://vimeo.com/1065180201" },
  { category: "3D Animation", url: "https://vimeo.com/1065182500" },
  { category: "3D Animation", url: "https://vimeo.com/1065182530" },
  { category: "3D Animation", url: "https://vimeo.com/1065199168" },
  { category: "3D Animation", url: "https://vimeo.com/1065200259" },
  { category: "3D Animation", url: "https://vimeo.com/1065201577" },
  { category: "3D Animation", url: "https://vimeo.com/1065203124" },

  // Explainer Videos
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=20Jxj_odOAQ&list=PLWDgB8DFY0n260WL7XMAwgY9HUyUNx2G3" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=jjwkuSa41nE&list=PLWDgB8DFY0n2xNfIwoVxTFx16wbvYVD0E&index=4" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=ls0oGJVfzJU&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=5szUbNTIz5s" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=P4TM0OWx5ck&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk&index=3" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=cJ4hsEUkPZc&list=PLWDgB8DFY0n2xNfIwoVxTFx16wbvYVD0E&index=3" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=qgAqkZpQZsI&list=PLWDgB8DFY0n2ln7V79rOj-40moXbfI9d8&index=5" },
  { category: "Explainer Videos", url: "https://www.youtube.com/watch?v=ssN-_eJnyyU&list=PLWDgB8DFY0n2ln7V79rOj-40moXbfI9d8&index=3" },

  // Whiteboard Animation
  { category: "Whiteboard Animation", url: "https://www.youtube.com/watch?v=EmsrnGZTaIs&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=5" },
  { category: "Whiteboard Animation", url: "https://www.youtube.com/watch?v=JV2jgr8_ShQ&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=4" },
  { category: "Whiteboard Animation", url: "https://www.youtube.com/watch?v=vL6MoKAR8sA&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=3" },
  { category: "Whiteboard Animation", url: "https://www.youtube.com/watch?v=RrxIvvc6ZMU&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=2" },

  // Logo Animation
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=VBwVjrOpVhU&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=10" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=1aTAaT5uon8&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=9" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=XMdOAjd5Cs4&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=7" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=JOzwixCqijw&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=6" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=qrSMlHq-CBQ&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=5" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=hoocbrWSK28&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=4" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=RO_5B1KTHZc&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=3" },
  { category: "Logo Animation", url: "https://www.youtube.com/watch?v=yluKWMu-Juk&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=2" },
  { category: "Logo Animation", url: "https://vimeo.com/1201854679?fl=tl&fe=ec" },
  { category: "Logo Animation", url: "https://vimeo.com/1201854809?fl=tl&fe=ec" },
  { category: "Logo Animation", url: "https://vimeo.com/1201854680?fl=tl&fe=ec" },
  { category: "Logo Animation", url: "https://vimeo.com/1200540925?fl=tl&fe=ec" },

  // BioTech Animation
  { category: "BioTech Animation", url: "https://vimeo.com/1201854905?share=copy&fl=sv&fe=ci" },
  { category: "BioTech Animation", url: "https://vimeo.com/1200541021?fl=tl&fe=ec" },
  { category: "BioTech Animation", url: "https://vimeo.com/1200541001?fl=tl&fe=ec" },
  { category: "BioTech Animation", url: "https://vimeo.com/1200541026?fl=tl&fe=ec" },
  { category: "BioTech Animation", url: "https://vimeo.com/1200541012?fl=tl&fe=ec" },
  { category: "BioTech Animation", url: "https://vimeo.com/1201624787?share=copy&fl=sv&fe=ci" },

  // Ecommerce Video Production
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201854808?fl=tl&fe=ec" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201624679?share=copy&fl=sv&fe=ci" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201624681?share=copy&fl=sv&fe=ci" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201624709?share=copy&fl=sv&fe=ci" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201624712?share=copy&fl=sv&fe=ci" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201624713?share=copy&fl=sv&fe=ci" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201625001?fl=tl&fe=ec" },
  { category: "Ecommerce Video Production", url: "https://vimeo.com/1201624785?share=copy&fl=sv&fe=ci" },

  // Game Design/Trailer
  { category: "Game Design/Trailer", url: "https://vimeo.com/1201624743?share=copy&fl=sv&fe=ci" },
  { category: "Game Design/Trailer", url: "https://vimeo.com/1200540925?fl=tl&fe=ec" },
  { category: "Game Design/Trailer", url: "https://vimeo.com/1200540933?fl=tl&fe=ec" },
  { category: "Game Design/Trailer", url: "https://vimeo.com/1200540905?fl=tl&fe=ec" },

  // Logistics Animation
  { category: "Logistics Animation", url: "https://vimeo.com/1201855454?fl=tl&fe=ec" },
  { category: "Logistics Animation", url: "https://vimeo.com/1201624747?share=copy&fl=sv&fe=ci" },

  // Real Estate Animation
  { category: "Real Estate Animation", url: "https://vimeo.com/1201856349?fl=tl&fe=ec" },
  { category: "Real Estate Animation", url: "https://vimeo.com/1201855162?fl=tl&fe=ec" },
  { category: "Real Estate Animation", url: "https://vimeo.com/1201855331?fl=tl&fe=ec" },

  // Saas Explainer Videos
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201856159?share=copy&fl=sv&fe=ci" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201856349?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201856422?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201856130?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201856161?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201855442?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201855692?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201854810?fl=tl&fe=ec" },
  { category: "Saas Explainer Videos", url: "https://vimeo.com/1201624901?share=copy&fl=sv&fe=ci" },

  // Insurance Animation
  { category: "Insurance Animation", url: "https://vimeo.com/1201855817?fl=tl&fe=ec" },

  // Fintech Animation Services
  { category: "Fintech Animation Services", url: "https://vimeo.com/1201856161?fl=tl&fe=ec" },
  { category: "Fintech Animation Services", url: "https://vimeo.com/1201856158?fl=tl&fe=ec" },
  { category: "Fintech Animation Services", url: "https://vimeo.com/1201855442?fl=tl&fe=ec" },

  // Advertising
  { category: "Advertising", url: "https://vimeo.com/1201856415?share=copy&fl=sv&fe=ci" },
  { category: "Advertising", url: "https://vimeo.com/1201856349?fl=tl&fe=ec" },
  { category: "Advertising", url: "https://vimeo.com/1201856422?fl=tl&fe=ec" },
  { category: "Advertising", url: "https://vimeo.com/1201856130?fl=tl&fe=ec" },
  { category: "Advertising", url: "https://vimeo.com/1201856352?fl=tl&fe=ec" },
  { category: "Advertising", url: "https://vimeo.com/1201856161?fl=tl&fe=ec" },
  { category: "Advertising", url: "https://vimeo.com/1201624680?share=copy&fl=sv&fe=ci" },
  { category: "Advertising", url: "https://vimeo.com/1201855442?fl=tl&fe=ec" },
  { category: "Advertising", url: "https://vimeo.com/1201624679?share=copy&fl=sv&fe=ci" },

  // Architecture
  { category: "Architecture", url: "https://vimeo.com/1201624677?share=copy&fl=sv&fe=ci" },

  // Automotive
  { category: "Automotive", url: "https://vimeo.com/1201624708?share=copy&fl=sv&fe=ci" },
  { category: "Automotive", url: "https://vimeo.com/1201624745?share=copy&fl=sv&fe=ci" },
  { category: "Automotive", url: "https://vimeo.com/1201624677?fl=tl&fe=ec" },

  // Education
  { category: "Education", url: "https://vimeo.com/1201855454?fl=tl&fe=ec" },
  { category: "Education", url: "https://vimeo.com/1201855044?fl=tl&fe=ec" },

  // Enterprise
  { category: "Enterprise", url: "https://vimeo.com/1201856159?share=copy&fl=sv&fe=ci" },
  { category: "Enterprise", url: "https://vimeo.com/1201856349?fl=tl&fe=ec" },
  { category: "Enterprise", url: "https://vimeo.com/1201856130?fl=tl&fe=ec" },
  { category: "Enterprise", url: "https://vimeo.com/1201856158?fl=tl&fe=ec" },
  { category: "Enterprise", url: "https://vimeo.com/1201855692?fl=tl&fe=ec" },
  { category: "Enterprise", url: "https://vimeo.com/1201854810?fl=tl&fe=ec" },

  // Entertainment
  { category: "Entertainment", url: "https://vimeo.com/1201855454?fl=tl&fe=ec" },

  // Finance
  { category: "Finance", url: "https://vimeo.com/1201855045?fl=tl&fe=ec" },

  // Gaming
  { category: "Gaming", url: "https://vimeo.com/1201855839?share=copy&fl=sv&fe=ci" },
  { category: "Gaming", url: "https://vimeo.com/1201855839?fl=tl&fe=ec" },

  // Healthcare
  { category: "Healthcare", url: "https://vimeo.com/1201854905?share=copy&fl=sv&fe=ci" },
  { category: "Healthcare", url: "https://vimeo.com/1201855817?fl=tl&fe=ec" },
  { category: "Healthcare", url: "https://vimeo.com/1201854911?fl=tl&fe=ec" },
  { category: "Healthcare", url: "https://vimeo.com/1201854908?fl=tl&fe=ec" },

  // Manufacturing
  { category: "Manufacturing", url: "https://vimeo.com/1201624747?share=copy&fl=sv&fe=ci" },

  // Medical
  { category: "Medical", url: "https://vimeo.com/1201854905?share=copy&fl=sv&fe=ci" },
  { category: "Medical", url: "https://vimeo.com/1201854911?fl=tl&fe=ec" },
  { category: "Medical", url: "https://vimeo.com/1201854908?fl=tl&fe=ec" },

  // Non-Profits
  { category: "Non-Profits", url: "https://vimeo.com/1201854905?share=copy&fl=sv&fe=ci" },
  { category: "Non-Profits", url: "https://vimeo.com/1201856422?fl=tl&fe=ec" },

  // Real Estate
  { category: "Real Estate", url: "https://vimeo.com/1201856349?fl=tl&fe=ec" },
  { category: "Real Estate", url: "https://vimeo.com/1201855165?fl=tl&fe=ec" },
  { category: "Real Estate", url: "https://vimeo.com/1201855288?fl=tl&fe=ec" },
  { category: "Real Estate", url: "https://vimeo.com/1201855331?fl=tl&fe=ec" },
  { category: "Real Estate", url: "https://vimeo.com/1201854810?fl=tl&fe=ec" },

  // Technology
  { category: "Technology", url: "https://vimeo.com/1201856159?share=copy&fl=sv&fe=ci" },
  { category: "Technology", url: "https://vimeo.com/1201856254?fl=tl&fe=ec" },
  { category: "Technology", url: "https://vimeo.com/1201624713?share=copy&fl=sv&fe=ci" },
  { category: "Technology", url: "https://vimeo.com/1201624745?share=copy&fl=sv&fe=ci" },
  { category: "Technology", url: "https://vimeo.com/1201624746?share=copy&fl=sv&fe=ci" },
  { category: "Technology", url: "https://vimeo.com/1201624787?share=copy&fl=sv&fe=ci" },

  // Explainer Video Production
  { category: "Explainer Video Production", url: "https://vimeo.com/1201856415?share=copy&fl=sv&fe=ci" },
  { category: "Explainer Video Production", url: "https://vimeo.com/1201854808?fl=tl&fe=ec" },
  { category: "Explainer Video Production", url: "https://vimeo.com/1201856130?fl=tl&fe=ec" },
  { category: "Explainer Video Production", url: "https://vimeo.com/1201854810?fl=tl&fe=ec" },
  { category: "Explainer Video Production", url: "https://vimeo.com/1201625001?share=copy&fl=sv&fe=ci" },
  { category: "Explainer Video Production", url: "https://vimeo.com/1201625002?share=copy&fl=sv&fe=ci" },
  { category: "Explainer Video Production", url: "https://vimeo.com/1201854681?share=copy&fl=sv&fe=ci" },

  // Motion Graphics Services
  { category: "Motion Graphics Services", url: "https://vimeo.com/1201856415?share=copy&fl=sv&fe=ci" },
  { category: "Motion Graphics Services", url: "https://vimeo.com/1201856158?fl=tl&fe=ec" },
  { category: "Motion Graphics Services", url: "https://vimeo.com/1201854810?fl=tl&fe=ec" },

  // Social Media Animation
  { category: "Social Media Animation", url: "https://vimeo.com/1201856415?share=copy&fl=sv&fe=ci" },
  { category: "Social Media Animation", url: "https://vimeo.com/1201624785?share=copy&fl=sv&fe=ci" },

  // Animated Commercials
  { category: "Animated Commercials", url: "https://vimeo.com/1201854905?share=copy&fl=sv&fe=ci" },
  { category: "Animated Commercials", url: "https://vimeo.com/1201624785?fl=tl&fe=ec" },
  { category: "Animated Commercials", url: "https://vimeo.com/1201624848?fl=tl&fe=ec" },
  { category: "Animated Commercials", url: "https://vimeo.com/1201624746?share=copy&fl=sv&fe=ci" },
  { category: "Animated Commercials", url: "https://vimeo.com/1201624785?share=copy&fl=sv&fe=ci" },
  { category: "Animated Commercials", url: "https://vimeo.com/1201624786?share=copy&fl=sv&fe=ci" },

  // Cartoon Animation
  { category: "Cartoon Animation", url: "https://vimeo.com/1201855043?fl=tl&fe=ec" },
  { category: "Cartoon Animation", url: "https://vimeo.com/1201625003?share=copy&fl=sv&fe=ci" },

  // Cel Animation
  { category: "Cel Animation", url: "https://vimeo.com/1201625004?share=copy&fl=sv&fe=ci" },

  // 3D Product Animation
  { category: "3D Product Animation", url: "https://vimeo.com/1201624679?share=copy&fl=sv&fe=ci" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624680?share=copy&fl=sv&fe=ci" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624681?share=copy&fl=sv&fe=ci" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624709?share=copy&fl=sv&fe=ci" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624712?share=copy&fl=sv&fe=ci" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624713?share=copy&fl=sv&fe=ci" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624681?fl=tl&fe=ec" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624713?fl=tl&fe=ec" },
  { category: "3D Product Animation", url: "https://vimeo.com/1201624787?share=copy&fl=sv&fe=ci" },

  // 3D Product Modeling
  { category: "3D Product Modeling", url: "https://vimeo.com/1201624849?fl=tl&fe=ec" },
  { category: "3D Product Modeling", url: "https://vimeo.com/1201624850?fl=tl&fe=ec" },
  { category: "3D Product Modeling", url: "https://vimeo.com/1201624713?fl=tl&fe=ec" },
  { category: "3D Product Modeling", url: "https://vimeo.com/1201624712?fl=tl&fe=ec" },
  { category: "3D Product Modeling", url: "https://vimeo.com/1201624708?fl=tl&fe=ec" },

  // Character Animation
  { category: "Character Animation", url: "https://vimeo.com/1201855045?fl=tl&fe=ec" },
  { category: "Character Animation", url: "https://vimeo.com/1201855044?fl=tl&fe=ec" },
  { category: "Character Animation", url: "https://vimeo.com/1201855043?fl=tl&fe=ec" },
  { category: "Character Animation", url: "https://vimeo.com/1201624743?share=copy&fl=sv&fe=ci" },
  { category: "Character Animation", url: "https://vimeo.com/1201624784?fl=tl&fe=ec" },
  { category: "Character Animation", url: "https://vimeo.com/1201624784?share=copy&fl=sv&fe=ci" },

  // 3D Environment Design
  { category: "3D Environment Design", url: "https://vimeo.com/1201624849?fl=tl&fe=ec" },
  { category: "3D Environment Design", url: "https://vimeo.com/1201624743?share=copy&fl=sv&fe=ci" },
  { category: "3D Environment Design", url: "https://vimeo.com/1201624787?fl=tl&fe=ec" },
  { category: "3D Environment Design", url: "https://vimeo.com/1201624745?fl=tl&fe=ec" },
  { category: "3D Environment Design", url: "https://vimeo.com/1201624745?fl=tl&fe=ec" },

  // Industrial Animation
  { category: "Industrial Animation", url: "https://vimeo.com/1200540842?fl=tl&fe=ec" },
  { category: "Industrial Animation", url: "https://vimeo.com/1201624747?share=copy&fl=sv&fe=ci" },

  // Technical Animation
  { category: "Technical Animation", url: "https://vimeo.com/1201624745?share=copy&fl=sv&fe=ci" },
  { category: "Technical Animation", url: "https://vimeo.com/1201624746?share=copy&fl=sv&fe=ci" },
  { category: "Technical Animation", url: "https://vimeo.com/1201624747?share=copy&fl=sv&fe=ci" },

  // Manufacturing Animation
  { category: "Manufacturing Animation", url: "https://vimeo.com/1201624787?fl=tl&fe=ec" },
  { category: "Manufacturing Animation", url: "https://vimeo.com/1201624746?share=copy&fl=sv&fe=ci" },

  // Medical Animation
  { category: "Medical Animation", url: "https://vimeo.com/1200541039?share=copy&fl=sv&fe=ci" },
];

const portfolioItems = rawItems.map((item, idx) => ({
  id: idx + 1,
  category: item.category,
  videoUrl: item.url,
  title: `${item.category} Video ${idx + 1}`
}));

const tabs = ["VIEW ALL", ...Array.from(new Set(portfolioItems.map(item => item.category)))];

const ITEMS_PER_PAGE = 6;

// Custom Card Component to fetch Vimeo thumbnails dynamically
function PortfolioCard({ item, onClick }) {
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const details = getVideoDetails(item.videoUrl);
    if (details.type === "youtube") {
      setThumbnail(details.thumbnail);
    } else if (details.type === "vimeo") {
      // Set the instant vumbnail image fallback immediately
      setThumbnail(details.thumbnail);
      // Fetch dynamic high quality thumbnail from Vimeo API
      fetch(`https://vimeo.com/api/v2/video/${details.id}.json`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data[0] && data[0].thumbnail_large) {
            setThumbnail(data[0].thumbnail_large);
          }
        })
        .catch(() => {
          // Fallback is already set
        });
    }
  }, [item.videoUrl]);

  return (
    <div className={styles.cardWrapper} onClick={onClick}>
      {thumbnail && (
        <img
          src={thumbnail}
          alt={item.title}
          className={styles.videoPreview}
          loading="lazy"
        />
      )}
      <div className={styles.cardOverlay}>
        <motion.div
          className={styles.playBtn}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(203, 9, 164, 0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          <PlayCircle size={32} />
        </motion.div>
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("VIEW ALL");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeTab === "VIEW ALL") return portfolioItems;
    return portfolioItems.filter(item => item.category === activeTab);
  }, [activeTab]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMoreItems = visibleCount < filteredItems.length;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const openPopup = (item) => {
    setCurrentVideo(item);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setCurrentVideo(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    if (isPopupOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPopupOpen]);

  const videoDetails = useMemo(() => {
    if (!currentVideo) return null;
    return getVideoDetails(currentVideo.videoUrl);
  }, [currentVideo]);

  return (
    <section className={styles.portfolioShowcase}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR LATEST PROJECTS
        </motion.h2>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.tabsContainer}
        >
          <button
            className={`${styles.swiperNavButton} ${styles.swiperPrev} swiper-button-prev-custom`}
            disabled={isBeginning}
          >
            <Image src="/icons/slider-arrow.png" alt="Prev" width={10} height={15} />
          </button>

          <Swiper
            modules={[Navigation, FreeMode]}
            slidesPerView="auto"
            spaceBetween={15}
            freeMode={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className={styles.swiperWrapper}
          >
            {tabs.map((tab, index) => {
              const currentPill = hoveredTab || activeTab;
              const hasPill = currentPill === tab;

              return (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <motion.button
                    onClick={() => handleTabChange(tab)}
                    onMouseEnter={() => setHoveredTab(tab)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`${styles.tab} ${hasPill ? styles.activeText : ""}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {hasPill && (
                      <motion.div
                        layoutId="activeTabBackground"
                        className={styles.activePill}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={styles.tabText}>{tab}</span>
                    <Image
                      src="/button-arrow.png"
                      alt="Icon"
                      width={24}
                      height={24}
                      className={`${styles.tabIcon} ${hasPill ? styles.activeTabIcon : ""}`}
                    />
                  </motion.button>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            className={`${styles.swiperNavButton} ${styles.swiperNext} swiper-button-next-custom`}
            disabled={isEnd}
          >
            <Image src="/icons/slider-arrow.png" alt="Next" width={10} height={15} />
          </button>
        </motion.div>

        {/* Grid Section */}
        <motion.div layout className={`row ${styles.grid}`}>
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.8 }}
                className="col-12 col-md-6 col-xl-4"
              >
                <PortfolioCard item={item} onClick={() => openPopup(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <AnimatePresence>
          {hasMoreItems && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className={styles.loadMoreWrapper}
            >
              <CTAButton
                type="button"
                text="Load More"
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Popup Section */}
      <AnimatePresence>
        {isPopupOpen && videoDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.popupOverlay}
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={styles.popupContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closePopup}>
                <X size={24} />
              </button>
              <iframe
                src={videoDetails.embedUrl}
                className={styles.popupIframe}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Portfolio Video"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
