import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types/Projects";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return
    }

    const filteredCategories = projectsData.filter((project) =>
      project.categories.includes(category)
    );
    setProjects(filteredCategories);
    setActive(category);
  };

  return (
    <div className="px-5 py-2">
      <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />
      <div className="relative grid grid-cols-12 gap-4 my-3 pl-4">
        {projects.map((project) => (
          <div
            className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-black"
            key={project.github_url}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
