import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types/Projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../pages/animations";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    image_url,
    categories,
    demo_url,
    description,
    github_url,
    stack,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_url}
        alt={name}
        width="300"
        height="150"
        layout="responsive"
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-6 dark:text-white dark:bg-black py-2 pl-3">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Image
                src={image_url}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
                onClick={() => setShowDetail(true)}
            />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 text-lg bg-gray-200 dark:bg-black"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {demo_url && (
                <a
                  href={demo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 text-lg bg-gray-200 dark:bg-black"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              )}
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2  variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl ">{name}</motion.h2>
            <motion.h3  variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
            <motion.div  variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {stack.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-black round"
                  key={tech}
                >
                  {" "}
                  {tech}{" "}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black">
            <MdClose size={24} onClick={() => setShowDetail(false)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
