import { Link } from "react-router-dom"
import PaddingX from "../core/PaddingX"
import PaddingY from "../core/PaddingY"
import MobileMenu from "./MobileMenu"
import { useLocation } from "react-router-dom"

export default function Header(){
    const location = useLocation()
    const url = location.pathname
    return (
        <PaddingX>
            <PaddingY>
                <div className="w-full flex justify-between items-center rounded-lg hidden lg:flex">
                    <Link to="/" className="flex gap-2 items-center">
                        <img src="/logo.svg" className="w-8 h-8"/>
                       <h1 className="text-white text-2xl font-bold">Elementy</h1>
                    </Link>
                    <div className="flex gap-4 items-center">
                        <Link to="/" className={`${url==="/"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Home</Link>
                        <Link to="/auth" className={`${url==="/chat"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Chat</Link>
                        <Link to="/pricing" className={`${url==="/pricing"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Pricing</Link>
                        <Link to="/about" className={`${url==="/about"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>About</Link>
                        <Link to="/contact" className={`${url==="/contact"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Contact</Link>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to="/auth" className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Signup</Link>
                        <Link to="/auth" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Login</Link>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center rounded-lg flex lg:hidden">
                    <Link to="/" className="flex gap-2 items-center">
                        <img src="/logo.svg" className="w-8 h-8"/>
                       <h1 className="text-white text-2xl font-bold">Elementy</h1>
                    </Link>
                    <MobileMenu/>
                </div>
            </PaddingY>
        </PaddingX>
    )
}