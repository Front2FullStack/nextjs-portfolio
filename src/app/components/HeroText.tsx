import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words: string[] = ["Robust", "Intelligent", "Scalable", "Distributed", "Real-Time", "Secure"];
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
        👋 I&apos;m Sushil Parajuli
      </motion.p>

      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-bold mb-1"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Senior Full Stack Engineer
        </motion.h1>
        <motion.p
          className="text-sm font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-3"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          Generative AI • React • Next.js • Node.js • AI/LLMs • Python • Golang
        </motion.p>
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
            Web &amp; Distributed AI Systems.
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-4 mb-1 md:hidden ">
        <div>
          <motion.p
            className="text-3xl font-bold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Senior Full Stack Engineer
          </motion.p>
          <motion.p
            className="text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
            Generative AI • Distributed Systems
          </motion.p>
        </div>
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
              className="font-bold text-purple-500 text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl mb-12 font-black"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web &amp; Distributed AI Systems
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
