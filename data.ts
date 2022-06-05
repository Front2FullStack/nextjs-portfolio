import IService from "./types/Services";
import { RiComputerLine } from "react-icons/ri";
import { FaBalanceScaleRight, FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { ISkill } from "./types/Skills";
import { IProject, Category } from "./types/Projects";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    details:
      "Building Robust Mobile/Web Applications with <b> HTML</b>,<b>CSS</b> Javascript's library <b>React.JS</b>, <b>Vue.JS</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    details:
      "Handle database, server, api using <b>Express </b>, <b>GoLang</b>, <b>PHP</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    details:
      "Develop REST API using <b>Golang</b> & <b>Node API</b> using Microservices architecture ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Development",
    details:
      "Stunning user interface designer using <b>Figma</b>, <b>Adobe XD</b>, <b>Sketch</b> along with motion designs",
  },
  {
    Icon: MdDeveloperMode,
    title: "Reactive Coder",
    details: "Always keeping eye on new stack to sharpen an axe",
  },
  {
    Icon: RiComputerLine,
    title: "Test Driven Development",
    details:
      "Focusing more on the projects with functional tests, unit tests and e2e tests",
  },
];

export const languages: ISkill[] = [
  {
    name: "Javascript",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "NodeJS",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "PHP",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "GoLang",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "React Blog (MERN-STACK)",
    description:
      "Complete Blog site with server-client authentication developed on MERN STACK",
    image_url: "/images/projects/mern.png",
    demo_url: "",
    github_url: "https://github.com/sushilparajuli/MERN-Stack-Blog",
    categories: ["reactjs", "nodejs", "express", "mongo"],
    stack: ["ReactJS", "NodeJS", "MongoDB"],
  },
  {
    id: 2,
    name: "Social Next App",
    description: "Social Networking web application with NextJS/NodeJS",
    image_url: "/images/projects/node_next.jpeg",
    demo_url: "",
    github_url: "https://github.com/sushilparajuli/social-next",
    categories: ["reactjs", "nodejs", "express", "mongo"],
    stack: ["ReactJS", "NodeJS", "MongoDB", "NextJS"],
  },
  {
    id: 3,
    name: "Jumia Deals",
    description: "Free classified in Africa",
    image_url: "/images/projects/jdeals.png",
    demo_url: "https://deals.jumia.ci/",
    github_url: "",
    categories: ["vuejs", "nodejs", "php"],
    stack: ["VueJS", "NodeJS", "Mysql", "Php"],
  },
  {
    id: 4,
    name: "NextJS App with faker",
    description: "Next.JS Checkout App with fake data",
    image_url: "/images/projects/image_not_available.png",
    demo_url: "https://deals.jumia.ci/",
    github_url: "",
    categories: ["reactjs", "golang", "mysql"],
    stack: ["NextJs", "Docker", "Redis", "Mysql"],
  },
];
