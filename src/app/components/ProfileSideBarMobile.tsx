"use client";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileSidebarMobile = () => {

  const containerVariants = {
    hidden: { opacity: 0.5},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
  };

  return (
    <motion.div
      className=" p-8 flex flex-col items-center space-y-6 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="relative  w-full flex flex-col items-center space-y-2">
        {/* Profile Image */}
        <motion.div
          className="relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="relative"
            transition={{ duration: 0.3 }}
            style={{ boxShadow: "var(--shadow-profile)" }}
            whileHover={{
              boxShadow: "0 25px 50px -10px hsl(var(--primary) / 0.4)",
            }}
          >
            <Image
              height="140"
              width="140"
              src={"/SushilParajuli.png"}
              alt="Sushil Parajuli"
              className="w-35 h-35 rounded-2xl object-cover cursor-pointer border-2 border-white/20"
            />
          </motion.div>
          <motion.div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-sm -z-10"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
          {/* Online status indicator */}
          <motion.div
            className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-sidebar-bg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.div className="text-center " variants={itemVariants}>
          <motion.h1
            className="text-3xl lg:text-3xl md:text-2xl sm:text-xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            Sushil Parajuli
          </motion.h1>
          <motion.p
            className="text-xl md:2xl sm:text-2xl  font-bold text-purple-700 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Senior Software Engineer (Frontend)
          </motion.p>
         
        </motion.div>

        {/* Download Resume Buttons */}
        <motion.div variants={itemVariants} className="w-full">
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="w-full hover:bg-muted transition-all duration-300 hover:shadow-md font-medium"
              asChild
            >
              <a href="/Sr_Sofware_Engineer_FrontEnd_SushilParajuli.pdf" download="Sr_Sofware_Engineer_FrontEnd_SushilParajuli.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex" variants={itemVariants}>
          {[
            { icon: Github, delay: 0, href: "https://github.com/sushilparajuli", label: "GitHub" },
            { icon: Linkedin, delay: 0.1, href: "https://linkedin.com/in/sushilparajuli", label: "LinkedIn" },
          ].map(({ icon: Icon, delay, href, label }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + delay }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-700 transition-all duration-300 rounded-xl"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-1 text-center w-full"
          variants={itemVariants}
        >
          {[
            { icon: Mail, text: "sushilparajuli2010@gmail.com", href: "mailto:sushilparajuli2010@gmail.com" },
            { icon: Phone, text: "+971-54388-5308", href: "tel:+971543885308" },
          ].map(({ icon: Icon, text, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer p-3 rounded-lg hover:text-blue-700 group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Icon className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors" />
              <span className="text-sm font-medium">{text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileSidebarMobile;
