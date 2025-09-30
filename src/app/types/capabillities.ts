import { Capability } from "@/components/CapabilityCard";
import { Accessibility, BarChart3, Box, Component, Gauge, GitBranch, Layers, MonitorSmartphone, Rocket, Settings2, ShieldCheck, Users } from "lucide-react";

  // Capabilities derived from professional responsibilities provided.
 export const capabilities: Capability[] = [
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
      icon: ShieldCheck,
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
    }
  ];