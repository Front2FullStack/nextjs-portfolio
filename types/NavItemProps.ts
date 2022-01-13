import { IconType } from "react-icons/lib";

export interface NavItemProps {
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}

