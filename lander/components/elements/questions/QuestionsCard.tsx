import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";

type Props = {
    question:string,
    answer:string
}

export default function QuestionsCard({question,answer}:Props){
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(!clicked)
    }
    return (
        <div onClick={handleClick} className="flex flex-col gap-4 border border-white p-4 rounded-lg hover:cursor-pointer">
            <div className="flex justify-between items-center">
                <p className="text-white">{question}</p>
                <IoIosArrowDown className={`${clicked?"rotate-180":null} w-4 h-4 text-white`}/>
            </div>
            {clicked?<p className="text-white">{answer}</p>:null}
        </div>
    )
}