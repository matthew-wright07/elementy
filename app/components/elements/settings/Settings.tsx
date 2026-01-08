import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Settings(){
    return (
        <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-8 lg:p-16 gap-6 overflow-scroll">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Settings</h2>
                <Link to="/settings">
                    <IoMdSettings className="text-white h-5 w-5 hover:cursor-pointer"/>
                </Link>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-1 xl:grid-rows-2 w-full h-full gap-8 rounded-lg bg-tertiary">
                <Link to="/account" className="w-full h-full p-32 rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <MdAccountCircle className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Account</p>
                </Link>
                <Link to="/upgrade" className="w-full h-full p-32 rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaRocket className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Upgrade</p>
                </Link>
                <a href="https://billing.stripe.com/p/login/9B65kCgVLg285b9a4H8AE00" className="w-full h-full p-32 rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <MdPayments className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Billing</p>
                </a>
            </div>
        </div>
    )
}