import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect, FunctionComponent } from "react"
import NavItemProps from "../types/NavItemProps"

const NavItem:FunctionComponent<NavItemProps> = ({activeItem, setActiveItem, name, route}) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
               <a>
                   <span onClick={() => setActiveItem(name)} className="hover:text-green-400 dark:hover:text-gray-300">{name}</span>
               </a>
           </Link>
        ):null
    )
}




 export const Navbar = () => {
    const [activeItem, setactiveItem] = useState<string>('')
    const {pathname} = useRouter()
    useEffect(() => {
        if(pathname === '/') setactiveItem('About')
        if(pathname === '/projects') setactiveItem('Projects')
        if(pathname === '/resume') setactiveItem('Resume')
    }, [])
    
    return (
        <div className="flex justify-between px-5 py-3 my-3">
           <span className="text-xl font-bold text-green-400 border-b-4 border-green-400 dark:text-white dark:border-white dark:shadow-lg dark:shadow-indigo-500/40"> {activeItem} </span>
           <div className="flex space-x-5 text-red-400 font-lg dark:text-gray-200">
               <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="About" route="/" />
               <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="Projects" route="/projects" />
               <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="Resume" route="/resume" />
           </div>
        </div>
    )
}