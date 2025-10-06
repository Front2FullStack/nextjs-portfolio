"use client";
import MobileNav from '@/components/MobileNav';
import { motion } from 'framer-motion';
import { TestTube, Layers, Box, Accessibility, Settings2, Users, ShieldCheck, MonitorSmartphone, BarChart3, Component, GitBranch, Rocket, Gauge } from 'lucide-react';
import CapabilityCard, { Capability } from '@/components/CapabilityCard';
import SkillBadges from '@/components/SkillBadges';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import AboutSummary from '@/components/AboutSummary';
import HeroText from '@/components/HeroText';

const Main = () => {

  // Capabilities derived from professional responsibilities provided.
  // Note: Security item intentionally placed last and displayed full-row at larger breakpoints.
  const capabilities: Capability[] = [
    {
      title: 'High‑Impact Web UI Engineering',
      icon: MonitorSmartphone,
      summary: 'Building performant, elegant interfaces with React + Next.js.',
      points: [
        'TypeScript-first, strongly typed patterns',
        'Modular, accessible component composition',
        'Progressive enhancement & graceful degradation'
      ]
    },
    {
      title: 'Responsive & Accessible Layouts',
      icon: Accessibility,
      summary: 'Pixel‑perfect adaptive design meeting WCAG 2.1 AA.',
      points: [
        'Semantic HTML5, CSS Grid / Flexbox',
        'Keyboard & screen reader workflows',
        'Color contrast and motion‑reduction care'
      ]
    },
    {
      title: 'Design System & Reusability',
      icon: Component,
      summary: 'Scalable component libraries & tokens for consistency.',
      points: [
        'Systematized primitives & variants',
        'Storybook documentation & visual tests',
        'Theming + dark mode architecture'
      ]
    },
    {
      title: 'Quality & Testing Strategy',
      icon: TestTube,
      summary: 'Defense‑in‑depth automated testing & CI gating.',
      points: [
        'Unit & integration (Jest + RTL)',
        'E2E coverage (Cypress/Playwright)',
        'Pre‑merge performance & a11y checks'
      ]
    },
    {
      title: 'Cross‑Functional Collaboration',
      icon: Users,
      summary: 'Partnering across Product, Design & Backend.',
      points: [
        'Refinement & grooming leadership',
        'Structured code reviews with coaching',
        'Clear technical documentation'
      ]
    },
    {
      title: 'Performance & Web Vitals',
      icon: Gauge,
      summary: 'Relentless focus on fast, smooth experiences.',
      points: [
        'SSR/ISR & granular code‑splitting',
        'Lighthouse/Core Web Vitals tracking',
        'Runtime budgets & bundle analysis'
      ]
    },
    {
      title: 'Observability & Reliability',
      icon: BarChart3,
      summary: 'Proactive monitoring & rapid incident response.',
      points: [
        'Instrumentation (Sentry / Datadog)',
        'Real user metrics dashboards',
        'Structured debugging playbooks'
      ]
    },
    {
      title: 'Mentorship & Engineering Culture',
      icon: GitBranch,
      summary: 'Developing talent & elevating team standards.',
      points: [
        'Pair programming & onboarding paths',
        'Actionable review feedback loops',
        'Growth frameworks & knowledge sharing'
      ]
    },
    {
      title: 'Modern Web3 Integration',
      icon: Layers,
      summary: 'Secure wallet & smart contract experiences.',
      points: [
        'Ethers.js / Wagmi interaction patterns',
        'Signature & transaction flow UX',
        'Security & failure state handling'
      ]
    },
    {
      title: 'Scalable Architecture',
      icon: Box,
      summary: 'Patterns enabling evolution & low friction change.',
      points: [
        'Domain & feature isolation',
        'Incremental migration strategies',
        'Config‑driven extensibility'
      ]
    },
    {
      title: 'Continuous Delivery & Tooling',
      icon: Rocket,
      summary: 'Frictionless pipelines & automated governance.',
      points: [
        'CI gates (tests, lint, a11y, perf)',
        'Preview environments & feature flags',
        'Release notes & rollout safety'
      ]
    },
    {
      title: 'Developer Experience Optimization',
      icon: Settings2,
      summary: 'Improving speed, clarity & reliability for devs.',
      points: [
        'Local env parity & fast feedback',
        'Scriptable scaffolds & generators',
        'Type‑safe APIs & shared utilities'
      ]
    },
    {
      title: 'Security & Frontend Hardening',
      icon: ShieldCheck,
      summary: 'Proactive client security: auth integrity, headers, OWASP defenses & supply chain hygiene.',
      points: [
        'OWASP: XSS & CSRF prevention, input validation, output escaping, Trusted Types/DOMPurify',
        'Auth integrity: OAuth2/OIDC, httpOnly+SameSite cookies, RBAC, middleware guards, session rotation',
        'Defense headers: CSP (nonces), HSTS, frame-ancestors, X-Content-Type-Options, Referrer & Permissions policy',
        'Supply chain & secrets: audits (Dependabot/Snyk), SBOM, locked deps, secret leak scanning'
      ]
    }
  ];

 
 


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-transparent min-h-screen">
      {/* <Navigation /> */}
      <MobileNav />
      
      <motion.div 
        className="max-w-7xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section id="hero" className="relative py-2 pb-8">
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
          >
            <HeroText />
          </motion.div>

          {/* Skill Badges (technology stack overview) */}
          {/* <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="px-4 py-1  border border-primary/20 rounded-full text-sm font-semibold text-primary">
            👨🏻‍💻 Skills/Expertise
          </span>
        </motion.div> */}
          <SkillBadges />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
           <motion.div 
            id='skills'
            className="mb-10"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold  mb-4 tracking-tight">Intro</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
              A concise view of the core capabilities I bring to modern product engineering—balancing velocity, quality, accessibility, performance, and long‑term maintainability.
            </p>
          </motion.div>
          <div className="mb-16">
            <AboutSummary />
          </div>

          <motion.div 
            id='skills'
            className="mb-10"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold  mb-4 tracking-tight">Skills & Expertise</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl ">
              A concise view of the core capabilities I bring to modern product engineering—balancing velocity, quality, accessibility, performance, and long‑term maintainability.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            role="list"
            aria-label="Professional capabilities"
          >
            {capabilities.map((cap, idx) => {
              const isLast = idx === capabilities.length - 1;
              return (
                <div
                  key={cap.title}
                  className={isLast ? 'md:col-span-2 xl:col-span-3' : undefined}
                >
                  <CapabilityCard index={idx} {...cap} />
                </div>
              );
            })}
          </motion.div>
        </section>

          {/* Experience Timeline Section (new) */}
          <div id="experience" className="mt-20">
            <ExperienceTimeline />
          </div>

      </motion.div>
    </div>
  );
};

export default Main;
