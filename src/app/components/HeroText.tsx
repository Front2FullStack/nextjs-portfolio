import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words: string[] = ["Robust", "Secure", "Agile", "Scalable"];
  const variants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };
  return (
    <div className="z-10 mt-2 text-center md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
     
      <motion.p
            className="text-2xl font-light mb-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
           👋 I'm Sushil Parajuli
          </motion.p>

      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-bold mb-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
        Senior Software Engineer (Frontend)
        </motion.h1>
        <div className="flex flex-col items-start mb-8">
          <motion.p
            className="text-4xl  italic"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
          dedicated to craft
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="overflow-hidden"
          >
            <FlipWords
              words={words}
              className="font-black text-purple-500 text-4xl md:text-8xl  mb-2"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-bold "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web/Mobile Applications.
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 mb-1 md:hidden ">
        <motion.p
          className="text-3xl font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
           Senior Frontend Engineer
        </motion.p>
        <div>
          <motion.p
            className="text-3xl  mb-2  italic"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
          dedicated to craft
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="mb-6"
          >
            <FlipWords
              words={words}
              className="font-bold text-purple-500 text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl mb-12 font-black"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web/Mobile Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
