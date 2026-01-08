import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { useUserStore } from "../../../utils/store";

export default function Account(){
    const user = useUserStore(state => state.user);
    return (
        <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-8 lg:p-16 gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Account</h2>
                <Link to="/settings">
                    <IoMdSettings className="text-white h-5 w-5 hover:cursor-pointer"/>
                </Link>
            </div>
            <div className="h-full w-full bg-background rounded-lg flex flex-col gap-8 p-8">
                <div className="flex gap-4 items-center hover:cursor-pointer">
                    <div className="rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold">{user?.name[0]}</div>
                    <div className="flex flex-col">
                        <p className="text-white text-sm font-bold truncate max-w-[200px]">{user?.name}</p>
                        <p className="text-secondary text-xs font-bold truncate max-w-[200px]">{user?.email}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-white">Name</p>
                        <input disabled className="text-secondary border border-white rounded-lg p-4" value={user.name}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white">Email</p>
                        <input disabled className="text-secondary border border-white rounded-lg p-4" value={user.email}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white">Plan</p>
                        <input disabled className="text-secondary border border-white rounded-lg p-4" value={user.plan?.charAt(0).toUpperCase() + user.plan?.slice(1)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}