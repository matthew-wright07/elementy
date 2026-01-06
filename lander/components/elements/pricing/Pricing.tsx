import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";
import PricingCard from "./PricingCard"

export default function Pricing(){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">Pricing</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4 lg:gap-16">
                        <PricingCard title="Free" price="0" description="Lorem Ipsum" features={["5 Request Per Day","Basic Support","Standard AI Models"]} popular={false}/>
                        <PricingCard title="Pro" price="20" description="Lorem Ipsum" features={["Unlimited Request","Standard Support","Advanced AI Models"]} popular={true}/>
                        <PricingCard title="Elite" price="40" description="Lorem Ipsum" features={["Unlimited Request","Premium Support","Premium AI Models","Advanced Settings"]} popular={false}/>
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}