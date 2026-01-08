import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";
import { Link } from "react-router-dom";

export default function Walkthrough(){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">Walkthrough</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <iframe
                            src="https://www.youtube.com/embed/vMyk77NNJeU"
                            className="w-full aspect-video rounded-lg"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-2xl font-bold">Let's Take A Look</h3>
                            <p className="text-secondary">Build beautiful, production-ready UI components in seconds with AI. Simply describe what you want in plain language, and instantly generate clean, modern components that are ready to copy, paste, and customize—no setup, no boilerplate, no wasted time. Every component is designed with real products in mind, not flashy demos or half-baked examples, so what you generate actually fits into serious applications. Skip the repetitive layout work, endless spacing tweaks, and trial-and-error styling that slow you down. Instead of fighting CSS or rebuilding the same components over and over, let AI handle the structure while you focus on logic, flow, and polish. Ship faster, iterate smarter, and spend your time building interfaces that feel intentional, intuitive, and genuinely great to use—without sacrificing quality or control.</p>
                            <Link to="/auth" className="px-4 py-3 w-fit border border-white text-white rounded-lg hover:bg-white hover:text-primary transition duration-500 cursor-pointer">Learn More</Link>
                        </div>
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}