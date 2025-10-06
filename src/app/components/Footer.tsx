"use client";
import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-300 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className=" max-w-5xl  py-8 text-xs sm:text-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-muted-foreground"
        >
          © {year} <span className="font-medium text-foreground">Sushil Parajuli</span>. All rights reserved.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground/80"
          aria-label="Auxiliary navigation"
        >
          {[
            { label: "GitHub", href: "https://github.com/sushilparajuli" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/sushilparajuli" },
            { label: "Resume", href: "/resume.pdf" },
          ].map((item) => (
            <motion.li
              key={item.href}
              variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }}
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </footer>
  );
}

export default Footer;