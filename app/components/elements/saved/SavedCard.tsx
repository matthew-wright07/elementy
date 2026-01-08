import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { BiSolidCopy } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useUserStore } from "../../../utils/store";
const VITE_API_URL = import.meta.env.VITE_API_URL;

type Props = {
    index: number;
    current: {
        data: string;
        code: string;
    }
}

export default function SavedCard({index,current}:Props){
    const [copied,setCopied] = useState(false)
    const [type,setType] = useState("display");
    const [isDeleting,setIsDeleting] = useState(false)
    const user = useUserStore(state => state.user);
    const fetchUser = useUserStore((state) => state.fetchUser);

    function handleTypeChange(newType:string){
        setType(newType);
    }
    
    async function copy() {
        await navigator.clipboard.writeText(current.code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }
    
    async function deleteItem(){
        setIsDeleting(true) 
        await fetch(VITE_API_URL+"/user/deletesave",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data:current.data, code:current.code, email: user?.email})
        })
        fetchUser();
        setTimeout(() => {
            setIsDeleting(false);
        }, 1500);
    }

    return (
        <div className="flex flex-col justify-between gap-4 p-8 w-full h-full rounded-lg bg-background overflow-auto"> 
            <div className="flex justify-between border border-white p-2 rounded-lg">             
                <p onClick={()=>handleTypeChange("display")} className={`${type==="display"?"bg-primary":null} font-bold text-white text-xl rounded-lg p-2 w-1/2 text-center hover:cursor-pointer`}>Display</p>
                <p onClick={()=>handleTypeChange("code")} className={`${type==="code"?"bg-primary":null} font-bold text-white text-xl rounded-lg p-2 w-1/2 text-center hover:cursor-pointer`}>Code</p>
            </div>       
            <div key={index} className="flex justify-center items-center transition duration-500 h-full w-full">
                {type==="display"?
                    <iframe srcDoc={current.data} className="w-full rounded-lg py-2 h-35 overflow-auto"/>
                :
                <pre className="whitespace-pre-wrap text-white w-full rounded-lg py-2 h-35 overflow-auto">
                    <code>{current.code}</code>
                </pre>
                }
            </div>
            <div className="flex justify-between items-center">
                {copied ? (
                        <FaCheck className="h-5 w-5 text-white" />
                    ) : (
                        <BiSolidCopy
                            className="h-5 w-5 text-white hover:cursor-pointer"
                            onClick={copy}
                        />
                )}
                {
                    isDeleting?
                    <FaCheck className="h-5 w-5 text-white" />
                    :
                    <MdDelete onClick={deleteItem} className="h-5 w-5 text-white hover:cursor-pointer" />
                }
            </div>
        </div>
    )
}