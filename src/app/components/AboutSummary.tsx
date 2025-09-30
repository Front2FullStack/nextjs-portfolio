"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface AboutSummaryProps {
  condensed?: boolean; // retain prop for future but unused in simplified layout
}

const paragraph = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i }
  })
};

const AboutSummary: React.FC<AboutSummaryProps> = () => {

  return (
    <div className="space-y-7 max-w-4xl" aria-label="Professional summary">
      <motion.blockquote
        variants={paragraph}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className=" p-4 my-4 text-base sm:text-lg leading-relaxed text-muted-foreground  border-s-4 border-purple-500"
      >
        <p className='mb-2'> <span className="font-semibold text-foreground">Senior Software Engineer (Frontend)</span> with 10+ years building accessible, performant web applications. I focus on translating product intent into resilient interfaces that scale—balancing delivery speed with code quality, user experience, and security.</p>
        <p className='mb-2'>Strengths include design system architecture, Core Web Vitals optimization, WCAG 2.1 accessibility, secure auth & CSP integration, testing strategy (unit → E2E), and cross‑functional collaboration that lifts team maturity.</p>
        <p className='mb-2'>Focused on building scalable, secure frontends that help teams ship fast without sacrificing quality: Next.js + TypeScript with semantic HTML5/CSS3 and a reusable design system; multilingual, RTL‑capable experiences; Core Web Vitals–driven performance (SSR/ISR, code‑splitting, edge caching); Sentry‑based observability and error tracking; and CI/CD, feature flags, and automated tests—aligned with WCAG AA, CSP/OWASP, and privacy‑by‑design best practices, including OAuth 2.0/OIDC SSO.</p>
      </motion.blockquote>

    </div>
  );
};

export default AboutSummary;