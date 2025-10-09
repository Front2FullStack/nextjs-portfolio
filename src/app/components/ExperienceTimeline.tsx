"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Globe2, ShieldCheck, Rocket, Workflow } from 'lucide-react';

interface ExperienceItem {
  company: string;
  companyLink?: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'M2.COM',
    companyLink: 'https://www.m2.com/',
    role: 'Senior Front‑End Web Engineer',
    location: 'Dubai, UAE',
    period: '2023–Present',
    bullets: [
      'Lead Portals platform UI development with React + Next.js (App Router & Server Components).',
    'Rest API integration with microservices architectures written in Java Spring Boot from backend teams',
       'Driving adoption of TypeScript, testing (Jest, RTL, Cypress), and CI/CD best practices across teams.',
      'Built reusable design system + Storybook accelerating multi-team delivery consistency.',
      'Delivered bilingual Arabic/English UX with full RTL, semantic HTML, WCAG 2.1 AA.',
      'Optimized performance: SSR/ISR, code-splitting, image optimization, edge caching, Core Web Vitals tracking.',
      'Implemented secure auth (OAuth2/OIDC, httpOnly+SameSite cookies, RBAC via middleware) & CSP/HSTS headers.',
      'Production observability: Sentry + Datadog instrumentation, CI gates (tests, lint, types).',
      'Cross-functional feature delivery + mentoring & structured code review culture.',
      'Regional focus: AED currency/time formats, Arabic SEO/schema, low-latency CDN PoPs, optional Web3 wallet flows.',
      'Exposure to Flutter App to provide webview support and ensure seamless integration with web components.',
      'Notabene(Web3 sdk) integration for  crypto wallet/withdraw and travel rules compliance'
    ],
    tech: 'React, Next.js, TypeScript, HTML5, CSS3, Tailwind, Storybook, Jest, RTL, Cypress, Vercel, Cloudflare, Sentry, Datadog, OAuth/OIDC, CSP, Web3, Crypto Wallet'
  },
  {
    company: 'Jumia Group',
    companyLink: 'https://group.jumia.com/',
    role: 'Full‑Stack UI/UX Developer',
    location: 'Dubai, UAE',
    period: '2018–2023',
    bullets: [
      'Developed reusable UI modules in React & Vue aligned to a shared design system; advanced TypeScript adoption.',
      'Translated Figma flows into pixel-perfect, responsive, accessible interfaces (WCAG).',
      'TDD (Jest + RTL), contributed CI quality gates & automation.',
      'Collaborated on REST API integration & microservices integration patterns.',
      'Improved SEO & performance using SSR, code-splitting, caching & Core Web Vitals monitoring.',
      'Strengthened security with CSP, sanitization/escaping, CSRF protections & OAuth/OIDC SSO.',
      'Supported regional i18n (Arabic/English), locale formatting & mobile-first optimizations.',
      'Contributed to migrate native apps to React Native for unified codebase and faster feature delivery.',
      'Achieved 20-30% faster load times and 15% higher user engagement through migrating legacy jQuery code to Nuxt SSR framework'
    ],
    tech: 'React, Vue, TypeScript, HTML5, CSS3, Jest, RTL, Cypress, Node.js, REST, Webpack/Vite, i18n/RTL, SEO/SSR, CSP'
  },
  {
    company: 'GrowByData',
    companyLink: 'https://growbydata.com/',
    role: 'Front‑End UI/UX Developer',
    location: 'Kathmandu, Nepal',
    period: '2015–2017',
    bullets: [
      'Created wireframes & prototypes then delivered semantic, responsive UIs (HTML5, CSS3 Flexbox, jQuery, React, AngularJS).',
      'Built UI components for different squads using AngularJS & React.',
      'Researched front-end performance & accessibility foundations informing future design-system work.',
      'Collaborated with backend squad (PHP/.NET) on early RESTful integration patterns.'
    ],
    tech: 'HTML5, CSS3, jQuery, AngularJS, React, Git, Agile, Basic a11y & performance'
  },
  {
  company: 'i-Tech Nepal',
  companyLink: 'https://itechnepal.com/',
  role: 'Sr. Web Developer',
  location: 'Kathmandu, Nepal',
  period: '2013–2015',
  bullets: [
    'Designed web and mobile mockups and translated them into responsive, semantic UIs (HTML5, CSS3, jQuery, PHP).',
    'Developed and customized WordPress themes and templates to meet branding and functional requirements.',
    'Produced graphics and brand assets (logos, banners, print/digital) to support marketing and product launches.',
    'Planned projects and conducted research to inform IA, component choices, and UX flows.',
    'Iterated quickly on client feedback to improve usability, visual polish, and content clarity.'
  ],
  tech: 'HTML5, CSS3, jQuery, PHP, WordPress (custom themes), Adobe Photoshop/Illustrator, Wireframing/Prototyping, Basic UX research'
}
];

interface ExperienceTimelineProps {
  id?: string;
  title?: string;
  compact?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible:  { opacity: 1 }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 18 } }
};

const bulletVariants = {
  hidden: { opacity: 0, },
  visible: { opacity: 1, transition: { type: 'spring' as const, stiffness: 180, damping: 20 } }
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ id = 'experience-timeline', title = 'Experience Timeline', compact = false }) => {
  return (
    <section id={id} className="scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.1}
        variants={containerVariants}
        className="relative"
      >
        <div className="text-center md:text-left mb-14">
          <motion.h2
            variants={itemVariants}
            className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-muted-foreground max-w-3xl  text-sm sm:text-base"
          >
            Progressive roles and measurable impact, with advancing leadership in architectural excellence, accessibility, performance discipline, security posture, and developer enablement.
          </motion.p>
        </div>

        {/* Vertical timeline axis */}
        <div className="relative pl-3 sm:pl-4">
          {/* Solid purple axis line */}
          <div
            className="pointer-events-none absolute left-0 top-2 bottom-2 "
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.company + exp.period}
                variants={itemVariants}
                className="relative group"
              >
                {/* Node */}
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full  shadow shadow-primary/30 ring-2 ring-background" aria-hidden="true" />
                {/* Connector extension to next node (hidden for last) */}
                {i < experiences.length - 1 && (
                  <span
                    className="absolute left-[-2px] top-6 -bottom-4 w-px sm:w-[2px] bg-purple-500/70 group-hover:bg-purple-500 transition-colors"
                    aria-hidden="true"
                  />
                )}
                <div className="ml-5 sm:ml-6 rounded-xl border border-border/70 bg-card/70 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-1">
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent transition-colors underline decoration-primary/30 hover:decoration-accent/50 underline-offset-4"
                            aria-label={`${exp.company} website (opens in new tab)`}
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-primary">{exp.company}</span>
                        )}
                        <span className="text-muted-foreground"> — {exp.role}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" />{exp.location}</span>
                        <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent" />{exp.period}</span>
                      </p>
                    </div>
                  </div>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-4 space-y-2"
                  >
                    {exp.bullets.map(b => (
                      <motion.li
                        key={b}
                        variants={bulletVariants}
                        className="relative pl-4 text-[13.5px] sm:text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-sm rotate-45 bg-gradient-to-br from-primary to-accent" aria-hidden="true" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <p className="text-[12px] sm:text-xs uppercase tracking-wide text-muted-foreground/80 font-bold flex items-center gap-2"><Workflow className="w-3.5 h-3.5" />Tech: {exp.tech}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
