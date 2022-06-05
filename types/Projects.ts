import { IconType } from "react-icons/lib";

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  categories: Category[];
  stack: string[];
}

export type Category = 'reactjs' | 'vuejs' | 'golang' | 'nodejs' | 'express' | 'mongo' | 'php' | 'mysql'