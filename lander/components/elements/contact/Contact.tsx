import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";

export default function Contact(){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">Contact</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <img src="https://wallpapers.com/images/hd/glowing-contact-us-logo-qx58564q7a51etk6.jpg" className="w-full rounded-lg"/>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-2xl font-bold">Let's Get In Touch</h3>
                            <input type="text" className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Name"/>
                            <input type="text" className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Email"/>
                            <input type="text" className="border border-white p-4 rounded-lg text-white placeholder-secondary" placeholder="Message"/>
                            <div>
                                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Send</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}