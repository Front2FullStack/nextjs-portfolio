"use client";
import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-3 mt-16 border-t  border-gray-300">
      <div className=" text-center md:text-left max-w-5xl  py-8 text-xs sm:text-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-muted-foreground"
        >
          © {year} <span className="font-medium ">Sushil Parajuli</span>. All rights reserved.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="items-center flex flex-wrap gap-x-6 gap-y-2  justify-center"
          aria-label="Auxiliary navigation"
        >
          {[
            { label: "GitHub", href: "https://github.com/sushilparajuli" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/sushilparajuli" },
            { label: "Resume", href: "/Sr_Sofware_Engineer_FrontEnd_SushilParajuli.pdf" },
          ].map((item) => (
            <motion.li
              key={item.href}
              variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }}
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
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