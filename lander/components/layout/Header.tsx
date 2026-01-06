import { Link } from "react-router-dom"
import PaddingX from "../core/PaddingX"
import PaddingY from "../core/PaddingY"
import { useLocation } from "react-router-dom"

const VITE_APP_URL = import.meta.env.VITE_APP_URL;

export default function Header(){
    const location = useLocation()
    const url = location.pathname
    return (
        <PaddingX>
            <PaddingY>
                <div className="w-full flex justify-between items-center rounded-lg">
                    <div className="flex gap-2 items-center">
                        <img src="/logo.svg" className="w-8 h-8"/>
                        <h1 className="text-white text-2xl font-bold">Elementy</h1>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to="/" className={`${url==="/"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Home</Link>
                        <a href={VITE_APP_URL+"/auth"} className={`${url==="/chat"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Chat</a>
                        <Link to="/pricing" className={`${url==="/pricing"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Pricing</Link>
                        <Link to="/about" className={`${url==="/about"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>About</Link>
                        <Link to="/contact" className={`${url==="/contact"?"text-primary":"text-white"} hover:text-primary transition duration-500`}>Contact</Link>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href={VITE_APP_URL+"/auth"} className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Signup</a>
                        <a href={VITE_APP_URL+"/auth"} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Login</a>
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}