"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Workflow } from "lucide-react";

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
    company: "MULTIBANK",
    companyLink: "https://multibank.io/",
    role: "Senior Software Engineer",
    location: "Dubai, UAE",
    period: "2025 – Present",
    bullets: [
      "Engineered frontend for regulated multi-tenant crypto/fintech SaaS platform supporting live trading, staking, and digital banking workflows; leveraged React, Next.js, and TypeScript for 99.8% uptime.",
      "Developed real-time data-intensive interfaces using WebSockets, ECharts, TradingView, and Ag-Grid with virtualization for high-frequency trading data; reduced data processing latency by 40%.",
      "Spearheaded migration from third-party integrations to proprietary solutions using FastAPI, Golang, and Node.js for trading analytics, order execution, and compliance workflows.",
      "Implemented event-driven architecture with Apache Kafka supporting trade, order, wallet, and audit event flows across distributed microservices; ensured message ordering consistency.",
      "Established reusable component library via Storybook; enforced WCAG 2.1 AA accessibility; optimized Core Web Vitals (LCP, CLS) through SSR/ISR, improving SEO ranking by 35%.",
      "Mentored 5+ engineers on clean architecture principles, TypeScript patterns, and AI-assisted development workflows using GitHub Copilot and Cursor; conducted code reviews in Agile sprint ceremonies.",
      "Led app-stack modernization to React Native Expo with Hermes engine, achieving native-grade performance for scalable mobile architecture.",
    ],
    tech: "React, Next.js 14+, TypeScript, Node.js, FastAPI, Golang, Apache Kafka, WebSockets, TradingView, ECharts, Ag-Grid, Storybook, React Native (Expo/Hermes), GitHub Copilot, Cursor",
  },
  {
    company: "M2.COM",
    companyLink: "https://www.m2.com/",
    role: "Senior Software Engineer",
    location: "Dubai, UAE",
    period: "2023 – 2025",
    bullets: [
      "Directed full-stack development of crypto trading platform (React + Next.js + TypeScript + Node.js) with live trading, staking, and multi-chain wallet integration using Notabene Web3 SDK.",
      "Integrated complex Spring Boot and Node.js backend services via REST APIs; implemented event tracking for user behavior analytics across Scrum sprints.",
      "Constructed high-performance dashboards and visualizations using TradingView, ECharts, and Ag-Grid with real-time data streaming; supported 50,000+ concurrent users.",
      "Provisioned distributed content synchronization system connecting back-office CMS platforms to front-office applications using event-driven patterns.",
      "Coordinated cross-functional Agile teams to streamline sprint delivery and enable conflict-free deployments; automated OTC desk workflows via Zendesk bot integration.",
      "Enhanced application performance, accessibility, and security through SSR optimization, Core Web Vitals improvements, OAuth2/OIDC, and RBAC implementation.",
      "Delivered bilingual Arabic/English UX with full RTL, semantic HTML, WCAG 2.1 AA, and Flutter WebView integration.",
    ],
    tech: "React, Next.js, TypeScript, Node.js, Spring Boot, WebSockets, TradingView, ECharts, Ag-Grid, Notabene Web3 SDK, OAuth2/OIDC, RBAC, Sentry, Datadog, Flutter Webview",
  },
  {
    company: "JUMIA GROUP",
    companyLink: "https://group.jumia.com/",
    role: "Full Stack Developer",
    location: "Dubai, UAE",
    period: "2018 – 2023",
    bullets: [
      "Engineered scalable e-commerce modules for Africa's largest marketplace using React and Vue.js; ensured UI consistency via shared enterprise design system within Agile teams.",
      "Transitioned CMS data fetching from legacy REST endpoints to GraphQL; reduced mobile data consumption by 50% and improved Largest Contentful Paint (LCP) by 28%.",
      "Optimized high-concurrency checkout flows using Golang (Gin); maintained 99.9% uptime during extreme traffic spikes (Black Friday sales); handled 100,000+ TPS.",
      "Developed automated catalog pipelines with FastAPI and Celery; managed real-time pricing and promotions for millions of SKUs.",
      "Synchronized order fulfillment across warehouse microservices using Apache Kafka; ensured real-time inventory and payment status accuracy.",
      "Modernized legacy jQuery monoliths to Nuxt.js/React SSR stack; reduced page load times by 30%, increasing conversion rates by 15%.",
      "Delivered regional i18n multi-lingual support with locale formatting and mobile-first optimizations across Kanban-managed sprints.",
    ],
    tech: "React, Vue.js, Golang (Gin), Python (FastAPI/Celery), GraphQL, Apache Kafka, Nuxt.js, Node.js, Webpack/Vite, i18n/RTL, Jest, RTL, Cypress",
  },
  {
    company: "GROWBYDATA",
    companyLink: "https://growbydata.com/",
    role: "Front‑End UI/UX Developer",
    location: "Kathmandu, Nepal",
    period: "2015 – 2016",
    bullets: [
      "Prototyped semantic and responsive UIs (HTML5, CSS3 Flexbox, jQuery, React, AngularJS); delivered design wireframes and mockups.",
      "Developed UI components across multiple squads using AngularJS and React.",
      "Researched front-end performance and accessibility foundations, informing future design-system architecture.",
      "Partnered with backend squads (PHP/.NET) on early RESTful integration patterns and API contract definition.",
    ],
    tech: "HTML5, CSS3, jQuery, AngularJS, React, PHP, .NET, Git, Agile, Accessibility & Performance",
  },
  {
    company: "I-TECH NEPAL",
    companyLink: "https://itechnepal.com/",
    role: "Sr. Web Developer",
    location: "Kathmandu, Nepal",
    period: "2013 – 2015",
    bullets: [
      "Delivered mobile-first responsive web applications using PHP, jQuery, and HTML5/CSS3; reduced project turnaround time by 20% via reusable component libraries.",
      "Developed and customized WordPress themes and templates to meet branding and functional requirements.",
      "Produced graphics and brand assets (logos, banners, print/digital) to support marketing and product launches.",
      "Planned projects and conducted research to inform IA, component choices, and UX flows.",
      "Iterated quickly on client feedback to improve usability, visual polish, and content clarity.",
    ],
    tech: "PHP, jQuery, HTML5, CSS3, WordPress, Adobe Creative Suite, UI/UX Wireframing",
  },
];

