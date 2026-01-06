import { FaCircleUser } from "react-icons/fa6";

type Props = {
  name: string;
  review: string;
};

export default function ReviewsCard({name,review}:Props){
    return (
        <div className="border border-white p-8 rounded-lg shadow-[0_0_20px_0] shadow-primary flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <FaCircleUser className="w-6 h-6 text-white"/>
                <h3 className="text-white text-2xl font-bold text-center">{name}</h3>
            </div>
            <p className="text-white">{review}</p>
        </div>
    )
}