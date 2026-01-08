import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu"
import PaddingX from "../core/PaddingX"
import PaddingY from "../core/PaddingY"

export default function Header(){
    return (
        <div className="xl:hidden w-full">
            <PaddingX>
                <PaddingY>
                    <div className="w-full flex justify-between items-center rounded-lg flex xl:hidden">
                        <Link to="/" className="flex gap-2 items-center">
                            <img src="/logo.svg" className="w-8 h-8"/>
                        <h1 className="text-white text-2xl font-bold">Elementy</h1>
                        </Link>
                        <MobileMenu/>
                    </div>
                </PaddingY>
            </PaddingX>
        </div>
    )
}