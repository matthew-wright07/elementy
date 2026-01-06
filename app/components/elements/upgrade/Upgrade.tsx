import { MdAccountCircle } from "react-icons/md";
import PricingCard from "./PricingCard";

export default function Upgrade() {
  return (
    <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-16 gap-6">
        <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl font-bold">Upgrade</h2>
            <div className="flex items-center gap-4">
                <MdAccountCircle className="text-white h-5 w-5 hover:cursor-pointer"/>
            </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4 lg:gap-16 h-full">
            <PricingCard title="Free" price="0" description="Lorem Ipsum" features={["5 Request Per Day","Basic Support","Standard AI Models"]} popular={false}/>
            <PricingCard title="Pro" price="20" description="Lorem Ipsum" features={["Unlimited Request","Standard Support","Advanced AI Models"]} popular={true}/>
            <PricingCard title="Elite" price="40" description="Lorem Ipsum" features={["Unlimited Request","Premium Support","Premium AI Models","Advanced Settings"]} popular={false}/>
        </div>
    </div>
  );
}