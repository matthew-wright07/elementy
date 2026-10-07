type Props = {
  children: React.ReactNode;
};

export default function PaddingY({children}:Props){
    return (
        <div className="py-20 max-w-[1600px] w-full">
            {children}
        </div>
    )
}