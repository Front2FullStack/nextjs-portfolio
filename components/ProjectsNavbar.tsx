import React, { FunctionComponent } from "react";
import { Category } from "../types/Projects";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string
}> = ({ value, handleFilterCategory, active }) => {
    let className = "cursor-pointer hover:text-blue-800 capitalize"
    if(active === value){
        console.log('I am here',value, active)
        className += " text-green-400"
    }
  return (
    <li
      className={className}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{ handleFilterCategory: Function, active : string }> = (
  props
) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="all" {...props} />
      <NavItem value="reactjs" {...props} />
      <NavItem value="vuejs" {...props} />
      <NavItem value="nodejs" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="golang" {...props} />
      <NavItem value="php" {...props} />
    </div>
  );
};

export default ProjectsNavbar;