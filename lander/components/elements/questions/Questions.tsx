import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";
import QuestionsCard from "./QuestionsCard";

export default function Questions(){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">Questions</h2>
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