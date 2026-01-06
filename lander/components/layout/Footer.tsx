import PaddingX from "../core/PaddingX";
import PaddingY from "../core/PaddingY";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="bg-gradient-to-t from-primary/50 via-zinc-900 to-background">
        <PaddingX>
            <PaddingY>
                <div className="grid grid-cols-2 lg:grid-cols-4 py-16 gap-8">
                    <div className="flex flex-col gap-2 justify-self-start lg:justify-self-start">
                        <div className="flex gap-2 items-center">
                            <img src="/logo.svg" className="w-8 h-8"/>
                            <h1 className="text-white text-2xl font-bold">Elementy</h1>
                        </div>
                        <p className="text-white">support@elementy.io</p>
                        <p className="text-white">+1 (512) 586-4786</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-self-end text-end lg:justify-self-center lg:text-start">
                        <p className="text-white font-bold text-lg">Links</p>
                        <div className="flex flex-col gap-0">
                            <Link to="/" className="text-white hover:text-primary transition duration-500">Home</Link>
                            <Link to="/chat" className="text-white hover:text-primary transition duration-500">Chat</Link>
                            <Link to="/pricing" className="text-white hover:text-primary transition duration-500">Pricing</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-self-start lg:justify-self-center">
                        <p className="text-white font-bold text-lg">Company</p>
                        <div className="flex flex-col gap-0">
                            <Link to="/about" className="text-white hover:text-primary transition duration-500">About</Link>
                            <Link to="/contact" className="text-white hover:text-primary transition duration-500">Contact</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-self-end gap-2 text-end lg:justify-self-end lg:text-start">
                        <p className="text-white font-bold text-lg">Legal</p>
                        <div className="flex flex-col gap-0">
                            <Link to="/" className="text-white hover:text-primary transition duration-500">Cookie Policy</Link>
                            <Link to="/chat" className="text-white hover:text-primary transition duration-500">Terms of Service</Link>
                            <Link to="/pricing" className="text-white hover:text-primary transition duration-500">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
        </div>
    )
}