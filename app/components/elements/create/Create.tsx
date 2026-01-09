import { AiFillOpenAI } from "react-icons/ai";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RingLoader } from "react-spinners"
import { useRef, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useUserStore } from "../../../utils/store";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function Create(){
    const [message,setMessage] = useState("")
    const [messages, setMessages] = useState<string[]>([]);
    const [code,setCode] = useState("")
    const [loading,setLoading] = useState(false)
    const [copied,setCopied] = useState(false)
    const [saved,setSaved] = useState(false)
    const [type,setType] = useState("display");
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const user = useUserStore(state => state.user);
    const fetchUser = useUserStore((state) => state.fetchUser);

    let appCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.tailwindcss.com"></script>
            <script>
                document.addEventListener("click", (e) => {
                if (e.target.closest("a")) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                });
            </script>
        </head>
        <body>
            <div class="w-full h-full overflow-y-scroll">
                ${code}
            </div>
        </body>
        </html>
        `

    useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
    }
}, [messages]);

    function handleChange(event:React.ChangeEvent<HTMLTextAreaElement>){
        setMessage(event?.target.value)
        console.log(message)
    }

    async function handleClick(){
        if (loading) return;
        setLoading(true)
        const nextMessages = [...messages, message]
        setMessages(nextMessages);
        const res = await fetch(VITE_API_URL+"/chat/openai",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({message:message,context:nextMessages.slice(-5, -1)})
        })
        const data = await res.json()
        setLoading(false)
        setMessage("");
        if (!res.ok) {
            toast.error(data.message || "Error");
        return;
        }
        setMessages(prev => [...prev, data.code])
        setCode(data.code)
    }

    async function copy() {
        await navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>){
    if (event.key === "Enter") {
        event.preventDefault();
        handleClick();
    }
    };

    async function save(){
        setSaved(true) 
        await fetch(VITE_API_URL+"/user/addsave",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({saveData:appCode ,code:code, email: user?.email}),
        })
        fetchUser();
        setTimeout(() => {
            setSaved(false);
        }, 1500);
    }

    function handleTypeChange(newType:string){
        setType(newType);
    }
    
    return (
        <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-8 lg:p-16 gap-6 overflow-scroll">
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Create</h2>
                <div className="flex items-center gap-4">
                    <Link to="/settings">
                        <IoMdSettings className="text-white h-5 w-5 hover:cursor-pointer"/>
                    </Link>
                </div>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 flex flex-col w-full h-full gap-8 rounded-lg bg-teriary">
                <div className="w-full h-full p-8 flex flex-col gap-4 bg-background rounded-lg">
                    <p className="font-bold text-white text-xl">Chat</p>
                    <div className="flex flex-col justify-between h-full gap-8">
                        <div className="sticky bottom-0 rounded-lg h-full">
                            <div className="w-full rounded-lg text-white h-full flex flex-col justify-between gap-0">
                                <textarea disabled={loading} onKeyDown={handleKeyDown} onChange={handleChange} value={message} className="placeholder-secondary w-full h-48 resize-none outline-none disabled:text-secondary" placeholder="Generate UI components in seconds..."/>
                                <div className="flex justify-between w-full">
                                    <div className="flex gap-1 items-center">
                                        <AiFillOpenAI className="h-4 w-4"/>
                                        <p>ChatGPT</p>
                                    </div>
                                    <FaArrowUp onClick={!loading ? handleClick : undefined} className="text-background bg-white hover:bg-primary hover:text-white rounded-lg p-2 h-8 w-8 flex items-center justify-center hover:cursor-pointer transition duration-500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!loading?
                <div className="w-full h-full gap-8">
                    <div className="rounded-lg bg-background h-full w-full flex flex-col justify-between">
                        <div className="flex flex-col gap-4 p-8 w-full h-full">
                            <div className="flex justify-between border border-white p-2 rounded-lg">             
                                <p onClick={()=>handleTypeChange("display")} className={`${type==="display"?"bg-primary":null} font-bold text-white text-xl rounded-lg p-2 w-1/2 text-center hover:cursor-pointer`}>Display</p>
                                <p onClick={()=>handleTypeChange("code")} className={`${type==="code"?"bg-primary":null} font-bold text-white text-xl rounded-lg p-2 w-1/2 text-center hover:cursor-pointer`}>Code</p>
                            </div>       
                            {type==="display"?
                            <iframe srcDoc={appCode} className="w-full rounded-lg py-2 h-124" sandbox="allow-scripts allow-same-origin"/>
                            :
                            <pre className="whitespace-pre-wrap text-white w-full rounded-lg py-2 h-124 overflow-auto">
                                <code>{code}</code>
                            </pre>
                            }
                        </div>
                        <div className="flex gap-4 p-8 w-full justify-between">
                            {copied ? (
                                    <FaCheck className="h-5 w-5 text-white" />
                                ) : (
                                    <BiSolidCopy
                                        className="h-5 w-5 text-white hover:cursor-pointer"
                                        onClick={copy}
                                    />
                            )}
                            {saved ? (
                                <FaCheck className="h-5 w-5 text-white" />
                            ) : (
                                <FaHeart className="text-white h-5 w-5 hover:cursor-pointer" onClick={save}/>
                            )}
                        </div>
                    </div>
                </div>
                :
                <div className="w-full h-full gap-8 flex flex-col justify-center items-center bg-background rounded-lg">
                    <RingLoader color="#ffffff" size={32}/>
                </div>
                }
            </div>
        </div>
    )
}