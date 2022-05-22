import { IconType } from "react-icons/lib";

export default interface NavItemProps {
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}

