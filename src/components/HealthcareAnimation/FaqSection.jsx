"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What's the Difference Between General Healthcare Animation and 3D Surgical Animation?",
    answer:
      "General healthcare animation covers a broad range of patient and provider content, while 3D surgical animation specifically visualizes a procedure in detailed, step-by-step anatomical accuracy, often used for clinical training or informed consent support.",
  },
  {
    question: "How Much Do Medical Animation Services Typically Cost?",
    answer:
      "Cost depends on anatomical complexity, animation length, and the level of medical review required. Most healthcare animation projects are scoped after an initial discovery call.",
  },
  {
    question: "How Is Medical and Anatomical Accuracy Verified During Production?",
    answer:
      "We build clinical review checkpoints into the production process at script, storyboard, and animation stages, so your medical team or a qualified reviewer confirms accuracy before the project moves forward at each step.",
  },
  {
    question: "What Information Do I Need to Provide to Start a Healthcare Animation Project?",
    answer:
      "Clinical reference materials, medical imaging or CAD data where relevant, and a clear sense of your target audience all help us scope an accurate project from the first discovery call.",
  },
  {
    question: "Should I Choose 2D or 3D Animation for My Healthcare Project?",
    answer:
      "3D tends to work best for anatomy and procedures where depth and spatial relationships matter, while 2D can work well for simpler conceptual explanations of a condition or process.",
  },
  {
    question: "How Are Healthcare Animations Used in Patient Consent and Education?",
    answer:
      "Animation can support informed consent conversations by giving patients a clearer visual understanding of a procedure before signing, though it typically supplements rather than replaces the formal consent discussion with a clinician.",
  },
  {
    question: "Do You Work Directly With Our Medical Reviewers During Production?",
    answer:
      "Yes. Clinical review is built into the process at script, storyboard, and animation stages, so your medical team confirms accuracy continuously rather than at one final sign-off.",
  },
  {
    question: "Can Healthcare Animation Be Used for Both Patients and Sales Teams From the Same Project?",
    answer:
      "Often, yes. We can produce a patient-facing version and a more technical sales or clinical version from the same underlying 3D assets, adjusting language and depth for each audience.",
  },
  {
    question: "Do You Provide Multilingual Voiceover for Patient Education Content?",
    answer:
      "Yes. Multilingual voiceover and subtitles are common for patient education materials, particularly for healthcare organizations serving diverse patient populations.",
  },
  {
    question: "Can Healthcare Animation Support Both Regulatory Submissions and Marketing Use?",
    answer:
      "Yes, though the two typically require different levels of detail and different review processes. We can scope both from the same underlying clinical content where appropriate.",
  },
  {
    question: "Do You Work With Medical Device Companies on Product Launch Timelines?",
    answer:
      "Yes. We regularly coordinate healthcare animation production around product launch and conference timelines, which often means working with confidential device data ahead of a public release.",
  },
  {
    question: "Can You Build Animation From Medical Imaging or Scan Data Directly?",
    answer:
      "Yes, where available, medical imaging or scan data can inform the accuracy of an animation, particularly for patient-specific or highly technical anatomical visualization.",
  },
  {
    question: "Do You Provide Both Short Patient-Facing Clips and Longer Clinical Training Videos?",
    answer:
      "Yes. We commonly produce a short, accessible patient version alongside a longer, more technical clinical training version from the same core research and review process.",
  },
  {
    question: "Can Healthcare Animation Be Reviewed by an Independent Medical Advisory Board?",
    answer:
      "Yes. If your organization requires sign-off from an independent medical advisory board, we can accommodate that as an additional review stage in the production timeline.",
  },
  {
    question: "Do You Produce Healthcare Animation for Conference and Trade Show Presentations?",
    answer:
      "Yes. Conference-ready animation is a common deliverable, often produced alongside a longer-form version of the same content for website or sales use.",
  },
  {
    question: "Can You Work With Both Pharmaceutical Companies and Medical Device Manufacturers?",
    answer:
      "Yes. We work across pharma, medical device, and provider organizations, adjusting our review process to match each sector's specific regulatory and accuracy requirements.",
  },
  {
    question: "Do You Provide Animation Support for Clinical Trial Recruitment Materials?",
    answer:
      "Yes. Clear, accurate animation explaining a trial's purpose and process can help potential participants understand what enrollment actually involves, supporting broader recruitment education efforts.",
  },
  {
    question: "Can Healthcare Animation Be Adapted for Different Specialties Within One Health System?",
    answer:
      "Yes. Once a base visual style and review process are established, adapting content for different specialties or departments within the same health system is typically faster than starting from scratch.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions"
      faqs={faqs}
    />
  );
}