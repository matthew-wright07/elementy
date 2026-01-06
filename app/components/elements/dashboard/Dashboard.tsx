import { FaHome } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export default function Dashboard(){
    return (
        <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-16 gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Dashboard</h2>
                <IoMdSettings className="text-white h-5 w-5 hover:cursor-pointer"/>
            </div>
            <div className="grid grid-cols-3 w-full h-full gap-8 rounded-lg bg-tertiary">
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaHome className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Dashboard</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaBoltLightning className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Create</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <FaCloud className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Saved</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <MdPayments className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Billing</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <MdAccountCircle className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Account</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-background transition duration-500 hover:bg-primary">
                    <IoMdSettings className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">Settings</p>
                </div>
            </div>
        </div>
    )
}