interface ExperienceTimelineProps {
  id?: string;
  title?: string;
  compact?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

const bulletVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 180, damping: 20 },
  },
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  id = "experience-timeline",
  title = "Experience Timeline",
  compact = false,
}) => {
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
            Progressive roles and measurable impact, with advancing leadership
            in architectural excellence, accessibility, performance discipline,
            security posture, and developer enablement.
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
                <span
                  className="absolute -left-[7px] top-2 w-3 h-3 rounded-full  shadow shadow-primary/30 ring-2 ring-background"
                  aria-hidden="true"
                />
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
                        <span className="text-muted-foreground">
                          {" "}
                          — {exp.role}
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          {exp.period}
                        </span>
                      </p>
                    </div>
                  </div>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-4 space-y-2"
                  >
                    {exp.bullets.map((b) => (
                      <motion.li
                        key={b}
                        variants={bulletVariants}
                        className="relative pl-4 text-[16px] sm:text-sm text-muted-foreground leading-relaxed"
                      >
                        <span
                          className="absolute left-0 top-2 w-2 h-2 rounded-sm rotate-45 bg-gradient-to-br from-primary to-accent"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <p className="text-[12px] sm:text-xs uppercase tracking-wide text-muted-foreground/80 font-bold flex items-center gap-2">
                      <Workflow className="w-3.5 h-3.5" />
                      Tech: {exp.tech}
                    </p>
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
