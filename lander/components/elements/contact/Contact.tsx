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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg py-8 w-full">
                    <div className="flex flex-col gap-8 w-3/4">
                        <p className="text-white font-bold text-4xl">Lets Get In Touch</p>
                        <p className="text-secondary text-lg">If you need help with anything, we’re here for you. Whether it’s a quick question, a technical issue, or just something that doesn’t seem right, don’t hesitate to reach out. We’re always happy to help and will get back to you as soon as we can.</p>
                        <p className="text-secondary text-lg">Or reach out manually at <a className="text-primary" href="mailto:support@elementy.io">support@elementy.io</a></p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-lg">Name</p>
                            <input type="text" value={name} onChange={handleNameChange} className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Enter Your Full Name"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-lg">Email</p>
                            <input type="text" value={email} onChange={handleEmailChange} className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Enter Your Email"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-lg">Message</p>
                            <input type="text" value={message} onChange={handleMessageChange} className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Enter Your Message"/>
                        </div>
                        <div>
                            <button onClick={handleClick} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">{sent?<FaCheck className="h-5 w-5 text-white" />:"Send"}</button>
                        </div>
                    </div>  
                </div>
            </PaddingY>
        </PaddingX>
    )
}