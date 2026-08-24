"use client";
import { motion } from "framer-motion";
import React from "react";

interface AboutSummaryProps {
  condensed?: boolean; // retain prop for future but unused in simplified layout
}

const paragraph = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i },
  }),
};

const AboutSummary: React.FC<AboutSummaryProps> = () => {
  return (
    <div className="space-y-6 max-w-4xl" aria-label="Professional summary">
      <motion.blockquote
        variants={paragraph}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="p-5 my-4 text-base sm:text-lg leading-relaxed text-muted-foreground border-s-4 border-purple-500 bg-muted/10 rounded-r-xl space-y-4"
      >
        <p>
          <span className="font-semibold text-foreground">
            Results-driven Senior Full Stack Engineer
          </span>{" "}
          with 10+ years architecting high-scale, resilient platforms across FinTech, Crypto, and E-commerce. Expert in distributed systems, real-time data visualization, and event-driven microservices. Demonstrated ability to reduce page load times by 30%, increase user engagement by 15%, and maintain 99.9% uptime during peak traffic.
        </p>
        
        <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20 text-sm sm:text-base">
          <p className="font-semibold text-purple-700 dark:text-purple-300 mb-1">
            🤖 AI Engineering &amp; Autonomous Agent Architecture:
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Focused on production LLM systems, intelligent agent architecture, and autonomous development tools. Expert in Claude API, prompt engineering, multi-agent orchestration, and GraphRAG platforms. Specializes in secure AI infrastructure via Model Context Protocol (MCP), structured prompting techniques, and hallucination prevention with responsible, human-centered AI integration.
          </p>
        </div>

        <p>
          <span className="font-semibold text-foreground">
            End-to-End Engineering Strengths:
          </span>{" "}
          Node.js, Next.js, TypeScript, Python (FastAPI), Golang, and Apache Kafka with real-time data visualization (TradingView, ECharts, AgGrid, WebSockets, SSE). Proven track record establishing reusable component libraries via Storybook, optimizing Core Web Vitals (LCP, CLS) through SSR/ISR, enforcing WCAG 2.1 AA accessibility, and hardening applications with OAuth2/OIDC, RBAC, and CSP/HSTS.
        </p>
      </motion.blockquote>
    </div>
  );
};

export default AboutSummary;
