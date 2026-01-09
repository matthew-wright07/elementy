import { useState } from "react";
import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";
import { FaCheck } from "react-icons/fa";

export default function Contact(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    const [sent,setSent] = useState(false)

    function handleClick(){
        setSent(true)
        setName("")
        setEmail("")
        setMessage("")
        setTimeout(() => {
            setSent(false);
        }, 1500);
    }

    function handleNameChange(event:any){
        setName(event.target.value)
    }
    function handleEmailChange(event:any){
        setEmail(event.target.value)
    }
        function handleMessageChange(event:any){
        setMessage(event.target.value)
    }

    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">Contact</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg py-8">
                        <div className="flex flex-col gap-8">
                            <div className="gap-1">
                                <h3 className="text-white text-2xl font-bold">Email:</h3>
                                <h3 className="text-white text-2xl font-bold">support@elementy.io</h3>
                            </div>
                            <div className="gap-1">
                                <h3 className="text-white text-2xl font-bold">Phone:</h3>
                                <h3 className="text-white text-2xl font-bold">+1 (512) 586-4786</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-2xl font-bold">Let's Get In Touch</h3>
                            <input type="text" value={name} onChange={handleNameChange} className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Name"/>
                            <input type="text" value={email} onChange={handleEmailChange} className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Email"/>
                            <input type="text" value={message} onChange={handleMessageChange} className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Message"/>
                            <div>
                                <button onClick={handleClick} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">{sent?<FaCheck className="h-5 w-5 text-white" />:"Send"}</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}