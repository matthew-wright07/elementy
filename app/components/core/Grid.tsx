type Props = {
    children: React.ReactNode
}

export default function Grid({children}:Props){
    return (
        <div className="grid grid-cols-12 w-full h-screen">
            {children}
        </div>
    )
}