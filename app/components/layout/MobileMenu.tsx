import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PaddingX from "../core/PaddingX";
import PaddingY from "../core/PaddingY";


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
        <div className="block xl:hidden">
            <IoMenu className="text-white h-8 w-8 hover:cursor-pointer" onClick={handleClick}/>
            {show?
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-background z-10">
                <PaddingX>
                    <PaddingY>
                        <div className="w-full flex justify-between items-center rounded-lg flex xl:hidden">
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
                                <p className="text-2xl font-bold">Dashboard</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/create" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Create</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/saved" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Saved</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/upgrade" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Upgrade</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <a href="https://billing.stripe.com/p/login/9B65kCgVLg285b9a4H8AE00" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Billing</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </a>
                            <Link to="/account" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Account</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                            <Link to="/settings" className="flex justify-between w-full items-center py-8 hover:text-primary text-white transition duration-500">
                                <p className="text-2xl font-bold">Settings</p>
                                <FaArrowRight className="w-6 h-6"/>
                            </Link>
                        </div>
                </PaddingX>
            </div>
            :
            null}
        </div>
    )
}