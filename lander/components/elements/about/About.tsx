import PaddingX from "../../core/PaddingX"
import PaddingY from "../../core/PaddingY"
import QuestionsCard from "../questions/QuestionsCard"

export default function About(){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">About</h2>
                    <p className="text-secondary">
                        We built this app for developers who care about speed and quality. Building great interfaces shouldn’t mean spending hours recreating the same buttons, cards, and layouts—or endlessly tweaking spacing until it “feels right.” We believe UI work should be fast, flexible, and actually enjoyable.

                        Our platform uses AI to turn plain-language descriptions into clean, modern UI components you can copy, paste, and ship. Every component is designed for real products, not demos, with structure and styling that fits naturally into modern front-end stacks. You stay in control—customize, extend, and refine however you want.

                        At the end of the day, this tool is about removing friction. Less busywork. Fewer distractions. More momentum. So you can focus on building interfaces that feel intentional, polished, and great to use—while shipping faster than ever.
                    </p>
                    <div className="flex flex-col gap-4 w-full">
                        <QuestionsCard
                            question="Who is this app for?"
                            answer="It’s built for developers, designers, founders, and product builders who want to ship faster without sacrificing quality."
                            />

                        <QuestionsCard
                            question="Do I need to know how to code?"
                            answer="Basic coding knowledge helps, but it’s not required. You can generate components instantly and customize them as needed."
                        />

                        <QuestionsCard
                            question="Is the generated code production-ready?"
                            answer="Yes. The output is clean, readable, and designed to be used directly in real projects."
                        />

                        <QuestionsCard
                            question="Can I use the generated code commercially?"
                            answer="Yes. All generated components are yours to use in both personal and commercial projects with no extra licensing."
                        />
                    </div>
                </div>
            </PaddingY>
        </PaddingX>
    )
}