"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FileText } from 'lucide-react';
import DarkModeButton from './DarkModeButton';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: FileText }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-background/95 backdrop-blur-md rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="lg:hidden fixed top-20 right-6 z-50 bg-background/95 backdrop-blur-md rounded-2xl p-3 min-w-[200px]"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map(({ id, label, icon: Icon }, index) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="w-full cursor-pointer flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-muted/30 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="p-2 rounded-lg bg-muted/20 group-hover:bg-muted/40 transition-colors">
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="font-medium text-foreground">
                      {label}
                    </span>
                  </motion.button>
                ))}
                <DarkModeButton/>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;