import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  bgColor?: string;
}

const SkillCard = ({ title, description, technologies, icon: Icon, bgColor = "bg-emerald-50" }: SkillCardProps) => {
  return (
    <motion.div 
      className="skill-card p-6 rounded-xl cursor-pointer relative overflow-hidden group"
      whileHover={{ 
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.2)"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      <div className="flex items-start space-x-4 relative z-10">
        <motion.div 
          className={`p-3 rounded-lg ${bgColor} relative overflow-hidden`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <Icon className="w-6 h-6 text-accent relative z-10" />
        </motion.div>
        
        <div className="flex-1">
          <motion.h3 
            className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground mb-3 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {technologies.map((tech, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 text-sm bg-muted rounded-full font-medium hover:bg-muted/80 transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillCard;