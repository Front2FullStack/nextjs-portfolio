"use client";

import { motion } from "framer-motion";
import { Building, Calendar, GraduationCap, Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./button";
import { Card } from "./ui/card";

// Data sets (could be elevated to props later if needed)
const workExperience = [
  {
    title: "Senior Full Stack Developer",
    company: "Jumia Group",
    period: "2020 - Present",
    description:
      "Leading development of scalable e-commerce platforms using React, Vue.js, Node.js, and GoLang. Built microservices architecture, implemented CI/CD pipelines, and mentored junior developers across multiple African markets."
  },
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Ltd.",
    period: "2018 - 2020",
    description:
      "Developed responsive web applications using React, Vue.js, and PHP. Collaborated with cross-functional teams to deliver high-quality solutions for various clients across different industries."
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Nepal",
    period: "2016 - 2018",
    description:
      "Built modern web interfaces using JavaScript, HTML5, CSS3, and early React. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility."
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Studio",
    period: "2014 - 2016",
    description:
      "Started career building websites using PHP, MySQL, and jQuery. Gained experience in full development lifecycle from requirements gathering to deployment and maintenance."
  }
];

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Tribhuvan University, Nepal",
    year: "2014",
    description:
      "Graduated with focus on Software Engineering, Database Systems, and Computer Networks. Built strong foundation in programming fundamentals and system design."
  },
  {
    degree: "Full Stack Web Development",
    institution: "Various Online Platforms & Certifications",
    year: "2015-2023",
    description:
      "Continuous learning through platforms like Udemy, Coursera, and official documentation. Specialized in modern JavaScript frameworks, cloud technologies, and DevOps practices."
  }
];

export interface ResumeSectionProps {
  includeContact?: boolean; // optionally hide contact block if embedding elsewhere
  id?: string; // allow custom id override
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ includeContact = true, id = "resume" }) => {
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
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-600">
                📄 My Journey
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Professional Resume</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              My professional journey and educational background in software development, 
              building expertise across various technologies and domains.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gradient-text">
                <Building className="w-7 h-7 mr-3 text-primary" />
                Work Experience
              </h3>
              
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-20"></div>
                
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background shadow-lg z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      viewport={{ once: true }}
                    />
                    
                    <Card className="ml-12 p-6 skill-card hover:shadow-xl transition-all duration-500 group border-l-4 border-l-primary/20 hover:border-l-primary/60">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                            {job.title}
                          </h4>
                          <span className="text-sm text-muted-foreground flex items-center mt-1 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {job.period}
                          </span>
                        </div>
                        <p className="text-accent font-semibold mb-4 flex items-center">
                          <Building className="w-4 h-4 mr-2" />
                          {job.company}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gradient-text">
                <GraduationCap className="w-7 h-7 mr-3 text-accent" />
                Education
              </h3>
              
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-primary to-accent opacity-20"></div>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-background shadow-lg z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      viewport={{ once: true }}
                    />
                    
                    <Card className="ml-12 p-6 skill-card hover:shadow-xl transition-all duration-500 group border-l-4 border-l-accent/20 hover:border-l-accent/60">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-bold text-accent group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h4>
                          <span className="text-sm text-muted-foreground flex items-center mt-1 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-primary font-semibold mb-4 flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-primary via-accent to-primary text-white hover:shadow-2xl transition-all duration-500 py-4 text-lg font-semibold relative overflow-hidden group" asChild>
                    <a href="/resume_latest.pdf" download="Sushil_Parajuli_Resume_Latest.pdf">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        <Download className="w-5 h-5 mr-3" />
                        Download Full Resume (PDF)
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Section (optional) */}
          {includeContact && (
            <motion.div
              className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-sm font-semibold text-emerald-600">
                      🤝 Get In Touch
                    </span>
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-4 gradient-text">Let&apos;s Work Together</h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Ready to bring your ideas to life? Let&apos;s discuss your next project 
                    and create something amazing together.
                  </p>
                </motion.div>
                
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                  {[
                    { 
                      icon: Mail, 
                      text: "sushil@parajuli.com", 
                      href: "mailto:sushil@parajuli.com",
                      label: "Email Me",
                      color: "from-blue-500/20 to-purple-500/20"
                    },
                    { 
                      icon: Phone, 
                      text: "+977-XXXX-XXXX", 
                      href: "tel:+977XXXXXXXX",
                      label: "Call Me",
                      color: "from-green-500/20 to-emerald-500/20"
                    },
                    { 
                      icon: MapPin, 
                      text: "Nepal/Remote", 
                      href: "https://maps.google.com/place/Nepal",
                      label: "Location",
                      color: "from-red-500/20 to-orange-500/20"
                    },
                  ].map(({ icon: Icon, text, href, label, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br ${color} border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:shadow-lg`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {label}
                      </h4>
                      <p className="text-muted-foreground text-sm text-center group-hover:text-foreground transition-colors">
                        {text}
                      </p>
                    </motion.a>
                  ))}
                </div>
                
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Start A Conversation
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </section>
  );
};

export default ResumeSection;