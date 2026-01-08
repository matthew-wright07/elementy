import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";
import { IoMdSettings } from "react-icons/io";

export default function Upgrade() {
  return (
    <div className="col-span-10 bg-tertiary h-full w-full flex flex-col p-8 lg:p-16 gap-6 overflow-scroll">
        <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl font-bold">Upgrade</h2>
              <Link to="/settings">
                <IoMdSettings className="text-white h-5 w-5 hover:cursor-pointer"/>
              </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-8 lg:gap-16 h-full">
            <PricingCard title="Free" price="0" description="Perfect for getting started and exploring Elementy’s core features." features={["5 Request Per Day","Basic Support","Standard AI Models"]} popular={false} href="https://billing.stripe.com/p/login/9B65kCgVLg285b9a4H8AE00"/>
            <PricingCard title="Pro" price="20" description="Built for creators who want more power, customization, and growth." features={["Unlimited Request","Standard Support","Advanced AI Models"]} popular={true} href="https://buy.stripe.com/9B65kCgVLg285b9a4H8AE00"/>
            <PricingCard title="Elite" price="40" description="Everything Elementy offers, unlocked for serious builders and teams." features={["Unlimited Request","Premium Support","Premium AI Models","Advanced Settings"]} popular={false} href="https://buy.stripe.com/bJe28q0WN6ry6fdgt58AE01"/>
        </div>
    </div>
  );
}