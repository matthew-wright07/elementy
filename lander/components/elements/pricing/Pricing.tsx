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
                        <PricingCard title="Free" price="0" description="Perfect for getting started and exploring Elementy’s core features." features={["5 Request Per Day","Basic Support","Standard AI Models"]} popular={false} href="/auth"/>
                        <PricingCard title="Pro" price="20" description="Built for creators who want more power, customization, and growth." features={["Unlimited Request","Standard Support","Advanced AI Models"]} popular={true} href="/auth"/>
                        <PricingCard title="Elite" price="40" description="Everything Elementy offers, unlocked for serious builders and teams." features={["Unlimited Request","Premium Support","Premium AI Models","Advanced Settings"]} popular={false} href="/auth"/>
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}