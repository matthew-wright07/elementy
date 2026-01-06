import { FaDatabase } from "react-icons/fa6";
import { useUserStore } from "../../../utils/store";
import { FiRefreshCcw } from "react-icons/fi";
import SavedCard from "./SavedCard";

export default function Saved(){
    const user = useUserStore(state => state.user);
    const fetchUser = useUserStore((state) => state.fetchUser);

    function refresh(){
        fetchUser();
    }
    
    return (
        <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-16 gap-6 overflow-y-scroll">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Saved</h2>
                <FiRefreshCcw onClick={refresh} className="text-white h-5 w-5 hover:cursor-pointer"/>
            </div>
            {user?.saved?.length > 0 ? 
            <div className="grid grid-cols-3 auto-rows-[calc(50%-1rem)] w-full h-full gap-8 rounded-lg bg-tertiary">
                {user.saved.map((current, index) => (
                    <SavedCard key={index} index={index} current={current}/>
                ))}
            </div>
            :
            <div className="grid grid-cols-3 auto-rows-[calc(50%-1rem)] w-full h-full gap-8 rounded-lg bg-tertiary">
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 bg-background transition duration-500">
                    <FaDatabase className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">No Data</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 bg-background transition duration-500">
                    <FaDatabase className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">No Data</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 bg-background transition duration-500">
                    <FaDatabase className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">No Data</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 bg-background transition duration-500">
                    <FaDatabase className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">No Data</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 bg-background transition duration-500">
                    <FaDatabase className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">No Data</p>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-1 bg-background transition duration-500">
                    <FaDatabase className="w-8 h-8 text-white"/>
                    <p className="text-xl text-white font-bold">No Data</p>
                </div>
            </div>
        }
        </div>
    )
}