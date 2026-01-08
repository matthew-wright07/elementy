import { FaHome } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return (
        <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-8 lg:p-16 gap-6 overflow-scroll">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Dashboard</h2>
                <Link to="/settings">
                    <IoMdSettings className="text-white h-5 w-5 hover:cursor-pointer"/>
                </Link>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-1 w-full h-full gap-8 rounded-lg bg-tertiary">
                <Link to="/" className="w-full h-full rounded-lg flex flex-col p-32 justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaHome className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Dashboard</p>
                </Link>
                <Link to="create" className="w-full h-full rounded-lg flex flex-col p-32 justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaBoltLightning className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Create</p>
                </Link>
                <Link to="saved" className="w-full h-full rounded-lg flex flex-col p-32 justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaHeart className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Saved</p>
                </Link>
                <a href="https://billing.stripe.com/p/login/9B65kCgVLg285b9a4H8AE00" className="w-full h-full rounded-lg flex flex-col p-32 justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <MdPayments className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Billing</p>
                </a>
                <Link to="account" className="w-full h-full rounded-lg flex flex-col p-32 justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <MdAccountCircle className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Account</p>
                </Link>
                <Link to="settings" className="w-full h-full rounded-lg flex flex-col p-32 justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <IoMdSettings className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Settings</p>
                </Link>
            </div>
        </div>
    )
}