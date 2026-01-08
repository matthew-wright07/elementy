import SidebarLink from "../elements/sidebarlink/SidebarLink"
import { FaHome } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { useUserStore } from "../../utils/store";


export default function Sidebar(){
    const user = useUserStore(state => state.user);

    return (
        <div className="hidden col-span-2 bg-background h-screen w-full xl:flex flex-col p-4 gap-4">
            <Link to="/" className="flex gap-2 items-center">
                <img src="/logo.svg" className="w-8 h-8"/>
                <h1 className="text-white text-2xl font-bold">Elementy</h1>
            </Link>
            <hr className="text-tertiary"/>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-1">
                    <SidebarLink href="/" text="Dashboard">
                        <FaHome className="w-4 h-4"/>
                    </SidebarLink>
                    <SidebarLink href="/create" text="Create">
                        <FaBoltLightning className="w-4 h-4"/>
                    </SidebarLink>
                    <SidebarLink href="/saved" text="Saved">
                        <FaHeart className="w-4 h-4"/>
                    </SidebarLink>
                </div>
                <div className="flex flex-col gap-1">
                    <SidebarLink href="/upgrade" text="Upgrade">
                        <FaRocket className="w-4 h-4"/>
                    </SidebarLink>
                    <a href="https://billing.stripe.com/p/login/9B65kCgVLg285b9a4H8AE00" className="w-full rounded hover:bg-primary text-white transition duration-500 cursor-pointer p-2 flex gap-2 items-center">
                        <MdPayments className="w-4 h-4"/>
                        <p className="font-bold">Billing</p>
                    </a>
                    <SidebarLink href="/settings" text="Settings">
                        <IoMdSettings className="w-4 h-4"/>
                    </SidebarLink>
                </div>
            </div>
            <hr className="text-tertiary"/>
            <Link to="/account" className="flex gap-4 items-center hover:cursor-pointer h-8">
                <div className="rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">{user?.name[0]}</div>
                <div className="flex flex-col">
                    <p className="text-white text-sm font-bold truncate 2xl:max-w-[200px] max-w-[100px]">{user?.name}</p>
                    <p className="text-secondary text-xs font-bold truncate 2xl:max-w-[200px] max-w-[100px]">{user?.email}</p>
                </div>
            </Link>
        </div>
    )
}