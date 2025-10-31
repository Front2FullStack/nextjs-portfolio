"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 120,
    },
  },
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A Full Stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "Cross-platform mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    technologies: ["React Native", "GoLang", "Redis", "JWT", "Microservices"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export interface SkillsProjectsProps {
  id?: string;
  title?: string;
  description?: string;
  showActions?: boolean;
}

const SkillsProjects: React.FC<SkillsProjectsProps> = ({
  id = "projects",
  title = "Featured Projects",
  description = "A curated collection of my recent work showcasing different technologies, problem-solving approaches, and creative solutions.",
  showActions = true,
}) => {
  return (
    <section id={id} className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-full text-sm font-semibold text-accent">
            💼 My Work
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8 sm:gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -12,
              boxShadow: "0 25px 50px -10px hsl(var(--primary) / 0.25)",
            }}
            className="group"
          >
            <Card className="p-8 skill-card h-full relative overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              {/* Project number */}
              <motion.div
                className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-sm font-bold text-primary/80"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-muted to-muted/80 rounded-full font-medium hover:from-primary/10 hover:to-accent/10 hover:text-primary transition-all duration-300 cursor-pointer border border-border/50"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + techIndex * 0.04 }}
                      whileHover={{ scale: 1.07 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {showActions && (
                  <motion.div
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full hover:bg-muted/80 hover:border-primary/30 transition-all duration-300 font-medium"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsProjects;
