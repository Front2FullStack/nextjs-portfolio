import { useTheme } from "next-themes";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { GiTie } from "react-icons/gi";

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/5800371?v=4"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider text-transparent whitespace-pre-line font-monton bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
        Sushil Parajuli
      </h3>
      <h3 className="my-4 text-3xl font-medium tracking-wider whitespace-pre-line">
      सुशील पराजुली
      </h3>
      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black dark:border-white dark:border">
        FullStack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black dark:border-white dark:border"
        href="#"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* {social icons} */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-400 dark:text-white md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterSquare className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* {address} */}
      <div>
        <div>
          <span>Dubai, UAE</span>
        </div>
        <p>sushilparajuli2010@gmail.com</p>
        <p>+971-543885308</p>
        {/* email button */}
        <div className="flex-col items-center justify-center">
          <button
            className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-zinc-900 dark:to-neutral-900 dark:border-white dark:border"
            onClick={() => window.open("mailto:sushilparajuli2010@gmail.com")}
          >
            Email Me
          </button>
          <button
            onClick={changeTheme}
            className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-zinc-900 dark:to-neutral-900 dark:border-white dark:border"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};
