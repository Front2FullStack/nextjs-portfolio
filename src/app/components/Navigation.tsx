"use client";
import { motion } from 'framer-motion';
const Navigation = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <motion.nav 
      className="hidden lg:flex flex-wrap gap-4 sm:gap-6 md:gap-8 sticky top-0 z-40 bg-background/95 backdrop-blur-md py-4 -mx-4 px-6 rounded-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {navItems.map(({ id, label }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <button
            onClick={() => scrollToSection(id)}
            className={`relative text-lg font-medium transition-all duration-200 px-4 py-2 rounded-lg border border-transparent cursor-pointer hover:border-purple-700 hover:border-border hover:text-foreground`}
          >
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="relative z-10"
            >
              {label}
            </motion.span>
          </button>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navigation;