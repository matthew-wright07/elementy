import { FaCheckCircle } from "react-icons/fa";

type Props = {
    title: string,
    price: string,
    description: string,
    features: string[],
    popular: boolean
}

export default function PricingCard({title,price,description,features,popular}:Props){
    return (
        <div className={`w-full flex flex-col gap-4 rounded-lg ${popular?"bg-primary shadow-[0_0_20px_0] shadow-primary":null} border border-white px-8 py-8`}>
                <h3 className="text-white text-2xl font-bold">{title}</h3>
                <p className="text-white text-4xl font-bold">${price}<span className={`${popular?"text-white":"text-secondary"} text-base font-bold`}> /per month</span></p>
                <p className={`${popular?"text-white":"text-secondary"}`}>{description}</p>
                <button className={`${popular?"text-white border border-white hover:bg-white hover:text-primary":"bg-primary text-white hover:bg-white hover:text-primary"} rounded-lg py-4 transition duration-500 hover:cursor-pointer`}>Get Started</button>
                {features.map(current=>{
                    return <p className="text-white flex gap-2 items-center"><FaCheckCircle/> {current}</p>
                })}
        </div>
    )
}