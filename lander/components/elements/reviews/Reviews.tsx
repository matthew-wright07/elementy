import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";
import ReviewsCard from "./ReviewsCard"

export default function Reviews(){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">Reviews</h2>
                    <div className="grid grid-cols-2 xl:grid-cols-4 w-full gap-4 lg:gap-16">
                        <ReviewsCard name="Alex M." review="This app saved me hours. I generated exactly the UI components I needed, copied them straight into my project, and everything just worked. Super clean and insanely fast." />

                        <ReviewsCard name="Sarah L." review="I’ve tried a bunch of AI tools, but this one actually feels practical. The components are well-structured, easy to customize, and fit perfectly into my existing React setup." />

                        <ReviewsCard name="Mike R." review="Perfect for rapid prototyping. Instead of overthinking layouts, I just generate a component, tweak it, and move on. It’s become part of my daily workflow." />

                        <ReviewsCard name="Emily K." review="The best part is how simple it is. No bloated features, just solid components you can copy and paste and ship. Exactly what I wanted." />
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}