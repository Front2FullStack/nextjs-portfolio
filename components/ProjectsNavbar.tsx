import React, { FunctionComponent } from "react";
import { Category } from "../types/Projects";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string
}> = ({ value, handleFilterCategory, active }) => {
    let className = "capitalize cursor-pointer hover:text-blue-800"
    if(active === value){
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
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
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