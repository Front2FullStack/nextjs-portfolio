"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export interface Capability {
  title: string;
  summary: string;
  points: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CapabilityCardProps extends Capability {
  index?: number;
}

// Motion variants (allowing bullet stagger)
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 }
} as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const pointVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 }
} as const;

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, summary, points, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      role="listitem"
      tabIndex={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 120, damping: 18 }}
      className={cn(
        "relative group rounded-xl border border-border/80 border-purple-500 min-h-[100%]  ",
        "backdrop-blur-sm p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        "focus-visible:ring-offset-2 hover:border-primary/60",
        "transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl",
        "motion-safe:hover:-translate-y-1 motion-safe:focus:-translate-y-0.5"
      )}
    >
      {/* decorative animated ring */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.25),transparent_60%)]" />
      {/* subtle gradient wash */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-90 group-focus-visible:opacity-90 transition-opacity duration-500 bg-linear-to-br from-primary/5 via-transparent to-accent/10" />

      {/* focus within */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 focus-within:ring-2 focus-within:ring-primary/40 transition" />

      <div className="relative z-10 flex flex-col">
        <div className="flex items-start gap-4">
          <div className="relative flex items-center justify-center mt-0.5">
            <div className="w-11 h-11 rounded-xl  from-primary/15 to-accent/15 flex items-center justify-center text-primary shadow-sm shadow-primary/10 ring-1 ring-border group-hover:ring-primary/40 group-focus-visible:ring-primary/50 transition-all duration-300">
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">{title} icon</span>
            </div>
            {/* accent bar */}
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-9 rounded-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-90 group-focus-visible:opacity-90 transition-opacity" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-[15px] sm:text-base font-semibold mb-1 tracking-tight text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors leading-snug">
              {title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2 pr-1">
              {summary}
            </p>
          </div>
        </div>

        <motion.ul
          className="mt-2 space-y-1.5 list-disc list-inside"
          aria-label={`${title} key points`}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {points.map((point) => (
            <motion.li
              key={point}
              variants={pointVariants}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative text-[13.5px] sm:text-sm text-muted-foreground group-hover:text-foreground/95 group-focus-visible:text-foreground transition-colors"
            >
              {/* premium diamond using layered gradients */}
              <span
                className={cn(
                  "absolute left-0 top-2 w-2 h-2 rotate-45 rounded-[2px]",
                  "bg-[conic-gradient(from_0deg,var(--tw-gradient-stops))] from-primary via-accent to-primary",
                  "shadow-[0_0_0_1px_hsl(var(--background))]",
                  "group-hover:scale-110 group-focus-visible:scale-110 transition-transform"
                )}
                aria-hidden="true"
              />
              <span className="font-medium text-foreground/90 group-hover:text-foreground group-focus-visible:text-foreground leading-snug">
                {point}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* bottom accent gradient line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default CapabilityCard;
