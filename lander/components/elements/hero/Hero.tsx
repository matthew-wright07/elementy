import PaddingX from "../../core/PaddingX"
import PaddingY from "../../core/PaddingY"
import { AiFillOpenAI } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <div>
            <div className="bg-background">
                <div className="absolute w-[600px] h-[600px] bg-primary/25 rounded-full blur-3xl animate-drift1 top-0 left-0" />
                <div className="absolute w-[600px] h-[600px] bg-primary/25 rounded-full blur-3xl animate-drift2 bottom-0 right-0" />
            </div>
            <PaddingX>
                <PaddingY>
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="flex flex-col gap-6 items-center text-center w-full lg:w-3/4">
                            <h1 className="text-white font-bold text-6xl lg:text-8xl">Supercharging UI creation with AI</h1>
                            <p className="text-secondary lg:w-1/2">Build beautiful, production-ready user interfaces in a fraction of the time. Our AI streamlines components and styling so you can go from idea to interface instantly. Spend less time on boilerplate and more time shipping great products.</p>
                            <div className="flex gap-4">
                                <Link to="/about"  className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Explore</Link>
                                <Link to="/auth" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Start</Link>
                            </div>
                            <div className="w-full border-2 border-white rounded-lg text-white relative h-64 flex flex-col justify-between p-4 gap-2">
                                <textarea className="placeholder-secondary w-full h-full resize-none outline-none" placeholder="Generate UI components in seconds..."/>
                                <div className="flex justify-between w-full">
                                    <div className="flex gap-1 items-center">
                                        <AiFillOpenAI className="h-6 w-6"/>
                                        <p>ChatGPT</p>
                                    </div>
                                    <Link to="/auth"><FaArrowUp className="text-background bg-white hover:bg-primary hover:text-white rounded-lg p-2 h-8 w-8 flex items-center justify-center hover:cursor-pointer transition duration-500"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </PaddingY>
            </PaddingX>
        </div>
    )
}