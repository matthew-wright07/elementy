import PaddingX from "../../core/PaddingX";
import PaddingY from "../../core/PaddingY";

type Props = {
    title:string,
    description:string
}

export default function Legal({title,description}:Props){
    return (
        <PaddingX>
            <PaddingY>
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-4xl font-bold text-white">{title}</h2>
                    <p className="text-white whitespace-pre">{description}</p>
                </div>
            </PaddingY>
        </PaddingX>
    )
}