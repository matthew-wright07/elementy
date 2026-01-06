import PaddingX from "../../core/PaddingX"
import PaddingY from "../../core/PaddingY"
import { AiFillOpenAI } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const VITE_APP_URL = import.meta.env.VITE_APP_URL;

export default function Hero(){
    return (
        <div className="bg-gradient-to-t from-primary/30 via-zinc-900 to-background">
            <PaddingX>
                <PaddingY>
                    <div className="flex flex-col items-center justify-center pt-8 pb-12">
                        <div className="flex flex-col gap-6 items-center text-center w-3/4">
                            <h1 className="text-white font-bold text-8xl">Supercharging UI creation with AI</h1>
                            <p className="text-secondary w-1/2">Build beautiful, production-ready user interfaces in a fraction of the time. Our AI streamlines components and styling so you can go from idea to interface instantly. Spend less time on boilerplate and more time shipping great products.</p>
                            <div className="flex gap-4">
                                <Link to="/about"  className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Explore</Link>
                                <a href={VITE_APP_URL+"/auth"} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Start</a>
                            </div>
                            <div className="w-full border-2 border-white rounded-lg text-white relative h-64 flex flex-col justify-between p-4 gap-2">
                                <textarea className="placeholder-secondary w-full h-full resize-none outline-none" placeholder="Make your UI components in seconds"/>
                                <div className="flex justify-between w-full">
                                    <div className="flex gap-1 items-center">
                                        <AiFillOpenAI className="h-6 w-6"/>
                                        <p>ChatGPT</p>
                                    </div>
                                    <a href={VITE_APP_URL+"/auth"}><FaArrowUp className="text-background bg-white hover:bg-primary hover:text-white rounded-lg p-2 h-8 w-8 flex items-center justify-center hover:cursor-pointer transition duration-500"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </PaddingY>
            </PaddingX>
        </div>
    )
}