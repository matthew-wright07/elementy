import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

type Props = {
    text:string,
    children:React.ReactNode,
    href: string
}

export default function SidebarLink({text,children,href}:Props){

    const location = useLocation();
    const url = location.pathname;
    return (
        <Link to={href} className={`${href===url?"bg-primary":null} w-full rounded hover:bg-primary text-white transition duration-500 cursor-pointer p-2 flex gap-2 items-center`}>
            {children}
            <p className="font-bold">{text}</p>
        </Link>
    )
}