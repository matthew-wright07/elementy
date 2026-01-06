import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";
import FeaturesCard from "./FeaturesCard"
import { FaBoltLightning } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function Features(){
    return (
        <div className="bg-gradient-to-b from-primary/30 via-zinc-900 to-background">
            <PaddingX>
                <PaddingY>
                    <div className="flex flex-col gap-8 w-full pt-32">
                        <h2 className="text-4xl font-bold text-white">Features</h2>
                        <div className="grid grid-cols-2 xl:grid-cols-4 w-full gap-4 lg:gap-16">

                            <FeaturesCard title="Faster Development" description="AI-powered development features are built to dramatically speed up how you build. From instant code generation to intelligent suggestions and automated workflows, AI removes repetitive work and friction.">
                                <FaBoltLightning className="text-white h-8 w-8"/>
                            </FeaturesCard>

                            <FeaturesCard title="Instant Components" description="Production-ready UI components you can copy and paste directly into your project. No setup, no boilerplate, just drop them in and ship.">
                                <FaRocket className="text-white h-8 w-8" />
                            </FeaturesCard>

                            <FeaturesCard title="Clean & Customizable" description="Every component is designed to be easy to customize. Tweak styles, layouts, and behavior without fighting messy or over-engineered code.">
                                <FaGear className="text-white h-8 w-8" />
                            </FeaturesCard>

                            <FeaturesCard title="Modern by Default" description="Components follow modern best practices with clean structure and up-to-date patterns, so they fit naturally into any modern React project.">
                                <FaStar className="text-white h-8 w-8" />
                            </FeaturesCard>

                        </div>
                    </div>
                </PaddingY>
            </PaddingX>
        </div>
    )
}