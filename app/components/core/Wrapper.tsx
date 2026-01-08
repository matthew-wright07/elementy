type Props = {
    children: React.ReactNode
}

export default function Wrapper({children}:Props){
    return (
        <div className="flex flex-col xl:grid xl:grid-cols-12 w-full h-screen">
            {children}
        </div>
    )
}