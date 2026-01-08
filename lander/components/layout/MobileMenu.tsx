import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import PaddingX from "../core/PaddingX";
import PaddingY from "../core/PaddingY";
import { FaArrowRight } from "react-icons/fa";


export default function MobileMenu(){
    const [show,setShow] = useState(false)
    function handleClick(){
        setShow(!show)
    }
    useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);
    return (
        <>
            <IoMenu className="text-white h-8 w-8 hover:cursor-pointer" onClick={handleClick}/>
            {show?
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-background z-10">
                <PaddingX>
                    <PaddingY>
                        <div className="w-full flex justify-between items-center rounded-lg flex lg:hidden">
                            <Link to="/" className="flex gap-2 items-center">
                                <img src="/logo.svg" className="w-8 h-8"/>
                            <h1 className="text-white text-2xl font-bold">Elementy</h1>
                            </Link>
                            <IoClose onClick={handleClick} className="text-white h-8 w-8 hover:cursor-pointer"/>
                        </div>
                    </PaddingY>
                </PaddingX>
                <PaddingX>
                        <div className="flex flex-col">
                            <Link to="/" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Home</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/auth" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Chat</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/pricing" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Pricing</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/about" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">About</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/contact" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Contact</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/auth" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Signup</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/auth" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Login</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                        </div>
                </PaddingX>
            </div>:null}
        </>
    )
}