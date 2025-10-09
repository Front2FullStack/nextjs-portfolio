"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface SkillCategory {
  category: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Tech Stack',
    items: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Styled Components', 'Vue.js', 'Nuxt.js' , 'Gsap', 'Three.js'
    ]
  },
  {
    category: 'State Management',
    items: ['Redux', 'Context API', 'Zustand']
  },
  {
    category: 'Testing & Quality',
    items: ['TDD', 'Jest', 'React Testing Library', 'Cypress']
  },
  {
    category: 'UI / Component Libraries',
    items: ['Figma', 'Storybook', 'Material-UI', 'Ant Design', 'Tailwind CSS', 'shadcn/ui']
  },
  {
    category: 'Tools & Workflow',
    items: ['Webpack', 'Vite', 'Git', 'npm', 'Yarn', 'pnpm', 'CI/CD Pipelines']
  },
  {
    category: 'Data Structure and Algorithms',
    items: ['Arrays & Strings', 'Hash Tables/Maps', 'Stack/Queue', 'Graphs', 'Heaps', 'Dynamic Programming', 'Recursion' ,'Trees (DOM/Virtual DOM)', 'Tries', 'Caching Strategies (LRU/MRU)']
  },
   {
    category: 'Backend Tech Stack',
    items: ['PHP', 'Golang', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL' ,'Redis', 'Elasticsearch',]
  },
  {
    category: 'AI Tooling',
    items: ['Cursor IDE', 'GitHub Copilot', 'ChatGPT']
  },
  {
    category: 'Web3',
    items: ['Solidity','Etherjs', 'Web3.js', 'Alchemy', 'Wagmi']
  },
  
];

const containerVariants = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1, transition: { staggerChildren: 0.01 } }
};

const badgeVariants = {
  hidden: { opacity: 0,  scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 160, damping: 18 } }
};

const itemGroupVariants = {
  hidden: { opacity: 0.5, },
  visible: { opacity: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 20 } }
};

const SkillBadges: React.FC = () => {
  // Split categories into two roughly balanced columns by total item count
  const left: SkillCategory[] = [];
  const right: SkillCategory[] = [];
  let leftCount = 0;
  let rightCount = 0;
  skillCategories.forEach(cat => {
    const itemLen = cat.items.length + 2; // +1 weight for the heading space
    if (leftCount <= rightCount) {
      left.push(cat); leftCount += itemLen;
    } else {
      right.push(cat); rightCount += itemLen;
    }
  });

  const renderColumn = (cols: SkillCategory[]) => (
    <div className="flex flex-col gap-8">
      {cols.map(cat => (
        <motion.div key={cat.category} className="space-y-2" variants={itemGroupVariants}>
          <h4 className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-primary/80">
            {cat.category}
          </h4>
          <motion.ul
            className="flex flex-wrap gap-2"
            role="list"
            variants={containerVariants}
          >
            {cat.items.map(item => (
              <motion.li
                key={item}
                variants={badgeVariants}
                className="relative group"
              >
                <span className="inline-flex items-center rounded-md border border-border/60  backdrop-blur-sm px-3 py-1 text-[11px] sm:text-[12.5px] font-medium text-foreground/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:border-primary/60 hover:text-primary transition-colors">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      className="mt-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      aria-label="Technology skills grouped by category in two columns"
    >
      <div className="grid gap-10 md:gap-12 md:grid-cols-2">
        {renderColumn(left)}
        {renderColumn(right)}
      </div>
    </motion.div>
  );
};

export default SkillBadges;
